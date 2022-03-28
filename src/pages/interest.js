import React from 'react'
import html from '../images/html.svg'
import css from '../images/css.svg'
import react  from '../images/react.svg'
import blender  from '../images/blender.svg'
import figma  from '../images/figma.svg'
import ai  from '../images/Ai.svg'
import {Link} from 'react-router-dom'
import Slide from 'react-reveal/Slide';

const Interest = () => {
  return (
    <div className='flex items-center bg-silver mt-11'>
      <Slide left>
        <div className='flex flex-wrap gap-12 mt-20 mb-20 ml-20'>
          <img className='w-18 mx-8 hover:scale-125 hover:drop-shadow-2xl duration-300' src={html} alt="" />
          <img className='w-18 hover:scale-125 hover:drop-shadow-2xl duration-300 ' src={css} alt="" />
          <img className='w-18 hover:scale-125 hover:drop-shadow-2xl duration-300' src={react} alt="" />
          <img className='w-18 mx-4 hover:scale-125 hover:drop-shadow-2xl duration-300' src={blender} alt="" />
          <img className='w-18 hover:scale-125 hover:drop-shadow-2xl duration-300' src={figma} alt="" />
          <img className='w-18 ml-10 hover:scale-125 hover:drop-shadow-2xl duration-300' src={ai} alt="" />
        </div>
      </Slide>
      <Slide right>
        <div className="font-sourceSans tracking-wide mr-20">
          <p className="text-yellow font-semibold text-2xl">Interests</p>
          <h1 className="text-black font-bold text-4xl mt-3">What I’m Interested With?</h1>
          <p className="text-black font-normal mt-2 mb-6 max-w-2xl">Currently, i’m interested in a multiple form of design and front end web development. Click the button below for more info about my works!</p>
          <Link className='p-3 px-8 text-white bg-yellow rounded hover:bg-darkYellow duration-300	 ' to='/'>
          Projects
          </Link>
        </div>
      </Slide>
    </div>
  )
}

export default Interest