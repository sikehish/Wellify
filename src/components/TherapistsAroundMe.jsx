import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

// Calculate the distance (in kilometers) between two sets of coordinates using the Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

const TherapistsAroundMe = () => {
  const [profiles, setProfiles] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'professionals')));
        console.log(querySnapshot.docs);
        const profileData = querySnapshot.docs.map((doc) => ({id:doc.id, ...(doc.data())}));
        console.log(profileData);
        setProfiles(profileData);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };


    fetchProfiles();
  }, []);

  useEffect(() => {
    // Check if the Geolocation API is available in the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("User's location:", latitude, longitude)
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation not available in this browser.');
    }
  }, []);

  useEffect(() => {
    if (userLocation && profiles.length > 0) {
      const sortedProfiles = profiles.sort((a, b) => {
        const distanceA = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          a.latitude,
          a.longitude
        );
        const distanceB = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          b.latitude,
          b.longitude
        );
        return distanceA - distanceB;
      });
      setProfiles(sortedProfiles);
    }
  }, [userLocation, profiles]);


  return (
    <React.Fragment>
    <h2 className="text-5xl font-bold mb-8 mt-10 text-center" >Therapists Around Me</h2>
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
            <h2 className="text-lg font-semibold text-center" onClick={()=>navigate(`/professional/${profile.id}`)}>{profile.name}</h2>
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