import React from 'react'
import './Experiment.css'
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import WSPGallery from './WSPGallery'

const Experiment = () => {
  
  const galleryImages = [
    {
      img: "https://picsum.photos/800/800/?random"
    },

    {
      img: "https://picsum.photos/420/300/?random",
     
  },
  {
      img: "https://picsum.photos/420/700/?random",
      
  },
  {
      img: "https://picsum.photos/420/400/?random", 
  },

  {
      img: "https://picsum.photos/510/990/?random",
  },
  ]
  
  
  return (
    <>
      <div>
        <strong>
          Responsive Photo Gallery (No External Library) in React.js
      </strong>
      </div>
      
      <WSPGallery galleryImages={ galleryImages} />
 </>
    )
}

export default Experiment