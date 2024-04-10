import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';
function Freebook() {
    
    const filterData= list.filter((data)=>data.category === "Free");
    console.log(filterData)
    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 mt-12'>
    <div>
      <h1 className='font-semibold text-xl pb-2'>Free offered Course </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam doloribus quis, atque dolorem eveniet ut non rerum sed velit suscipit totam vitae neque eum. Ducimus reiciendis esse recusandae aliquid!</p>
    </div>
    
    <div>
    <div className="slider-container">
      <Slider {...settings}>
      
      {filterData.map((item)=>(
        <Cards  item={item} key={item.id}/>
      ))}
      </Slider>
    </div>
  
    </div>
    </div>
    </>
  )
}

export default Freebook
