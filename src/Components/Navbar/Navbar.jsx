import React, { useState } from 'react'
import './Navbar.css'
// Socials
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
// SearchBar
import { CiSearch } from "react-icons/ci";
// Close Button
import { IoIosClose } from "react-icons/io";

         // This is for search filter
const Firstpage = ({searchTerm, setSearchTerm }) => {

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    // Peace if the search bar is not visible, make it visible
    setIsSearchVisible(true);
    // Peace if the search bar is already visible, do nothing and return immediately
    if (isSearchVisible)
    { return; }   
  };

  const handleCloseClick = () => { 
    setIsSearchVisible(false);
  }

  return (
      <nav>
          <div className="socials">
          <FaSquareXTwitter className='twitter'/><GrInstagram  className='instagram'/>
          </div>
      <div className="searchbtn">

        <div className="searchbtnclose">
        {isSearchVisible && (<input id='searchinput' type="text"
          placeholder="Search" className="inputv"
          onChange={(event) =>{ 
            setSearchTerm(event.target.value);
          }} />)}
        {isSearchVisible && <IoIosClose className='close' onClick={handleCloseClick}/>}

        </div>
        
        <CiSearch className='search' onClick={handleSearchClick}/>
          
     
      </div>
      
      </nav>
      
  )
}

export default Firstpage