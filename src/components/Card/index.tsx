import React from "react";
import { Link } from "react-router-dom";


const Card = ({ images }: { images: string[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg-black rounded-lg overflow-hidden cursor-pointer"
        >
          <Link to={{ pathname: "/detail" }} state={image} className="block">
            <div className="relative">
              <div className="text-white absolute bg-black right-0 p-2 rounded-bl-md">
                Rp. 25000
              </div>
              <img
                src={image}
                alt={`Card ${index}`}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-white">Card Title</h2>
                <p className="mt-2 text-xs text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Link>
          <div
            className="flex justify-center bg-red-100 py-3 text-white cursor-pointer"
            onClick={() => alert("add to cart")}
          >
            RENT
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
