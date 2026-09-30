import {testimonialsData, assets} from '../assets/assets'
import React from 'react'
import { motion } from "motion/react"


const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
    transition={{ duration: 1}} 
    whileInView = {{opacity: 1, x: 0}}
    viewport={{ once: true }}
    className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
    id="Testimonials"  >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center p-2">
            Customer<span className="underline underline-offset-4 decoration-1 underline font-light"> Testimonials</span>
        </h1>
        <p className="text-center mb-10 p-8">Hear what our satisfied customers have to say about our services.</p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="max-w-[400px] border shadow-lg rounded px-8 py-12 mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
           <h2>
            {testimonial.name}
           </h2>
            <p className="text-center font-bold mt-2">{testimonial.title}</p>
            <div>
                {Array.from({ length: testimonial.rating }, (item, index) => (
                    <img key={index} src={assets.star_icon} alt="star" 
                    className="w-4 h-4 inline-block" />
    
                ))}
                </div>
                <p className="text-gray-600">
                    {testimonial.text}
                </p>
          
          
          
          
          </div>
        ))}
      </div>


    </motion.div>
  )
}

export default Testimonials