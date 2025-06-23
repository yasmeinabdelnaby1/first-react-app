import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import logo from './image/logo.png';
import { FaSearch } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import {motion} from 'framer-motion' ;

const Nav = () => {
  const Links = [
    { id: 1, page: "Home", path: "/" },
    { id: 2, page: "Explore", path: "/Explore" },
    { id: 3, page: "Activitey", path: "/Activitey" },
    { id: 4, page: "Commuinty", path: "/Commuinty" },
    { id: 5, page: "Pages", path: "/Pages" },
    { id: 6, page: "Contact", path: "/Contact" },


  ];
  const [isOPenMenue, setIsOPenMenu] = useState(false)

  return (
    <motion.div
    
initial={{opacity:0 , rotateX: "90deg"}}
whileInView={{opacity:1 , rotateX: 0}}
transition={{duration:1 }}
 className='text-slate-200 bg-blue-950 px-4 py-3' >
 
      <div className=' container flex justify-between items-center'>
        {/* left div */}
        <div className='flex items-center gap-2  '>
          <img className='w-10' src={logo} alt='logo' />
          <h1 className='font-bold'>RoseShop </h1>
        </div>
        {/* center div */}
        <ul className='hidden lgl:flex mx-auto  justify-between font-400 gap-5'>
          {Links.map((item) => (
            <li key={item.id} className='relative'>
              <div className='flex items-center gap-1 cursor-pointer'>
                <a href={item.path} className='  hover:text-indigo-500 hover:cursor-pointer	font-weight: 100 '>
                  {item.page}
                </a>
              </div>
            </li>

          ))}
        </ul>

        {/* right div */}

        <div className=' hidden lgl:flex mx-auto items-center gab-4 px-4'>
          <FaSearch className='icon cursor-pointer   ' />
          <button className='flex items-center gab-1 bg-transparent text-sm  rounded-sm cursor-pointer border-blue-100
           text-indigo-100 px-4  py-1' >
            wellet connect

            <FaWallet className='text-yellow-50' />
          </button>
        </div>
        {/* responsive */}
        <div className=' lgl:hidden'>
          {

            !isOPenMenue ? (
              <FaBars className='text-2xl cursor-pointer'
                onClick={() => setIsOPenMenu(true)} />
            ) : <IoMdCloseCircle className='text-2xl text-white cursor-pointer hover:text-red-800 '
              onClick={() => setIsOPenMenu(false)} />
          }
        </div>
      </div>
      {isOPenMenue &&(
        <div className=' lgl:hidden flex flex-col items-center bg-slate-700 py-4 '
         >
          <ul className=' flex flex-col  gap-4'>
            {
              Links.map((item) => (
                <li key={item.id} className='text-bold text-center'>
                  <a href={item.path} className=' hover:text-indigo-700  hover:cursor-pointer'>
                    {item.page}
                  </a>
                </li>
              ))}
          </ul>
          <div className='flex mt-4 gab-4 '>
            <FaSearch className='icon cursor-pointer mt-3 font-bold ' />
            <button className='flex items-center gab-1 bg-transparent text-sm border text-400 px-5 py-2 ' >
              wellet connect
              <FaWallet className='text-yellow-50 px-2 font-bold' />

            </button>
          </div>
        </div>
        
      )}













    </motion.div>
  )
}

export default Nav;
