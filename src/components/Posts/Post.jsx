// src/components/Post.js
import React, { useState } from 'react';
import { addDoc, arrayUnion, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import {FcLikePlaceholder} from 'react-icons/fc'
import {FcLike} from 'react-icons/fc'
import {MdOutlineAddComment} from 'react-icons/md'
import {MdOutlineComment} from 'react-icons/md'
import {AiOutlineCheck} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const Post = ({ post, user, authorId, showCase }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [postLikes, setPostLikes] = useState(post.likes);
  const [isFollowingLocal, setIsFollowingLocal] = useState(post.isFollowing);

  const [postComments, setPostComments] = useState(post.comments);
  const userId=user.uid

  const navigate = useNavigate(); 

  // Handle adding a new comment
  const handleAddComment = async () => {
    if (!newComment) return;

    const commentsRef = collection(db, 'posts');
    const newCommentDoc = {
      text: newComment,
      userId: user.uid,
      timestamp: new Date(),
    };

    let docRef = doc(db, "users", user.uid);
    let docSnap = await getDoc(docRef);
    console.log(docSnap.exists())
    if (docSnap.exists()) {
      const data=docSnap.data();
      newCommentDoc.name=data.name;
    newCommentDoc.profilePicture=data.profilePicture;   
    } else {
       docRef = doc(db, "professionals", user.uid);
       docSnap = await getDoc(docRef);
       console.log(docSnap.exists())
      const data=docSnap.data();
      newCommentDoc.name=data.name;
    newCommentDoc.profilePicture=data.profilePicture;   
    }
    
    const postRef = doc(db, 'posts', post.id);
    await updateDoc(postRef, {
      comments: arrayUnion(newCommentDoc)
  });  

    // Clear the input field after adding a comment
    setPostComments([...postComments, newCommentDoc]);
    setNewComment('');
  };

  // Handle liking/unliking a post
  const handleLikePost = async () => {
    const postRef = doc(db, 'posts', post.id);
    const updatedLikes = postLikes.includes(user.uid)
    ? postLikes.filter((uid) => uid !== user.uid)
    : [...postLikes, user.uid];
  setPostLikes(updatedLikes);
      await updateDoc(postRef, { likes: updatedLikes });
  };
  
  const handleFollowPost = async () => {
    console.log(userId)
    // const profCol = collection(db, 'professionals');
    console.log(post.userId, user.uid)
    const profRef = doc(db, 'professionals', post.userId);
    const docSnap1 = await getDoc(profRef);
    const prof=docSnap1.data();


    // const usersCol = collection(db, 'users');
    const usersRef = doc(db, 'users',user.uid);
    const docSnap2 = await getDoc(usersRef);
    const user1=docSnap2.data();

    // console.log(user1,prof)

    console.log(post)
    if (user1?.following?.includes(post.userId)) {
      // Remove user's UID from the likes array
      const updatedFollowing = user1?.following.filter((uid) => uid !== post.userId);
      const updatedFollowers = prof?.followers.filter((uid) => uid !== user.uid);
      await updateDoc(usersRef, { following: updatedFollowing });
      await updateDoc(profRef, { followers: updatedFollowers });
      setIsFollowingLocal(false);
    } else {
      // Add user's UID to the likes array
    //   await updateDoc(postRef, {
    //     comments: arrayUnion(newCommentDoc)
    // });  
      // const updatedFollowing = user1?.following ? [...(user1?.following), post.userId ] : [post.userId];
      // const updatedFollowers =prof?.followers ? [...(prof?.followers), user.uid ] :[user.uid]
      // console.log(user.uid, updatedFollowers, updatedFollowing)
      // await updateDoc(usersRef, { following: updatedFollowing });
      // await updateDoc(profRef, { followers: updatedFollowers });
      await updateDoc(usersRef,{ following: arrayUnion(post.userId)});
      await updateDoc(profRef,{ followers: arrayUnion(user.uid)});
      setIsFollowingLocal(true);
      
    }
  };

  return (
    <div className="border rounded-lg mb-5 mt-5 md:w-1/2 mx-auto bg-white shadow-lg">
      <div className='flex justify-between bg-blue-100'>
        
      <div className=' p-3 flex'>
        <img
              src={post.profilePicture}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover my-auto"
              />
              <div className='ml-3'>
              <p className='hover:underline hover:cursor-pointer' onClick={()=>navigate(`/professional/${authorId}`)}>{post.name}</p>        
        <span className="text-xs text-gray-500">{(new Date(post.timestamp.toDate())).toDateString()}</span>
              </div>
        </div>
        {!showCase ? post.userId!=user.uid && <button className='flex items-center text-md mr-5' type='button' onClick={handleFollowPost}>
          {isFollowingLocal? <span className='px-1'>Following </span>: <span className='px-1'>Follow</span> }
          {isFollowingLocal? <AiOutlineCheck /> :  <AiOutlinePlus />}
        </button>
        : <div></div>}
        </div>
      <div>

      <p className="mb-2 pb-10 pt-4 px-2">{post.text}</p>
      {<div className=" flex mt-2 mx-2 px-2 w-full text-left">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          />
          <button
          className=" py-1 px-2 mt-2 mx-2 rounded hover:bg-blue-100 transition duration-300"
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
            {postLikes.includes(user.uid)? <FcLike /> : <FcLikePlaceholder />} 
          </button>
          <span className="text-sm">{postLikes.length}</span>
        <button
          className=" py-1 px-2 mt-2 rounded hover:bg-blue-100 transition duration-100"
          onClick={(e)=>setShowComments(prev=> !prev)}
          >
          <MdOutlineComment />
        </button>
        <span className="text-sm">{postComments.length}</span>
        <div className="mt-2">
        
      </div>
        
          </div>
          {showComments && (postComments.length>0 ? postComments.map((comment, index) => (
          <div className='ml-3 mt-5 mb-4'>
          {/* <img
                src={post.profilePicture}
                alt="Profile"
                className="h-5 w-5 rounded-full object-cover my-auto"
                /> */}
                <p>{comment.name}</p>    

          <span className="text-xs text-gray-500">{(new Date(post.timestamp.toDate())).toDateString()}</span>
                <div className='ml-2 mt-2'>
                <p>{comment.text}</p>        
                </div>
          </div>
        )) : <p className="block mb-1 w-max">
        No comments :(
      </p>)}
      </div>
    </div>
  );
};

export default Post;
