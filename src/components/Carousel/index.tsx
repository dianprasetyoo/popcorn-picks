import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => {
      setCurrentImageIndex(current);
    },
    customPaging: (i: any) => (
      <div className={`h-4 mt-4 ${i === currentImageIndex ? 'bg-red-100 w-8 my-2 mr-28 rounded-lg' : 'bg-grey w-4 m-2 rounded-full'}`}/>
    )
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="pt-20">
      <Slider {...settings} >
        {data.results.slice(0, 5).map((item: any, index: number) => (
          <div key={index} className="">
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={`Slide ${index + 1}`} className="object-contain w-[20vw]"/>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Carousel;
