import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Intro from '../Components/Intro/Intro'
import IntroPics from '../Components/IntroPics/IntroPics'
import Footer from '../Components/Footer/Footer'

const Firstpage = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
          <Navbar searchTerm={searchTerm} setSearchTerm={ setSearchTerm }/>
          <Intro />
      <IntroPics  searchTerm={searchTerm} setSearchTerm={ setSearchTerm }/>
      <Footer/>
      </>
  )
}

export default Firstpage