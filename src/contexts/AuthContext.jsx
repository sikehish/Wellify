// src/contexts/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";



export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate=useNavigate()
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up function
  function signup(name, email, password, confirmPassword) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Log in function
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function addUserToFirestore(uid, userData) {
    try {
      // Reference to the 'users' collection
      return setDoc(doc(db, "users", uid), userData);
    } catch (error) {
      console.error('Error adding user to Firestore:', error);
    }
  }

  function addProfessionalToFirestore(uid, professionalData) {
    try {
      // Reference to the 'professionals' collection
      return setDoc(doc(db, "professionals", uid), professionalData);
    } catch (error) {
      console.error('Error adding professional to Firestore:', error);
    }
  }

  async function checkProfessional(uid) {
    const user = doc(db, "professionals", uid)
    if (user) {
      return true;
    } else {
      console.log('Not a professional.');
      return false;
    }
  }

  // Log out function
  function logout() {
    console.log(currentUser)
    signOut(auth);
    navigate('/login')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    addUserToFirestore,
    addProfessionalToFirestore,
    checkProfessional
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
