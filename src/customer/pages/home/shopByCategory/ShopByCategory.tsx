import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

const ShopByCategory = () => {
  return (
    <div className='flex items-center justify-between flex-wrap gap-7 lg:px-20'>
      {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(_ => <ShopByCategoryCard/>)}
    </div>
  )
}

export default ShopByCategory