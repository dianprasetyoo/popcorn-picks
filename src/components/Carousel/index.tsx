import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => {
      setCurrentImageIndex(current);
    },
    customPaging: (i: any) => (
      <div className={`h-4 ${i === currentImageIndex ? 'bg-red-100 w-8 my-2 mr-28 rounded-lg' : 'bg-grey w-4 m-2 rounded-full'}`}/>
    )
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="pt-20">
      <Slider {...settings} >
        {images.map((image: any, index: number) => (
          <div key={index} className="">
            <img src={image} alt={`Slide ${index + 1}`} className="object-contain w-[28vw]"/>
          </div>
        ))}
      </Slider>
      </div>
      {/* <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none"
          onClick={prevImage}
        >
          &larr;
        </button>
        <img src={images[currentImageIndex]} alt="" className="w-full h-48" />
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r focus:outline-none"
          onClick={nextImage}
        >
          &rarr;
        </button> */}
    </div>
  );
};

export default Carousel;
