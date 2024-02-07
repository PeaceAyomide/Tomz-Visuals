import React, { useState } from 'react'
import { IoIosArrowDropright, IoIosArrowDropleft, IoIosCloseCircleOutline } from "react-icons/io";


const WSPGallery = ({galleryImages}) => {

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

    <div>


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
      
      <br />
      Current slide number: {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br />
      <div className="galleryWrap">
        {galleryImages && galleryImages.map((slide, index) => {
          return (
            <div className="single" key={index}
            
            onClick={() => handleOpenModal(index)}
            >
               <img src={slide.img} alt="" />
        </div>
      )
    })  }
      </div>
    </div>
  )
}

export default WSPGallery