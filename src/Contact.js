import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaCommentAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div
    className=' bg-[#090E34] '>
      <motion.div
    
initial={{opacity:0 , rotateY: "90deg"}}
whileInView={{opacity:1 , rotateY: 0}}
transition={{duration:2 }}
      className='container pt-11 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9 bg-[#090E34] '>
        <div className='bg-[#090E34]  w-full border-x-slate-300 '>
          <div className=' my-10 px-10'>
            <h1 className='text-3xl mb-4 text-white font-bold'>
              NEED HELP=? OPEN A TICKET
            </h1>
            <p className='text-gray-100'>
              Our Support Team will get back to you ASAP Via email
            </p>
            <form action="#" method="post">
              <div className="grid grid-cols-1 sml:grid-cols-2 gap-10">
                <div className="mb-4 ">
                  <div className="mb-4 ">
                    <label htmlFor="name" className="text-sm mb-2 text-gray-500 font-medium">Your Name</label>
                    <input name="user-name" id="name" required className="w-full bg-slate-800 py-3 px-3 rounded-md text-gray-100 text-sm focus:border-blue-500 focus:ring-blue-400 transition duration-200" type="text" placeholder="Enter Your Name" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="text-sm mb-2 text-gray-600 font-medium">Your Email</label>
                    <input id="email" name="user-email" required className="w-full bg-slate-800 py-3 px-3 rounded-md text-gray-100 text-sm focus:border-blue-500 focus:ring-blue-400 transition duration-200" type="email" placeholder="Enter Your Email" />
                  </div>
                </div>
                </div>
                <div className="my-4">
                  <label htmlFor="message" className="text-sm mb-2  text-gray-600 font-medium">Message</label>
                  <textarea id="message" name="message" required rows="5" className="w-full p-4 rounded-lg bg-blue-900 text-gray-800 focus:ring-2-blue-400" placeholder="Write Your Message Here..."></textarea>
                  <button type="submit" className="px-6 my-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition hover:bg-white hover:text-blue-900 focus:outline-none">Submit Ticket</button>
                </div>
            
            </form>
          </div>
      
        </div>
        <div className='px-6 my-7'>
          <h1 className='text-2xl mb-4 text-white font-bold'>Subscribe to receive future updats</h1>
          <p className='text-gray-200'>"Make a lasting impression with a beautifully designed website."</p>
          <p className='h-[1px] w-full my-4 bg-gray-800'></p>

          <div>
            <label htmlFor="name" className="text-sm mb-2 text-gray-600 font-medium">Your Name</label>
            <input name="user-name" id="name" required className="w-full bg-slate-800 py-3 px-3 rounded-md text-gray-100 text-sm focus:border-blue-500 focus:ring-blue-400 transition duration-200"
              type="text"
              placeholder="Enter Your Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm mb-2 text-gray-600 font-medium">Your Email</label>
            <input id="email" name="user-email" required className="w-full bg-slate-800 py-3 px-3 rounded-md text-gray-100 text-sm focus:border-blue-500 focus:ring-blue-400 transition duration-200"
              type="email" placeholder="Enter Your Email" />
            <button className='bg-blue-500 text-white text-center w-full px-3 my-8 transition hover:bg-white hover:text-blue-900'> Submit</button>
          </div>
        
        </div>
      </motion.div>








      <div className='bg-[#141522] text-white '>


        <div >
          <h1 className='font-bold text-center'> About Us</h1>
          <p className='text-center '>"Take your brand to the next level with a professional website."</p>
        </div>
        <div className=' container py-4 grid grid-cols-1 md:grid-cols-3 '>
          <div>
            <h1 className='font-bold'> Quick Links</h1>
            <ul className='py-2'>

              <li className='hover:text-blue-600 cursor-pointer'>Home</li>
              <li className='hover:text-blue-600 cursor-pointer'>About</li>
              <li className='hover:text-blue-600 cursor-pointer'> Service</li>
              <li className='hover:text-blue-600 cursor-pointer'>Contact</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className=' container font-bold'> Conact Us</h1>

          <div className=' container  flex '>
            <div className='mt-1 hover:text-blue-600 cursor-pointer'>
              <IoLocation />
            </div>
            <div className='px-2'>
              123 street Naser city , Egypt
            </div>
          </div>

          <div className=' container  flex '>
            <div className='mt-1 hover:text-blue-600 cursor-pointer ' >
              <FaPhoneAlt />
            </div>
            <div className='px-2'>
              +432 637 934
            </div>
          </div>

          <div className=' container  flex '>
            <div className='mt-1 hover:text-blue-600 cursor-pointer' >
              <FaCommentAlt />
            </div>
            <div className='px-2'>
              support@exaple.com
            </div>
          </div>
        </div>
        <p className='h-[1px] w-full my-4 bg-gray-800'></p>

        <div>

          <ul className=' container flex justify-between items-center px-6 text-white'>
            <li className=' rounded-2xl hover:text-blue-600 cursor-pointer'><FaFacebookSquare />
            </li>
            <li className=' rounded-2xl hover:text-blue-600 cursor-pointer '><FaTwitter />
            </li>
            <li className='rounded-2xl hover:text-blue-600 cursor-pointer'><FaInstagram />
            </li>
            <li className='rounded-2xl hover:text-blue-600 cursor-pointer'><IoLogoLinkedin />
            </li>

          </ul>
        </div>
        <h1 className='text-center font-4xl mt-3 hover:bg-slate-50 hover:text-blue-950 '> 2024 Yasmein.All Right Reserved.</h1>
      </div>

    </div>
  )

}

export default Contact
