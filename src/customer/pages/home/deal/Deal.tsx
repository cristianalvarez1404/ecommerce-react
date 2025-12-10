import React from 'react'
import DealCard from './DealCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Deal = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='py-5 lg:px-20 slider-container'>
      <Slider {...settings} className='flex items-center justify-center'>
        {[1,1,1,1,1,1,1,1,1,1].map(_ => <DealCard/>) }
      </Slider>
    </div>
  )
} 

export default Deal