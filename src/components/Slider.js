import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Slider.css"

import firstImg from "./../img/lesson_one/1.png"
import secondImg from "./../img/lesson_one/2.png"
import threetImg from "./../img/lesson_one/3.png"

const images = [firstImg, secondImg, threetImg]
const CustomPrevArrow = (props) => {
  const { onClick } = props
  return <div className='custom-arrow custom-prev' onClick={onClick} />
}

const CustomNextArrow = (props) => {
  const { onClick } = props
  return <div className='custom-arrow custom-next' onClick={onClick} />
}

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='slide'>
            <img src={image} alt='' />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderComponent
