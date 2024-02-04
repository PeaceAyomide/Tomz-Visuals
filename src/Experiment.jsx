import React from 'react'
import './Experiment.css'
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";


const Experiment = () => {
  return (
    <>
      <div className="grid">
        <div className="img-wrapper">
<img  src="https://picsum.photos/800/800/?random" alt="" />
          <div className="content slide-up">
          <FaRegHeart />
            <RiDownloadLine/>
            <CiShare2 />
            
        </div>
        </div>

        <div className="img-wrapper">
<img className='blur' src="https://picsum.photos/800/400/?random" alt="" />
          <div className="content fade">
          <FaRegHeart />
            <RiDownloadLine/>
            <CiShare2 />
            
        </div>
        </div>


        <div className="img-wrapper">
<img className='zoom' src="https://picsum.photos/800/700/?random" alt="" />
          <div className="content fade">
          <FaRegHeart />
            <RiDownloadLine/>
            <CiShare2 />
            
        </div>
        </div>
    </div>
    </>
    )
}

export default Experiment