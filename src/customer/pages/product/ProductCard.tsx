import React from 'react'
import "ProductCard.css"

const images = [
  "https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg",
  "https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg",
]

const ProductCard = () => {
  return (
    <>
      <div className='group px-4 relative'>
        <div className='card'>
          {images.map((item) => 
            <img className='card-media object-top' src={item} alt="" />
          )}
        </div>
      </div>
    </>
  )
}

export default ProductCard