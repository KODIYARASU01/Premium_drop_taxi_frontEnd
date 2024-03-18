import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import '../Styles/BackButton.scss'
const BackButton = ({ destination = "/admin" }) => {
  return (
    <div className='flex'>
    <Link
      to={destination}
      className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit backarrow'
    >
      <BsArrowLeft className='text-2xl backarrow'  style={{color:'blue'}}/>
    </Link>
  </div>
  );
};

export default BackButton;
