import React from "react";

export default function CartPage({e}) {
  console.log(e);

  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

        {/* Cart Items */}
        <div className="space-y-4">
          {e.map((item) => (
            
            <div
              key={item}
              
              
              className="flex items-center justify-between border p-4 rounded-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-xl" />
                <div>
                  {/* {console.log(item)} */}
                  <h2 className="text-lg font-medium">{item.e.name}</h2>
                  
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">{item.e.price}</p>
                <p className="text-sm text-gray-500">Qty: 1</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 border-t pt-4 flex justify-between items-center">
          <p className="text-xl font-semibold">Total:</p>
          <p className="text-xl font-bold">$99.98</p>
        </div>

        {/* Checkout Button */}
        <div className="mt-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
