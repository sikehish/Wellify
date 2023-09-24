// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
// import {AiFillDelete} from 'react-icons/ai'
// import {TiTick} from 'react-icons/ti'
// import {ImCross} from 'react-icons/im'

const Dashboard = () => {
  const [professionals, setProfessionals] = useState([]);
  const { currentUser }= useAuth()
  const navigate=useNavigate()

  const fetchProfessionals = async () => {
    const professionalsCollection = collection(db, 'professionals');
    const professionalsSnapshot = await getDocs(professionalsCollection);
    const professionalList = [];

    professionalsSnapshot.forEach((doc) => {
      professionalList.push({ id: doc.id, ...doc.data() });
    });
    console.log(professionalList)
    setProfessionals(professionalList);
  };

  useEffect(() => {
    if(currentUser==null) navigate('/admin/login');
    fetchProfessionals();
  }, [currentUser]);

  const handleStatusChange = async (id, status) => {
    const professionalRef = doc(db, 'professionals', id);
    await updateDoc(professionalRef, { verified: status });
    fetchProfessionals();
  };

  const handleDeleteProfessional = async (id) => {
    const professionalRef = doc(db, 'professionals', id);
    await deleteDoc(professionalRef);
    fetchProfessionals();
  };

  return (
    <div className="container mx-auto px-6 mt-10">
      <h1 className="text-3xl font-semibold mb-4 mx-auto text-center">Admin Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse overflow-hidden bg-white rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">PFP</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">License No.</th>
              <th className="py-3 px-6 text-left">Gender</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {professionals.map((professional) => (
              <tr key={professional.id}>
                <td className="py-3 px-6 text-left">
                  {professional.profilePicture && (
                    <img
                      src={professional.profilePicture}
                      alt="Profile"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  )}
                </td>
                <td className="py-3 px-6">{professional.name}</td>
                <td className="py-3 px-6">{professional?.location?.name}</td>
                <td className="py-3 px-6">{professional.description}</td>
                <td className="py-3 px-6">{professional.licenseNumber}</td>
                <td className="py-3 px-6">{professional.gender}</td>
                <td className="py-3 px-6">{professional.email}</td>
                <td className="py-3 px-6">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      professional.verified === true
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {professional.verified === true ? 'Verified' : 'Unverified'}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <button
                    onClick={() =>
                      handleStatusChange(
                        professional.id,
                        professional.verified === true ? false : true
                      )
                    }
                    className="text-blue-500 py-1 px-1 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    {professional.verified === false? '✅': '❌'}
                  </button>
                  <button
                    onClick={() => handleDeleteProfessional(professional.id)}
                    className="text-red-500 py-1  rounded-md hover:bg-red-600 transition duration-300"
                  >
                  🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
