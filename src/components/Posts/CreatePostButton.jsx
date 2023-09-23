import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { MdOutlineDynamicFeed } from 'react-icons/md';
import { useNavigate } from 'react-router';

const CreatePostButton = () => {
    const navigate=useNavigate();
  return (
      <section className='flex-row bg-blue-500 text-white py-1 px-3 mt-7 ml-2 mb-2 rounded-full hover:bg-blue-600 transition duration-300 text-center w-24 mx-auto'>
    <button
      onClick={(e)=>navigate('/create-post') }
    >
      <p className="mr-2">
        <FaPlusCircle />
      </p>
    </button>
    <button
      onClick={(e)=>navigate('/') }
    >
      <p className="ml-2">
        <MdOutlineDynamicFeed />
      </p>
    </button>
    </section>
  );
};

export default CreatePostButton;
