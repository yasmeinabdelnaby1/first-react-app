import React from 'react'
import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";
import { AiFillCodepenCircle } from "react-icons/ai";
import { AiFillBank } from "react-icons/ai";
import { motion } from 'framer-motion';

const Features = () => {
    const FeaturesData = [

        {
            id: 1,
            title: "crafted for Startups",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, hic reprehenderit quibusdam ab dignissimos consequatur distinctio fugit accusantiumcorporis minima veritatis inventore dolorum nam officiis vitae fuga eaque, necessitatibus facere!",
            icon: <AiFillAndroid />,
        },

        {
            id: 2,
            title: "crafted for Startups",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, hic reprehenderit quibusdam ab dignissimos consequatur distinctio fugit accusantiumcorporis minima veritatis inventore dolorum nam officiis vitae fuga eaque, necessitatibus facere!",
            icon: <AiFillApple />,
        },


        {
            id: 3,
            title: "High-quality Design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, hic reprehenderit quibusdam ab dignissimos consequatur distinctio fugit accusantiumcorporis minima veritatis inventore dolorum nam officiis vitae fuga eaque, necessitatibus facere!",
            icon: <AiFillAppstore />,
        },

        {
            id: 4,
            title: "crafted for Startups",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, hic reprehenderit quibusdam ab dignissimos consequatur distinctio fugit accusantiumcorporis minima veritatis inventore dolorum nam officiis vitae fuga eaque, necessitatibus facere!",
            icon: <AiFillAmazonCircle />,
        },

        {
            id: 5,
            title: "crafted for Startups",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, hic reprehenderit quibusdam ab dignissimos consequatur distinctio fugit accusantiumcorporis minima veritatis inventore dolorum nam officiis vitae fuga eaque, necessitatibus facere!",
            icon: <AiFillCodepenCircle />,
        },


        {
            id: 6,
            title: "crafted for Startups",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, hic reprehenderit quibusdam ab dignissimos consequatur distinctio fugit accusantiumcorporis minima veritatis inventore dolorum nam officiis vitae fuga eaque, necessitatibus facere!",
            icon: <AiFillBank />,
        },

    ];
    return (
        <div className='  mx-auto bg-[#090E34] text-slate-200 '  >
            <div className='mx-2 p-8'  >
                <h1
                    className='text-4xl text-center font-bold text-gray-500 '>
                    Mein Features
                </h1>
                <p className='my-3 text-center mx-6'>
                    There are many variations of passage of
                    <br />
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, 
                hic reprehenderit quibusdam ab dignissimos consequatur distinctio fugit accusantiumcorporis minima veritatis 
                inventore dolorum nam officiis vitae fuga eaque, necessitatibus facere!
                    </p>
                {/* features */}
                <div
                    className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 '>
                    {FeaturesData.map((item) => (

                        <div key={item.id} className='my-7' >
                            <motion.div


                                initial={{ opacity: 0, translateX: "-100%" }}
                                whileInView={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 2 }}
                                className='my-7'>

                                <p className='bg-[#f4f4f5] text-3xl  rounded-2xl text-[#e29b2f] flex justify-center items-center w-1/3
                                            hover:bg-[#090E34]  '>
                                    {item.icon}  
                                </p>
                            </motion.div>
                                <h1 className='text-2xl font-bold'> {item.title} </h1>
                                <p className='  text-gray-500 text-sm '>{item.desc}</p>
                        </div>

                    )
                    )
                    }
                </div>
            </div>

        </div >
    )
}

export default Features
