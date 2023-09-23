import React, { useEffect, useState } from 'react'
import { collection, query, where, orderBy, getDocs,getDoc, doc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { db } from '../firebase/firebase.js';
import Post from './Posts/Post.jsx';


function ProfessionalProfile() {
  const navigate = useNavigate();
  const { currentUser, checkProfessional } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  
  const [posts, setPosts] = useState([]);
  const [userDoc,setUserDoc] = useState(null);
  const docid = useParams().id;
  const [doesntExist, setDoesntExist] = useState(true);


  // Getting the profile
  useEffect(() => {
      const docRef = doc(db, 'professionals', docid);
      // Fetch the document
      const getDocument = async () => {
        try {
          const docSnapshot = await getDoc(docRef);

          if (docSnapshot.exists()) {
            
            const documentData = docSnapshot.data();
            if (!documentData.verified) {
              setDoesntExist(true);
            } else {
              setDoesntExist(false);
              setUserDoc(documentData);
              setEmail(documentData.email);
              setName(documentData.name);
              setProfilePicture(documentData.profilePicture);
              setLocation(documentData.location.name);
              setDescription(documentData.description);
              setGender(documentData.gender);
            }
          } else {
            setDoesntExist(true);
          }
        } catch (error) {
          setDoesntExist(true);
        }
      };
      getDocument();
  }, []);

  // Getting profile's posts
  useEffect(() => {
    // console.log(docid)
    const postsQuery = query(collection(db, 'posts'), where('userId', '==', docid), orderBy('timestamp', 'desc'));
    const getPosts = async () => {
      const postsSnapshot = await getDocs(postsQuery);
      console.log(postsSnapshot.docs)
      const postsData = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
      console.log(postsData);
    };
    getPosts();
  }, []);

  if (doesntExist) {
    return (
      <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Profile not found</h1>
      </div>
    )
  }

  return (
    <React.Fragment>
      <h1 className="text-4xl ml-80 font-bold mb-10 mt-8">{name}'s Profile</h1>
    <div className="w-1/2 px-auto mx-auto mt-5 bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img src={profilePicture} alt='profile' className="w-16 h-16 rounded-full mr-4" />
        <div>
          <p className="text-lg font-medium">{name}</p>
          <p className="text-gray-600">{gender}</p>
          <p className="text-gray-600 hover:underline"><a href={`mailto:${email}`}>{email}</a></p>
          <p className="text-gray-600">📍{location}</p>
          <p className="text-text mt-5">{description}</p>
        </div>
      </div>
    </div>
    <div className="mt-8">
    <h1 className="text-4xl ml-80 font-bold mb-10 mt-8">Posts</h1>
      { posts.map((post,i)=><Post post={post} user ={userDoc}/>)}
    </div>
    </React.Fragment>
  )
}

export default ProfessionalProfile;