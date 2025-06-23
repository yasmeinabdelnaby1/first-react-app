import React from 'react'
import image5 from './image/image5.jpg'
import { motion } from 'framer-motion';

const Bug = () => {
    return (
    <div className='bg-slate-900'>
        <div className=' container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
            <motion.div
            
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
            >
                <img src={image5} alt="Hero" className='max-w-full mt-8 rounded-lg' />
            </motion.div>


            <motion.div
            
            initial={{ opacity: 0, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
            className='container my-8'>
                <div>
                    <h1 className='text-3xl font-bold md-6'>Bug free code</h1>
                    <p className=' text-white text-sm'> A professional website is essential for establishing credibility and trust with customers</p>
                </div>

                <div>
                    <h1 className='text-3xl font-bold md-6'>Premir Support</h1>
                    <p className=' text-white text-sm'> A well - designed website is the key to unlocking your business's full potential  </p>
                </div>


                <div>
                    <h1 className='text-3xl font-bold md-6'>Regular Updates</h1>
                    <p className=' text-white text-sm'> A well - designed website is the key to unlocking your business's full potential    </p>
                </div>


                </motion.div>
            </div>
        </div>
    )
}

export default Bug

