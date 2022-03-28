import React from "react";
import {Link} from 'react-router-dom'
import maPict from '../images/Pict-About.svg'
import ornamentAbout from '../images/About-Ornament.svg'
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div className="flex items-center ml-20 mt-20 gap-12">
      <Slide left>
        <div className="font-sourceSans tracking-wide">
            <p className="text-yellow font-semibold text-2xl">About</p>
            <h1 className="text-black font-bold text-4xl mt-3">Getting Closer With Projectmu.id</h1>
            <p className="text-black font-normal mt-2 mb-6 max-w-2xl	">This is an official portfolio account from Projectmu.id for showcasing my personal project. It is curently being handled by Ray Nanta.</p>
            <Link className='p-3 px-8 text-white bg-yellow rounded hover:bg-darkYellow duration-300	 ' to='/'>
            Projects
            </Link>
        </div>
      </Slide>
      <Slide right>
        <div className="relative">
          <img src={maPict} alt="" />
        </div>
      </Slide>
        <div className="">
          <img className="absolute left-0 top-full w-16" src={ornamentAbout} alt="" />
        </div>
    </div>
  );
};

export default About;
