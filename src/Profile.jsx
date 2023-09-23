import React, { useEffect, useState } from 'react'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext.jsx';
import { db } from './firebase/firebase';


function Profile() {
  const navigate = useNavigate();
  const { currentUser, checkProfessional } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
      if (!currentUser) {
        navigate('/login');
    }
  },[currentUser])

  useEffect(() => {
    async function getProfile(collectionName) {
      const q = query(
        collection(db, collectionName),
        where('email', '==', currentUser?.email),
      );
    
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log('No matching document found.');
        return;
      }
      // console.log(querySnapshot.docs[0].data())
      const user = querySnapshot.docs[0].data();
      setEmail(user.email);
      setName(user.name);
      setProfilePicture(user.profilePicture);

    }
    if (currentUser) {
      const isProfessional = checkProfessional(currentUser.uid);
      isProfessional.then((result) => {
        if (result) {
          // console.log("Getting professionals!")
          getProfile('professionals');
        } else {
          // console.log("Getting users!")
          getProfile('users');
        }
      })
    }
  },[currentUser])

  return (
    <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="flex items-center mb-4">
        <img src={profilePicture} alt='profile' className="w-16 h-16 rounded-full mr-4" />
        <div>
          <p className="text-lg font-medium">{name}</p>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;