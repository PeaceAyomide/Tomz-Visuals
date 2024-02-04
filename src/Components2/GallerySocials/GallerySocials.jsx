import React from 'react'
import './GallerySocials.css'
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";

const GallerySocials = () => {

    
  return (
    <div className='socialreact'>
      <div className="socialword">
      <h3>OWAMBE</h3>
          <p> TOMZ VISUALS</p>
      </div>
          <div className="socialreactions">
        <FaRegHeart className='likebtn' />
        <CiMenuKebab className='menubtn'/>
              <RiDownloadLine  className='downloadbtn'/>
              <CiShare2 className='sharebtn'/>
              <CiPlay1 className='playbtn'/>
          </div>
      
    </div>
  )
}

export default GallerySocials