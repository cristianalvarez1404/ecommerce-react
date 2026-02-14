import React from 'react'
import type { Deal } from '../../../../types/dealTypes'

const DealCard = ({item}:{item:Deal}) => {
  return (
    <div className='w-52 cursor-pointer '>
      <img className='w-full h-48 object-cover object-top border-x-[7px] border-t-[7px] border-pink-600' src={item.category.image} alt="" />
      <div className='border-4 border-black bg-black text-white p-2 text-center'>
        <p className='text-lg font-semibold'>{item.category.name}</p>
        <p className='text-2xl font-bold'>{item.discount}% OFF</p>
        <p className='text-balance text-lg'>shop now</p>
      </div>
    </div>
  )
}

export default DealCard