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
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";



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

  //for admins
  function loginMain(email, password) {
    return signInWithEmailAndPassword(auth, email,password)
  }

  // Log in function
  function login(email, password) {
    // Checking if the professional is verified
    async function isProfessional() {
      const q = query(
        collection(db, 'professionals'),
        where('email', '==', email),
      );
    
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        return false;
      } else {
        return querySnapshot;
      }
    }
    const isProfessionalPromise = isProfessional();
    isProfessionalPromise.then((result) => {
      if (result) {
        if (result.docs[0].data().verified === false) {
          toast.error('Your account is not verified yet. Please wait for an admin to verify your account.');
        } else {
          return signInWithEmailAndPassword(auth, email, password);
        }
      } else {
        return signInWithEmailAndPassword(auth, email, password);
      }
      } 
    )
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
    const docRef = doc(db, "professionals", uid)
    const docSnap = await getDoc(docRef);
    // console.log("Is professional?",docSnap.exists())
    if (docSnap.exists()) {
      return docSnap;
    } else {
      // docSnap.data() will be undefined in this case
      return false;
    }
  }

  // Log out function
  function logout() {
    // console.log(currentUser)
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
    loginMain,
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
