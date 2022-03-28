import React from 'react'
import gitHub from '../images/github.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'
import Slide from 'react-reveal/Slide';


const Socmed = () => {
  return (
    <div className="">
      <Slide bottom>
        <p className='text-center mt-24 text-black font-sourceSans font-semibold text-2xl'>Follow Me On:</p>
        <div className='flex items-center justify-center mt-6'>
            <a href="https://github.com/RayNanta">
              <img className='w-10 mx-8 hover:scale-125 hover:drop-shadow-2xl duration-300' src={gitHub} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/projectmuu.id/">
              <img className='w-10 mx-8 hover:scale-125 hover:drop-shadow-2xl duration-300' src={instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com/rayyntt">
              <img className='w-10 mx-8 hover:scale-125 hover:drop-shadow-2xl duration-300' src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/channel/UCFT-qO4wUOg1LTJZiCaSkAg">
              <img className='w-14 mx-8 hover:scale-125 hover:drop-shadow-2xl duration-300' src={youtube} alt="YouTube" />
            </a>
        </div>
      </Slide>
    </div>
  )
}

export default Socmed