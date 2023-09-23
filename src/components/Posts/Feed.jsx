// src/components/Feed.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
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

      const postList = [];

      postsSnapshot.forEach((doc) => {
        postList.push({ id: doc.id, ...doc.data() });
      });

      setPosts(postList);
    };

    fetchPosts();
  }, []);

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
