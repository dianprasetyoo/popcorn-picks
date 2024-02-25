import React from "react";

interface CartItem {
    title: string;
    price: number;
  }
  
  interface ReceiptProps {
    cartItems: CartItem[];
    onClose: () => void;
  }

  const Receipt: React.FC<ReceiptProps> = ({ cartItems, onClose }) => {
  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[400px] p-8">
        <h2 className="text-lg font-bold mb-4 text-secondary">Receipt</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span className="text-secondary">{item.title}</span>
              <span className="text-secondary">${item.price}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex justify-between">
          <span className="font-bold text-secondary">Total:</span>
          <span className="font-bold text-secondary">${totalAmount}</span>
        </div>
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Receipt;
