import React from 'react'
import { Link } from 'react-router-dom'
import LogoPMU from '../images/PMULogo.svg'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-6 mx-20 font-roboto text-lg font-medium">
        <Link to="/">
            <img src={LogoPMU} alt="logo" />
        </Link>
        <div className='pr-8'>
            <Link to="/" className='p-4 hover:text-yellow duration-300'>About</Link>
            <Link to="/interest" className='p-4 hover:text-yellow duration-300'>Interest</Link>
            <Link to="/projects" className='p-4 hover:text-yellow duration-300'>Projects</Link>
        </div>
    </nav>
  )
}

export default Navbar;