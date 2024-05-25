import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdOutlineArrowBackIos ,MdArrowForwardIos} from 'react-icons/md';

const PrevArrow = ({ onClick, color }) => {
  return (
    <div className='absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer' onClick={onClick}>
      <MdOutlineArrowBackIos size={24} color={color} />
    </div>
  );
};

const NextArrow = ({ onClick, color }) => {
  return (
    <div className='absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer' onClick={onClick}>
      <MdArrowForwardIos size={24} color={color} />
    </div>
  );
};

export { PrevArrow, NextArrow };
