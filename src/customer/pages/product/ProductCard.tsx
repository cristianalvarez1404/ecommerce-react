import React, { useEffect, useState } from 'react'
import "./productCard.css"
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

const images = [
  "https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg",
  "https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg",
  "https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg",
  "https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg",
  "https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg",
]

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval:any;
    
    if(isHovered){
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length );
      }, 1000)
    }
    else if(interval) {
      clearInterval(interval);
      interval = null;
    }

    return () => clearInterval(interval);

  },[isHovered])
  
  return (
    <>
      <div className='group px-4 relative'>
        <div className='card'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) => 
            <img 
            className='card-media object-top' 
            src={item} 
            style={{transform:`translateX(${(index - currentImage) * 100}%)`}}
            alt="" />
          )}
          { isHovered &&
            <div className='indicator flex flex-col items-center space-x-2'>
              <div className='flex gap-3'>
                <Button variant='contained' color='secondary'>
                  <Favorite sx={{color:teal[500]}}/>
                </Button>
                <Button variant='contained' color='secondary'>
                  <ModeComment sx={{color:teal[500]}}/>
                </Button>
              </div>
            </div>
          }
        </div>
        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
          <div className='name'>
            <h1>Niky</h1>
            <p>Blue Shirt</p>
          </div>
          <div className='price flex items-center gap-3'>
            <span className='font-sans text-gray-800'>
              $400
            </span>
            <span className='thin-line-through text-gray-400'>
              $999
            </span>
            <span className='text-teal-500 font-semibold'>
              60%
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard