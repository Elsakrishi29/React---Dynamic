import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider_1 from '../img/logo/slider-1.webp';
import slider_2 from '../img/logo/slider-2.webp';

const Slide = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

  return (
    <div className='slide-sec'>
        <Slider {...settings}>
            <div className='slide-img'>
                <img src={slider_1}/>
            </div>
            <div className='slide-img'>
                <img src={slider_2}/>
            </div>
        </Slider>
    </div>
  )
}

export default Slide