/* eslint-disable max-len */
import React from 'react';
import {Icon} from '../../Styles/icons';


const HorizontalCard = ({title, description, image, width, height, headIcon}) => {
  return (
    <div className='w-72' style={{width}}>
      <div className='w-full h-40 rounded-lg overflow-hidden bg-purple-500 shadow-lg transition-shadow'
        style={{height}}>
        {image&&<img src={image}
          alt={title} className='w-full h-full object-cover'/>}
      </div>
      <div>
        <div className='flex justify-between items-center mt-4'>
          <div className='text-2xl font-semibold'>
            <h1>{title || 'Lorem ipsum'}</h1>
          </div>
          <div>
            <Icon name={headIcon || 'star'}/>
          </div>
        </div>
        <div className='text-sm text-gray-400 pt-1'>
          <p>
            {description || 'lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
