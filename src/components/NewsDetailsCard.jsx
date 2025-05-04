import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    
    return (
        <div className=''>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="user img" />
          <h1 className='text-2xl pt-5'>{news.title}</h1>
          <p className='text-accent font-normal py-5'>{news.details}</p>
         <Link to ={`/category/${news.category_id}`}>
         <button className=' btn btn-secondary'> <FaArrowLeftLong />All news in this category</button>
         </Link>
        </div>
    );
};

export default NewsDetailsCard;