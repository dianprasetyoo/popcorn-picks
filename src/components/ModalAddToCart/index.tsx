import React from "react";
import { FaTrash } from "react-icons/fa";

const ModalAddToCart = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[50vw]">
        <div className="bg-secondary flex flex-row justify-between p-2">
          <p className="text-white font-bold">Cart</p>
          <div
            onClick={onClose}
            className="bg-white text-secondary font-bold w-6 h-6 rounded-full flex justify-center cursor-pointer"
          >
            X
          </div>
        </div>
        <div className="m-4">
          <div>
            <div className="grid lg:grid-cols-3 gap-3 items-center">
              <p className="text-black font-bold flex justify-center">movie</p>
              <p className="text-black font-bold flex justify-center">price</p>
              <div />
            </div>
            <div className="w-full h-[0.5px] bg-grey my-2" />
          </div>
          <div>
            <div className="grid lg:grid-cols-3 gap-3 items-center">
              <div className="flex flex-row justify-center items-center">
                <div className="bg-dark-300 rounded-lg">
                  <img
                    src={"https://via.placeholder.com/800x400/ff0000"}
                    className="object-contain w-16 h-24 rounded-lg"
                    alt="product"
                  />
                </div>
                <p className="text-grey text-sm font-bold ml-2">Wonder Woman</p>
              </div>
              <p className="text-grey text-sm flex justify-center">25000</p>
              <div className="text-grey flex justify-center cursor-pointer">
                <FaTrash size={18} />
              </div>
            </div>
            <div className="w-full h-[0.5px] bg-grey my-2" />
          </div>
          <div>
            <div className="grid lg:grid-cols-3 gap-3 items-center">
              <p className="text-black font-bold flex justify-center">
                Subtotal
              </p>
              <p className="text-black font-bold flex justify-center">25000</p>
              <div />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between p-2">
          <p className="text-grey font-bold">Clear Cart</p>
          <div
            onClick={onClose}
            className="bg-white text-secondary font-bold w-6 h-6 rounded-full flex justify-center cursor-pointer"
          >
            Cheackout
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddToCart;
