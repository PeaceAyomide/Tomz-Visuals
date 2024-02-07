import React, { useState }  from 'react'
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { IoIosArrowDropright, IoIosArrowDropleft, IoIosCloseCircleOutline } from "react-icons/io";

import './GalleryTwo.css'

const GalleryTwo = () => {

  // Images
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
    

    {
        img: "https://picsum.photos/410/790/?random",
    },
    

  {
      img: "https://picsum.photos/530/190/?random",
    },
    

    {
        img: "https://picsum.photos/510/950/?random",
    }
  ]

  // i dont know what this is LOL
  const [slideNumber, setSlideNumber] = useState(0)
const [openModel, setOpenModal] = useState(false)
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
 } 
  
  
//close btn  
  const handleCloseModel = () => {
    setOpenModal(false)
}

  // previous image
  const prevSlide = () => {
slideNumber === 0 ? setSlideNumber( galleryImages.length -1) : setSlideNumber( slideNumber - 1)
  }

  // next image
  const nextSlide = () => {
slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }
  
   



  return (
    <div className='peacegallery'>

        {openModel &&
        <div className="sliderWrap">
         <IoIosCloseCircleOutline className='btnClose' onClick={handleCloseModel} />
          <IoIosArrowDropleft className='btnPrev'onClick={prevSlide} />
          <IoIosArrowDropright className='btnNext' onClick={nextSlide} />
          <div className="fullScreenImage">
            
<img src={galleryImages[slideNumber].img} alt="" />
        </div>
        </div>
      }



      <div className="peacegrid">
      {galleryImages && galleryImages.map((slide, index) => {
          return (
        <div className="img-wrapper" key={index}  onClick={() => handleOpenModal(index)}>
        <img src={slide.img} alt="" className='bictures'/>
          <div className="content slide-up">
         <FaRegHeart className="heartz" /> 
            <RiDownloadLine className="downloadz"/>
            <CiShare2 className="sharez" />
        </div>
        </div>
       )
      })  }
          

 </div>
                 </div>
    
    
      )
}

export default GalleryTwo