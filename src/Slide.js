import React from 'react'
import image2 from "./image/image2.jpg";
import image3 from "./image/image3.jpg";
import image4 from "./image/image4.jpg";
import image7 from "./image/image7.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules 
import { EffectCoverflow, Pagination } from 'swiper/modules';



const blogs = [
    {
        id: 1,
        image: image2,
        category: "computer",
        title: "Tips to improve your coding speed",
        description: "A well-designed website is the key to unlocking your business's full potential",
        author: "Ahmed",
        authorRole: "Grahpic Designer",
        data: "20 Des, 2024"

    },

    {
        id: 2,
        image: image3,
        category: "computer",
        title: "Tips to improve your coding speed",
        description: "A well-designed website is the key to unlocking your business's full potential.",
        author: "Ahmed",
        authorRole: "Grahpic Designer",
        data: "20 Des, 2024"

    },
    {
        id: 3,
        image: image4,
        category: "computer",
        title: "Tips to improve your coding speed",
        description: "A well-designed website is the key to unlocking your business's full potential.",
        author: "Ahmed",
        authorRole: "Grahpic Designer",
        data: "20 Des, 2024"

    },

    {
        id: 4,
        image: image2,
        category: "computer",
        title: "Tips to improve your coding speed",
        description: "A well-designed website is the key to unlocking your business's full potential.",
        author: "Ahmed",
        authorRole: "Grahpic Designer",
        data: "20 Des, 2024"

    },
    {
        id: 5,
        image: image3,
        category: "computer",
        title: "Tips to improve your coding speed",
        description: "A well-designed website is the key to unlocking your business's full potential.",
        author: "Ahmed",
        authorRole: "Grahpic Designer",
        data: "20 Des, 2024"

    },
    {
        id: 6,
        image: image4,
        category: "computer",
        title: "Tips to improve your coding speed",
        description: "A well-designed website is the key to unlocking your business's full potential.",
        author: "Ahmed",
        authorRole: "Grahpic Designer",
        data: "20 Des, 2024"

    },
    {
        id: 7,
        image: image2,
        category: "computer",
        title: "Tips to improve your coding speed",
        description: "A well-designed website is the key to unlocking your business's full potential.",
        author: "Ahmed",
        authorRole: "Grahpic Designer",
        data: "20 Des, 2024"

    },
    {
        id: 8,
        image: image3,
        category: "computer",
        title: "Tips to improve your coding speed",
        description: "A well-designed website is the key to unlocking your business's full potential.",
        author: "Ahmed",
        authorRole: "Grahpic Designer",
        data: "20 Des, 2024"

    },
];
const Slide = () => {
    return (
        <div className= ' py-3 bg-gradient-to-r from-sky-300 to-indigo-500 '  >
            <div className='text-center my-10'>
                <h1 className='text-3xl mb-6 font-bold text-white'> Our Lasest Blogs</h1>
                <p className='text-black text-sm'>A professional website is essential for
                    establishing credibility and trust with customers</p>
            </div>
          
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{

            320: {
                slidesPerView: 1,
            },
            568: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }}
         pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
                {blogs.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <div className='bg-blue-950 rounded-lg'>
                            <div className='relative'>
                                <img className='w-full rounded-lg' src={blog.image} alt='{blog.title' />
                                <span className='absolute text-sm font-medium py-2 px-3 left-1 top-4 rounded-3xl text-white
                        bg-gradient-to-r from-teal-400 to-blue-600 transtion hover:cursor-pointer
                            '>{blog.category}</span>
                            </div>

                            <div className='flex flex-col items-startmy-6 px-6'>
                                <h1 className='text-lg font-bold max-w-[450]'>{blog.title}</h1>
                                <p className='mt-4 text-white'>{blog.description}</p>
                            </div>


                            <p className='h-[1px] w-full bg-gray-400'></p>
                            <div className='px-6 pb-7 flex items-center h-auto gap-5 text-xs my-5'>
                                <div> <img src={image7} className='rounded-full w-10 h-10' alt="Avatar" />
                                </div>

                                <div>
                                    <h1 className='font-semibold'>{blog.author}</h1>
                                    <p className='text-xs text-gray-500 mt-1'>{blog.authorRole}</p>
                                </div>
                                <p className='h-[42px] w-[1px] bg-gray-100'></p>
                                <div>
                                    <h1 className='font-semibold'> Date</h1>
                                    <h1 className='text-xs text-gray-500 mt-1'> {blog.data}</h1>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>

                )
                )}

            </Swiper>
        </div >

    )
}

export default Slide
