import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";

import './GalleryTwo.css'

const GalleryTwo = () => {


   

  return (
    <div  className='peacegallery'>
      <div className="peacegrid">
        <div className="img-wrapper">
        <img src="https://picsum.photos/800/800/?random" alt="" className='bictures'/>
          <div className="content slide-up">
         <FaRegHeart className="heartz" /> 
            <RiDownloadLine className="downloadz"/>
            <CiShare2 className="sharez" />
        </div>
        </div>
        <div className="img-wrapper">
        <img src="https://picsum.photos/420/300/?random" alt="" className='bictures'/>
        <div className="content slide-up">
       <FaRegHeart className="heartz" /> 
            <RiDownloadLine className="downloadz"/>
            <CiShare2 className="sharez" />
        </div>
        </div>
        <div className="img-wrapper">
        <img src="https://picsum.photos/420/700/?random" alt="" className='bictures'/>
        <div className="content slide-up">
       <FaRegHeart className="heartz" /> 
            <RiDownloadLine className="downloadz"/>
            <CiShare2 className="sharez" />
        </div>
        </div>
        <div className="img-wrapper">
        <img src="https://picsum.photos/420/400/?random" alt="" className='bictures'/>
        <div className="content slide-up">
       <FaRegHeart className="heartz" /> 
            <RiDownloadLine className="downloadz"/>
            <CiShare2 className="sharez" />
        </div>   
        </div>
        <div className="img-wrapper">
        <img src="https://picsum.photos/520/500/?random" alt="" className='bictures'/>
        <div className="content slide-up">
       <FaRegHeart className="heartz" /> 
            <RiDownloadLine className="downloadz"/>
            <CiShare2 className="sharez" />
        </div>   
        </div>
        <div className="img-wrapper">
        <img src="https://picsum.photos/620/600/?random" alt="" className='bictures' />
        <div className="content slide-up">
       <FaRegHeart className="heartz" /> 
            <RiDownloadLine className="downloadz"/>
            <CiShare2 className="sharez" />
        </div>   
        </div>
        <div className="img-wrapper">
        <img src="https://picsum.photos/220/200/?random" alt="" className='bictures'/>
        <div className="content slide-up">
       <FaRegHeart className="heartz" /> 
            <RiDownloadLine className="downloadz"/>
            <CiShare2 className="sharez" />
        </div>   
        </div>
        <div className="img-wrapper">
        <img src="https://picsum.photos/620/100/?random" alt="" className='bictures'/>
        <div className="content slide-up">
       <FaRegHeart className="heartz" /> 
            <RiDownloadLine className="downloadz"/>
            <CiShare2 className="sharez" />
        </div>   
        </div>
          

 </div>
                 </div>
    
    
      )
}

export default GalleryTwo