// src/components/Post.js
import React, { useState } from 'react';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import {FcLikePlaceholder} from 'react-icons/fc'
import {FcLike} from 'react-icons/fc'
import {MdOutlineAddComment} from 'react-icons/md'
import {MdOutlineComment} from 'react-icons/md'

const Post = ({ post, user }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  console.log(post)

  // Handle adding a new comment
  const handleAddComment = async () => {
    if (!newComment) return;

    const commentsCollection = collection(db, 'posts', post.id, 'comments');
    const newCommentDoc = {
      text: newComment,
      userId: user.uid,
      timestamp: new Date(),
    };

    await addDoc(commentsCollection, newCommentDoc);

    // Clear the input field after adding a comment
    setNewComment('');
  };

  // Handle liking/unliking a post
  const handleLikePost = async () => {
    const postsCollection = collection(db, 'posts');
    const postRef = doc(db, 'posts', post.id);

    if (post.likes.includes(user.uid)) {
      // Remove user's UID from the likes array
      const updatedLikes = post.likes.filter((uid) => uid !== user.uid);
      await updateDoc(postRef, { likes: updatedLikes });
    } else {
      // Add user's UID to the likes array
      const updatedLikes = [...post.likes, user.uid];
      await updateDoc(postRef, { likes: updatedLikes });
    }
  };

  return (
    <div className="border rounded-lg mb-5 mt-5 md:w-1/2 mx-auto bg-white shadow-lg">
      <div className='bg-blue-100 p-3 flex'>
        <img
              src={post.profilePicture}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover my-auto"
              />
              <div className='ml-3'>
              <p>{post.name}</p>        
        <span className="text-xs text-gray-500">{(new Date(post.timestamp.toDate())).toDateString()}</span>
              </div>
        </div>
      <div>

      <p className="mb-2 pb-10 pt-4 px-2">{post.text}</p>
      {<div className=" flex mt-2 px-2 w-2/3 text-left">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          />
          <button
          className=" py-1 px-2 mt-2 rounded hover:bg-blue-100 transition duration-300"
          onClick={handleAddComment}
          >
          <MdOutlineAddComment />
        </button>
           </div>}
          <div className="flex items-center text-center mx-5 mb-3">
          <button
            className={`text-sm mr-2`}
            onClick={handleLikePost}
            >
            {post.likes.includes(user.uid)? <FcLike /> : <FcLikePlaceholder />} 
          </button>
          <span className="text-sm">{post.likes.length}</span>
        <button
          className=" py-1 px-2 mt-2 rounded hover:bg-blue-100 transition duration-100"
          onClick={(e)=>setShowComments(prev=> !prev)}
          >
          <MdOutlineComment />
        </button>
        <div className="mt-2">
        {showComments && (post.comments.length>0 ? post.comments.map((comment, index) => (
          <p key={index} className="text-sm mb-1">
            {comment.text} - <span className="text-gray-500">{comment.userId}</span>
          </p>
        )) : <p className="text-sm mb-1 w-max">
        No comments :(
      </p>)}
      </div>
       
          </div>
      </div>
    </div>
  );
};

export default Post;
