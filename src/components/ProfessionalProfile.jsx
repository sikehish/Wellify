import React, { useEffect, useState } from 'react'
import { collection, query, where, orderBy, getDocs,getDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { db } from '../firebase/firebase.js';
import Post from './Posts/Post.jsx';
import { useFollowStatus } from '../contexts/FollowStatusContext.jsx';


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
  const [followers, setFollowers] = useState([]);
  
  const [posts, setPosts] = useState([]);
  const [userDoc,setUserDoc] = useState(null);
  const docid = useParams().id;
  const [doesntExist, setDoesntExist] = useState(true);

  // Follow Button
  const { followStatus, toggleFollowStatus } = useFollowStatus();
  const isFollowingLocal = followStatus[docid] || false;

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
              setFollowers(documentData.followers.length);
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


  const handleFollowPost = async () => {
    const profRef = doc(db, 'professionals', docid);
    const docSnap1 = await getDoc(profRef);
    const prof=docSnap1.data();


    const usersRef = doc(db, 'users',currentUser.uid);
    const docSnap2 = await getDoc(usersRef);
    const user1=docSnap2.data();


    if (user1?.following?.includes(docid)) {
      // Remove user's UID from the likes array
      console.log("INSIDE 1")
     
      const updatedFollowing = user1?.following.filter((uid) => uid !== docid);
      const updatedFollowers = prof?.followers.filter((uid) => uid !== currentUser.uid);
      await updateDoc(usersRef, { following: updatedFollowing });
      await updateDoc(profRef, { followers: updatedFollowers });
      setFollowers(followers-1);
    } else {
      // Add user's UID to the likes array
      // DOESNT WOOOOOOOOOOOOOOOOOOOOORK
      console.log("INSIDE 2")
      await updateDoc(usersRef,{ following: arrayUnion(docid)});
      await updateDoc(profRef,{ followers: arrayUnion(currentUser.uid)});
      setFollowers(followers+1);
    }
    toggleFollowStatus(docid)
  };


  if (doesntExist) {
    return (
      <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Profile not found</h1>
      </div>
    )
  }

  return (
    <React.Fragment>
      <h1 className="text-4xl ml-4 md:ml-80 font-bold mb-10 mt-8">{name}'s Profile</h1>
      <div className="w-full md:w-1/2 px-4 md:px-auto mx-auto mt-5 bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center mb-4 md:ml-5">
          <img src={profilePicture} alt='profile' className="w-16 h-16 rounded-full mr-4" />
          <div className="flex flex-col items-start">
            <p className="text-lg font-medium">{name}</p>
            <p className="text-gray-600">{gender==="male"? '👨 '+gender : gender==='female'? '👩 '+gender : '🧑 '+gender}</p>
            <p className="text-gray-600">📧 <a className="hover:underline" href={`mailto:${email}`}>{email}</a></p>
            <p className="text-gray-600">📍 {location}</p>
            <p className="text-text mt-5">{description}</p>
          </div>
          <div className="flex flex-col items-center md:items-start align-center justify-center ml-5">
            <button onClick={handleFollowPost} className="ml-0 md:ml-20 mt-4 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              {isFollowingLocal ? '- Unfollow' : '+ Follow'}
            </button>
            <p className='ml-3 md:ml-0 mt-2 md:mt-0 mr-0 pl-20 text-center text-gray-600'> {followers} Followers</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-4xl ml-4 md:ml-80 font-bold mb-10 mt-8">Posts</h1>
        { posts.map((post,i)=><Post key={i} post={post} user ={currentUser} authorId={docid} showCase={true}/>)}
      </div>
    </React.Fragment>
  )
}

export default ProfessionalProfile;