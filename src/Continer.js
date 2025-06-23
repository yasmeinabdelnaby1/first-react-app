import React from 'react'
import main1 from './image/main1.jpg'
import { motion } from 'framer-motion';


const Continer = () => {
    return (
        <div
            className=' container mx-auto min-h-screen bg-white text-blue-950  flex my-5 '>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-7 '>
                {/* left div */}
                <motion.div
                    initial={{ opacity: 0, translateX: "-100%" }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 2 }}
                    className=' flex flex-col overflow-hidden' >
                    <h1 className='text-3xl text-blue-950  font-bold w-[90%]'>
                        A Well-designed website is the key to unlocking your business's full potential
                    </h1>
                    <p className='mt-4 text-gray-800 text-center  max-w[80%px]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, hic reprehenderit quibusdam ab
                        dignissimos consequatur distinctio fugit accusantium
                        corporis minima veritatis inventore dolorum nam officiis vitae fuga eaque, necessitatibus facere!
                    </p>
                    <div className='mt-6 flex gap-4'>
                        <button className='bg-blue-900 text-white px-4 py-2 rounded hover:bg-white font-bold hover:text-blue-950 transition'>
                            Explor Now
                        </button>

                        <button className='bg-gray-400 text-black px-4 py-2 rounded font-bold hover:bg-white transition'>

                            Upload Your Arts

                        </button>
                    </div>
                </motion.div>

                {/* right div */}
                <motion.div

                    initial={{ opacity: 0, translateX: "100%" }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 2 }}
                    className='flex justify-center items-center'>
                    <img src={main1} alt="Hero" className='max-w-1/3 h-auto' />
                </motion.div>

            </div>
        </div >
    )
}

export default Continer
