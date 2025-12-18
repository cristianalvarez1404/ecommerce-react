import React from 'react'

const ProductDetails = () => {
  return (
    <div className='px-5 lg:px-20 pt-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <section className='flex flex-col lg:flex-row gap-5'>
          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>

          </div>
          <div className='w-full lg:w-[85%]'>
            <img src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg" alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetails