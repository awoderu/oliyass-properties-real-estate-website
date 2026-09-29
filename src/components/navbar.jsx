import React from 'react'
import {assets} from '../assets/assets'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);



  // To prevent the website from scrolling when the mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);
 
  return (
    <nav className="absolute top-0 left-0 w-full z-10"> 
      <div className="container mx-auto flex justify-between items-center py-4 px-6 
      md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <li><a className="cursor-pointer hover:text-gray-400" 
          href="#Header">Home</a></li>
          <li><a className="cursor-pointer hover:text-gray-400" 
          href="#About">About</a></li>
          <li><a className="cursor-pointer hover:text-gray-400"
           href="#Contact">Contact Us</a></li>
        </ul>
        <button className="md:block bg-white px-8 py-3 rounded-full cursor-pointer hover:text-gray-400">
            Login</button>
            <img  onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className="cursor-pointer md:hidden w-7" alt="Menu" />
      </div>
      {/* --------mobile menu-------- */}
      <div className={`md:hidden fixed inset-0 z-20 w-full overflow-hidden bg-white py-4 px-6 transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}>
        <div className="flex justify-end p-6 cursor-pointer">
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="Logo" className="w-6" />
        </div>
        <ul className="flex flex-col items-center mt-5 gap-2 text-black px-5 text-lg">
          <li><a  onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400" >Home</a></li>
          <li><a  onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400" >About</a></li>
          <li><a  onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400" >Projects</a></li>
          <li><a  onClick={() => setShowMobileMenu(false)} href="#Contact" className="px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400" >Contact Us</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar