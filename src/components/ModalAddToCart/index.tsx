import React from "react";
import { FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../../utils";
import { toast } from "react-toastify";
import Receipt from "../Receipt";

const ModalAddToCart = ({ isOpen, onClose }: any) => {
  const {
    state: stateCart,
    removeFromCart,
    clearCart,
    checkout,
  } = useGlobalContext();
  const [showReceipt, setShowReceipt] = React.useState(false);
  const [receiptData, setReceiptData] = React.useState<any>([]);

  if (showReceipt) {
    return (
      <Receipt cartItems={receiptData} onClose={() => setShowReceipt(false)} />
    );
  }

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
        <div className="m-4 max-h-[30vw] overflow-auto">
          <div>
            <div className="grid lg:grid-cols-3 gap-3 items-center">
              <p className="text-black font-bold flex justify-center">movie</p>
              <p className="text-black font-bold flex justify-center">price</p>
              <div />
            </div>
            <div className="w-full h-[0.5px] bg-grey my-2" />
          </div>
          {stateCart.cart.length > 0 ? (
            stateCart.cart.map((item: any, index: number) => (
              <div key={index}>
                <div className="grid lg:grid-cols-3 gap-3 items-center">
                  <div className="flex flex-row justify-center items-center">
                    <div className="bg-dark-300 rounded-lg">
                      <img
                        src={item.imageUrl}
                        className="object-contain w-16 h-24 rounded-lg"
                        alt="product"
                      />
                    </div>
                    <p className="text-grey text-sm font-bold ml-2 w-[6vw] line-clamp-3">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-grey text-sm flex justify-center">
                    ${item.price}
                  </p>
                  <div
                    className="text-grey flex justify-center cursor-pointer"
                    onClick={() => {
                      removeFromCart(item.id);
                      toast.success("Item removed from cart successfully!");
                    }}
                  >
                    <FaTrash size={18} />
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-grey my-2" />
              </div>
            ))
          ) : (
            <div>
              <p className="text-secondary text-md font-bold flex justify-center my-10">
                Item not found in cart!
              </p>
            </div>
          )}

          <div>
            <div className="grid lg:grid-cols-3 gap-3 items-center">
              <p className="text-black font-bold flex  w-[6vw]">Subtotal</p>
              <p className="text-black font-bold flex justify-center">
                ${" "}
                {stateCart.cart.reduce(
                  (accumulation, item) => accumulation + item.price,
                  0
                )}
              </p>
              <div />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between p-2">
          <div
            onClick={() => clearCart()}
            className="cursor-pointer text-sm text-secondary p-3 rounded-md m-4 border border-1 border-secondary"
          >
            Clear
          </div>
          <div
            onClick={() => {
              if (stateCart.cart.length > 0) {
                setReceiptData(stateCart.cart)
                checkout();
                onClose();
                // setTimeout(() => {
                  setShowReceipt(true);
                // }, 3000);
          
              } else {
                toast.success(
                  "Your cart is empty. Please add items before checkout."
                );
              }
            }}
            className="cursor-pointer text-sm bg-red-100 p-3 rounded-md m-4"
          >
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddToCart;
