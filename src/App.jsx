import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import { ToastContainer, toast } from 'react-toastify';










const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <ToastContainer />
      <Header />
      <About />
  
      <Projects /> 
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* <h1>Welcome to Oliyass Properties</h1> */}
    </div>
  )
}

export default App