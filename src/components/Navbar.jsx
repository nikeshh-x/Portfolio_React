import React from 'react'
import logo from "../assets/nikeshhLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex shrink-0 items-center'>
            <img src={logo} alt="logo" className='w-35 mx-2'/>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com/nikeshh-x" target='_blank'><FaGithub/></a> 
            <a href="https://www.linkedin.com/in/nikeshhh/" target='_blank'><FaLinkedin/></a>
            <a href="https://www.instagram.com/m_nikeshh_/" target='_blank'><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar