import React from 'react'
import {assets} from '../assets/assets';



const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-42 bg-gray-800 w-full overflow-hidden text-white"
    id="Footer">
      <div className="container mx-auto flex md:flex-row  justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src={assets.oliyass_logo} alt="Oliyass Properties Logo" 
            className="mx-auto mb-4 w-12" />
            
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">  
            <h3 className="text-white text-lg font-bold mb-4">
                Company
            </h3>
            <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header">Home</a>
            <a href="#About">About Us</a>
            <a href="#Services">Projects</a>
            <a href="#Contact">Contact</a>
            </ul>
         </div>
        <div className="w-full md:w-1/3"   >
         <h3 className="text-white text-lg font-bold mb-4">
                Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 mb-4 max-w-80">
                The latest news and updates from Oliyass Properties.
            </p>
            <div className="flex  gap-2">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="p-2 rounded border  border-gray-800 border-gray-700 text-gray-400
                     focus:outline-none w-full md:w-auto focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    className="p-2 px-4 rounded bg-blue-500 text-white">
                    Subscribe
                </button>
            </div>
        </div>
      </div>
     <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">  
        Copyright 2026 @ Oliyass properties. All Rights Reserved.
     </div>
    </div>
  )
}

export default Footer