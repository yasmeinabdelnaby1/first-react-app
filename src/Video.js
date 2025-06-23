import React from 'react'

const Video = () => {
  return (
    <div className=' py-7 bg-[#090E34]'>
      <div
         className='video mx-auto '>

        <h1 className='text-4xl font-bold text-white text-center'> WE AER READY TO HELP YOU.</h1>
        <p className='my-3 text-gray-500 text-center  '>
          "Having a website is crucial for businesses to stay competitive in today's digital landscape.
          <br />
          A website is the face of your business, make it count.
        </p>
      </div>
      <div >
        <div className='relativ flex justify-center h-full mt-10 rounded-lg overflow-hidden'>
          <iframe width="560"
            height="315"
            src="https://www.youtube.com/embed/4sdYIW5Q1hI?si=KRMcJIhhRqihcLAf&amp;start=4"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture;
//  web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Video
