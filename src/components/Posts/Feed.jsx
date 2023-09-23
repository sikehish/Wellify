// src/components/Feed.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, query, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Post from './Post';
import CreatePost from './CreatePost';
import CreatePostButton from './CreatePostButton';

const Feed = ({ user, isProfessional }) => {
  const [posts, setPosts] = useState([]);


  // Fetch posts from Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postsQuery = query(postsCollection, orderBy('timestamp', 'desc'));
      const postsSnapshot = await getDocs(postsQuery);
  
      const postPromises = [];
  
      postsSnapshot.forEach((docu) => {
        const profDoc = doc(db, "professionals", docu.data().userId);
        const promise = getDoc(profDoc)
          .then((dat) => dat.data())
          .then((data) => ({
            id: docu.id,
            isFollowing: data?.followers?.includes(user.uid),
            ...docu.data(),
          }));
  
        postPromises.push(promise);
      });
  
      const postList = await Promise.all(postPromises);
      setPosts(postList);
    };
  
    fetchPosts();
  }, [user]);
  

  // Handle creating a new post


  return (
    <div className="container mx-auto p-8 bg-feedbg h-screen">
      <h2 className="text-5xl font-bold mb-8" style={{marginLeft:'25vw'}}>Feed</h2>
      {isProfessional && <CreatePostButton />}
      {posts.map((post) => (
        <Post key={post.id} post={post} user={user} />
      ))}
    </div>
  );
};

export default Feed;
