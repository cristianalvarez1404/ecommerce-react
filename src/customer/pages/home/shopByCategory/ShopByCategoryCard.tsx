import React from 'react'
import './shopByCategory.css'
import type { Deal } from '../../../../types/dealTypes'
import type { HomeCategory } from '../../../../types/homeCategoryTypes'

const ShopByCategoryCard = ({item}:{item:HomeCategory}) => {
  return (
    <div className='rounded-full flex gap-3 flex-col justify-center items-center group cursor-pointer'>
      <div className='custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-teal-500'>
        <img className='group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full rounded-full' src={item.image}/>
      </div>
      <h1>{item.name}</h1>
    </div>
  )
}

export default ShopByCategoryCard