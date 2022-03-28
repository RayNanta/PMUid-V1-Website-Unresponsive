import React from 'react'
import project1 from '../images/project1.svg'
import project2 from '../images/project2.svg'
import project3 from '../images/project3.svg'
import project4 from '../images/project4.svg'
import project5 from '../images/project5.svg'
import Slide from 'react-reveal/Slide';

const Projects = () => {
  return (
    <div className='mt-11 ml-20 mr-20 mb-20 tracking-wide'>
      <Slide bottom>
        <p className="text-yellow font-semibold text-2xl text-center">Projects</p>
        <h1 className="text-black font-bold text-4xl mt-3 text-center">My Projects So Far</h1>
        <p className="text-black font-normal mt-2 mb-6 text-center">Here are some projects and personal works i have done so far. <br/> You can see some of the highlighted preview below, or check it through my portoflio accounts.</p>
      </Slide>
      <Slide bottom>
        <div className='flex flex-wrap mt-12 justify-center'>
          <img className='w-2/5 hover:drop-shadow-xl duration-300 hover:scale-105' src={project1} alt="" />
          <img className='w-2/5 ml-24 hover:drop-shadow-xl duration-300 hover:scale-105' src={project2} alt="" />
          <img className='w-72 mt-8 hover:drop-shadow-xl duration-300 hover:scale-105' src={project3} alt="" />
          <img className='w-72 mt-8 ml-14 hover:drop-shadow-xl duration-300 hover:scale-105' src={project4} alt="" />
          <img className='w-72 mt-8 ml-14 hover:drop-shadow-xl duration-300 hover:scale-105' src={project5} alt="" />
        </div>
      </Slide>
      {/* <div className="flex justify-center my-14">
        <p>See More</p>
      </div> */}
    </div>
  )
}

export default Projects