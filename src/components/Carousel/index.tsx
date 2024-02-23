import React, { useState } from "react";

const Carousel = ({ images }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none"
        onClick={prevImage}
      >
        &larr;
      </button>
      <img
        src={images[currentImageIndex]}
        alt=""
        className="w-full h-48"
      />
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r focus:outline-none"
        onClick={nextImage}
      >
        &rarr;
      </button>
    </div>
    </div>
  );
};

export default Carousel;
