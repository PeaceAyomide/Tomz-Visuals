import React from 'react'
// Socials
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

import './Intro.css'

const Intro = () => {
  return (
      <section className='intro'>
      <h3>TOMZ VISUALS</h3>
      <div className="socialsintro"><FaSquareXTwitter className='twitterintro'/><GrInstagram className='instagramintro'/></div>
          <p>Meet Damilola Olumoko, a lifestyle and portrait photographer based in Nigeria. With a relaxed and candid approach, Damilola captures the natural beauty and unique personalities of his clients. Inspired by the beauty of everyday life, he's specialize in creating images that tell a story and evoke emotion. Trust Dami to capture the essence of who you are in his stunning photo adventure.</p>
    </section>
  )
}

export default Intro