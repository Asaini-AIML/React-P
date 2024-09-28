import React, { useState } from 'react';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import "./Card.css";
const Card = ({ review }) => {
    const [isReadMore, setIsReadMore] = useState(false);
  if (!review) {
    return <p>No review available</p>;
  }

  const { image, name, job, text } = review;

  // State to toggle the read more/less
 

  // Toggle function
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-10 mx-auto'>
        <img src={image} alt={name} className="aspect-square rounded-full w-[140px] h-[140px] z-25" />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize leading-3 relative perspective-3d">
          {name}
          
        </p>
      </div>
      <div className="text-center mt-4">
        <p className="text-violet-300 text-sm uppercase">{job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500 max-h-[100px] overflow-hidden">
        {/* Display truncated text with Read More functionality */}
        {isReadMore ? text : `${text.substring(0, 200)}...`} {/* Show first 100 characters */}
        <button 
          onClick={toggleReadMore} 
          className="text-violet-500 font-semibold cursor-pointer"
        >
          {isReadMore ? ' Read Less' : ' Read More'}
        </button>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
