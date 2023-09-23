// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const Dashboard = () => {
  const [professionals, setProfessionals] = useState([]);
  
  const fetchProfessionals = async () => {
    const professionalsCollection = collection(db, 'professionals');
    const professionalsSnapshot = await getDocs(professionalsCollection);
    const professionalList = [];
    
    professionalsSnapshot.forEach((doc) => {
      professionalList.push({ id: doc.id, ...doc.data() });
    });
    
    setProfessionals(professionalList);
  };
  
  useEffect(() => {
    fetchProfessionals();
  }, []);

  const handleStatusChange = async (id, status) => {
    const professionalRef = doc(db, 'professionals', id);
    await updateDoc(professionalRef, { status });
    fetchProfessionals(); 
  };

  // Handle deleting a professional
  const handleDeleteProfessional = async (id) => {
    const professionalRef = doc(db, 'professionals', id);
    await deleteDoc(professionalRef);
    fetchProfessionals(); 
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Mental Health Professionals Dashboard</h1>
      <table className="min-w-full border-collapse overflow-hidden bg-white shadow-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 font-semibold text-left">Name</th>
            <th className="py-2 px-4 font-semibold text-left">Location</th>
            <th className="py-2 px-4 font-semibold text-left">Description</th>
            <th className="py-2 px-4 font-semibold text-left">Gender</th>
            <th className="py-2 px-4 font-semibold text-left">Email</th>
            <th className="py-2 px-4 font-semibold text-left">Status</th>
            <th className="py-2 px-4 font-semibold text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {professionals.map((professional) => (
            <tr key={professional.id}>
              <td className="py-2 px-4">{professional.name}</td>
              <td className="py-2 px-4">{professional.location}</td>
              <td className="py-2 px-4">{professional.description}</td>
              <td className="py-2 px-4">{professional.gender}</td>
              <td className="py-2 px-4">{professional.email}</td>
              <td className="py-2 px-4">
                {professional.status === 'verified' ? (
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full">Verified</span>
                ) : (
                  <span className="bg-red-500 text-white py-1 px-2 rounded-full">Unverified</span>
                )}
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleStatusChange(professional.id, professional.status === 'verified' ? 'unverified' : 'verified')}
                  className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2"
                >
                  {professional.status === 'verified' ? 'Unverify' : 'Verify'}
                </button>
                <button
                  onClick={() => handleDeleteProfessional(professional.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
