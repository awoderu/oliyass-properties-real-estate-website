import React from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"



const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
    transition={{ duration: 1.5 }} 
    whileInView = {{opacity: 1, x: 0}}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full
    overflow-hidden" id="About">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
            
            About <span className=" underline underline-offset-4 decoration-1 underline font-light
            ">Our Brand</span>
            </h1>

            <p>
                Passionate about properties.Dedicated to your vision
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 justify-center gap-4 p-4">
                <img src={assets.brand_img} className="w-full md:w-1/2 max-w-lg" />
                <div className="flex flex-col iteems-center md:items-start mt-10 text-gray-600">

                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div>
                            <p className="text-4xl font-medium text-gray-800">
                            10+
                        </p>
                        <p>Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">
                            10+
                        </p>
                        <p>Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">
                            10+
                        </p>
                        <p>Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">
                            10+
                        </p>
                        <p>Years of Experience</p>
                        </div>

                    </div>
                    <p className="max-w-lg my-10">
                        We have been delivering exceptional properties for over a decade, ensuring quality and customer satisfaction, 
                    showcasing our commitment to excellence.</p>
                    <button className="bg-black text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                        Learn More
                    </button>
                    

                </div>
            </div>


    </motion.div>



  )
}
export default About