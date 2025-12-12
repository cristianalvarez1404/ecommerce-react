import React from 'react'
import ElectricCategory from './electricCategory/ElectricCategory'
import CategoryGrid from './categoryGrid/CategoryGrid'
import Deal from './deal/Deal'
import ShopByCategory from './shopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import { Storefront } from '@mui/icons-material'


const Home = () => {
  return (
    <>
      <div className='space-y-5 lg:space-y-10 relative pb-20'>
        <ElectricCategory/>
        <CategoryGrid/>
        
        <div className='pt-20'>
          <h1 className='text-lg lg:text-4xl lg:pb-10 font-bold text-center pb-8 text-teal-600'>TODAY'S DEAL</h1>
          <Deal/>
        </div>

        <section className='pt-20'>
          <h1 className='text-lg lg:text-4xl lg:pb-10 font-bold text-center pb-8 text-teal-600'>SHOP BY CATEGORY</h1>
          <ShopByCategory/>
        </section>

        <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
          <img className='w-full h-full object-cover' src="https://png.pngtree.com/thumb_back/fh260/background/20230217/pngtree-blue-wavy-banner-background-blank-image_1608934.jpg" alt="" />
          <div className='absolute top-1/2 left-4 lg:left-60 transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3'>
            <h1>Sell your product</h1>
            <p className='text-lg md:text-2xl'>With <span className='logo'>Design now</span></p>
            <div className='pt-6 flex justify-center'>
              <Button startIcon={<Storefront/>} variant='contained' size='large'>
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home