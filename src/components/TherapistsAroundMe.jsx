import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const TherapistsAroundMe = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'professionals'));
        const profileData = querySnapshot.docs.map((doc) => doc.data());
        setProfiles(profileData);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <React.Fragment>
    <h1 className="text-2xl font-bold mb-4">Therapists Around Me</h1>
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile, index) => (
            <div key={index} className="bg-white p-4 shadow rounded-lg">
            {profile.profilePicture && (
                <div className="mb-2">
                <img
                    src={profile.profilePicture}
                    alt={`Profile of ${profile.name}`}
                    className="rounded-full h-16 w-16 object-cover mx-auto"
                />
                </div>
            )}
            <h2 className="text-lg font-semibold text-center">{profile.name}</h2>
            <p className="text-gray-500 text-center">📍{profile.location.name}</p>
            <p className="text-center text-gray-400">
                <a className=" hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
                </a>
            </p>
            <p className="text-text text-center mt-2">{profile.description}</p>
            </div>
        ))}
    </div>
    </React.Fragment>
  );
};



export default TherapistsAroundMe;