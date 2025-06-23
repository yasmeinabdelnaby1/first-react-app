import React from 'react'
import image6 from './image/image6.jpg'
import { FaSquareCheck } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Carfted = () => {
    return (
        <div className=' bg-slate-900 '>

            <div className=' container  grid grid-cols-1 md:grid-cols-2 items-center gap-10 '>
                {/* left div */}
                <motion.div
                
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 2 }}
                >

                    <h1 className=' text-4xl font-bold mb-6 text-blue-700'>
                        Carfted for startup, saas and Businesss Sites
                    </h1>
                    <p className='mb-8  text-white'>
                        "A well-desbigned website is the key to unlocking your business's full potential."
                        "A professional website is essential for establishing credibility and trustithcustomers
                    </p>
                    <div className='grid grid-cols-2 text-blue-500 text-sm'>
                        <div>
                            <p className=' mb-2 flex items-center gap-1'> <FaSquareCheck />No code required</p>
                            <p className=' mb-2 flex items-center gap-1'> <FaSquareCheck />Rich documention</p>
                            <p className=' mb-2 flex items-center gap-1'><FaSquareCheck />Use for lifetime</p>

                        </div>
                        <div>
                            <p className=' mb-2 flex items-center gap-1'><FaSquareCheck /> regular updates</p>
                            <p className=' mb-2 flex items-center gap-1  '><FaSquareCheck /> Rich documention</p>
                            <p className=' flex items-center gap-1' > <FaSquareCheck />Developer friendly</p>


                        </div>
                    </div>

                </motion.div>
                {/*right div */}
                <motion.div
                
                initial={{ opacity: 0, translateX: "100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 2 }}>
                    <img src={image6} alt="Hero" className='max-w-full h-auto rounded-lg' />

                </motion.div>
            </div>


        </div>
    )
}

export default Carfted
