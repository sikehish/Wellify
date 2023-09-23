import React, { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const SearchTherapists = () => {
    const [searchCriteria, setSearchCriteria] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleSearch = async () => {
    
        // Build a Firestore query to search for professionals
        const q = query(
            collection(db, 'professionals'), 
            where('name', '==', searchCriteria)
        );

        const q2 = query(
            collection(db, 'professionals'), 
            where('location.name', '==', searchCriteria)
            );
    
        try {
            const querySnapshot = await getDocs(q);
            const querySnapshot2 = await getDocs(q2);
            const searchResults = (querySnapshot.docs.map((doc) => doc.data())).concat(querySnapshot2.docs.map((doc) => doc.data()));
            setSearchResults(searchResults);
            setSearched(true);
        } catch (error) {
            console.error('Error searching for professionals:', error);
        }
    };

    return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Find a Therapist</h1>
        <div className="mb-4">
        <input
            type="text"
            placeholder="Search by name or location"
            className="w-1/2 p-2 border rounded"
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
        />
        </div>
        <button
        className="bg-primary text-white p-2 rounded"
        onClick={handleSearch}
        >
        Search
        </button>
        {searched && (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((profile, index) => (
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
        )}
    </div>
    );
};

export default SearchTherapists;
