import React from 'react'
import image5 from '../assets/image/image5.jpg'

const Middle = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className='lg:ms-20 mt-20'>
                <div className='flex gap-10'>
                    <p className='border bg-orange-400 text-white rounded-full p-2'>Quality foods</p>
                    <p className='border bg-orange-400 text-white rounded-full p-2'>Quality delivery</p>
                    <p className='border bg-orange-400 text-white rounded-full p-2'>Quality customer service</p>
                </div>
                <div className='mt-10'>
                    <span className='text-gray-900 text-6xl font-bold'>Easy </span>
                    <span className='text-orange-500 text-6xl font-bold'>access </span>
                    <span className='text-gray-900 text-6xl font-bold'>to </span>
                    <span className='text-gray-900 text-6xl font-bold'>your </span> <br />
                    <span className='text-gray-900 text-6xl font-bold'>favorite </span>
                    <span className='text-orange-500 text-6xl font-bold'>foods </span><br />
                    <span className='text-gray-900 text-6xl font-bold'>and </span>
                    <span className='text-orange-500 text-6xl font-bold'>restaurants</span>
                </div>
            </div>
            <div className='mb-0'>
                <img className='rounded-lg lg:h-[70%] lg:w-[80%] lg:ms-20 ' src={image5} alt="" />
            </div>
            
        </div>
    )
}

export default Middle