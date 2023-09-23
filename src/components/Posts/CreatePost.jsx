// src/components/Feed.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, query, orderBy, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Post from './Post';
import { useAuth } from '../../contexts/AuthContext';

const CreatePost = () => {
  const [newPostText, setNewPostText] = useState('');
  const [newPostImage, setNewPostImage] = useState('');
  const { currentUser: user } = useAuth()

  // Handle creating a new post
  const handleCreatePost = async () => {
    if (!newPostText) return;

    const postsCollection = collection(db, 'posts');
    const newPost = {
      text: newPostText,
      userId: user.uid,
      timestamp: new Date(),
      likes: [],
      comments: [],
    };

    const docRef = doc(db, "professionals", user.uid);
    const docSnap = await getDoc(docRef);
    const data=docSnap.data();

    newPost.name=data.name;
    newPost.gender=data.licenseNumber;
    newPost.address=data.location.location;
    newPost.addressName=data.location.name;
    newPost.profilePicture=data.profilePicture;



    await addDoc(postsCollection, newPost);

    // Clear the input field after creating a post
    setNewPostText('');
  };
  

  return (
    <div className="container mx-auto mt-8">
      
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Create a new post..."
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleCreatePost}
          >
            Post
          </button>
        </div>
    </div>
  );
};

export default CreatePost;
