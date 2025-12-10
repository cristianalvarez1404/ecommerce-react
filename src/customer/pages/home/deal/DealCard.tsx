import React from 'react'

const DealCard = () => {
  return (
    <div className='w-52 cursor-pointer '>
      <img className='w-full h-48 object-cover object-top border-x-[7px] border-t-[7px] border-pink-600' src="https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/u/r/h/-original-imagyxxfgz52vzqn.jpeg?q=70&crop=false" alt="" />
      <div className='border-4 border-black bg-black text-white p-2 text-center'>
        <p className='text-lg font-semibold'>Smarth Watch</p>
        <p className='text-2xl font-bold'>20% OFF</p>
        <p className='text-balance text-lg'>shop now</p>
      </div>
    </div>
  )
}

export default DealCard