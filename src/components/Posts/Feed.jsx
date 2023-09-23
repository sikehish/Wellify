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
    console.log(isProfessional)
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postsQuery = query(postsCollection, orderBy('timestamp', 'desc'));
      const postsSnapshot = await getDocs(postsQuery);

      const postList = [];

      postsSnapshot.forEach(async (docu) => {
        const profDoc = doc(db, "professionals", docu.data().userId)
    const docSnap = await getDoc(profDoc);
    const data=docSnap.data();
        postList.push({ id: docu.id, isFollowing: data?.followers.includes(user.uid), ...docu.data() });
      });

      setPosts(postList);
    };

    fetchPosts();
  }, []);

  // Handle creating a new post


  return (
    <div className="container mx-auto p-8 bg-feedbg h-screen">
      {isProfessional && <CreatePostButton />}
      {posts.map((post) => (
        <Post key={post.id} post={post} user={user} />
      ))}
    </div>
  );
};

export default Feed;
