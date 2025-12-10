import React from 'react'
import ElectricCategory from './electricCategory/ElectricCategory'
import CategoryGrid from './categoryGrid/CategoryGrid'
import Deal from './deal/Deal'


const Home = () => {
  return (
    <>
      <div className='space-y-5 lg:space-y-10 relative pb-20'>
        <ElectricCategory/>
        <CategoryGrid/>
        <Deal/>
      </div>
    </>
  )
}

export default Home