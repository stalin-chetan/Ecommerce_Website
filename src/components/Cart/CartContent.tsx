import { RiDeleteBin3Line } from "react-icons/ri";
import { useState } from "react";

const CartContent = () => {
  const [cartProducts, setCartProducts] = useState([
    {
      productId: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      size: "M",
      color: "Red",
      imageUrl: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Product 2",
      price: 39.99,
      quantity: 1,
      size: "L",
      color: "Blue",
      imageUrl: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Product 3",
      price: 19.99,
      quantity: 3,
      size: "S",
      color: "Green",
      imageUrl: "https://picsum.photos/200?random=3",
    },
  ]);

  const handleQuantityChange = (productId: number, change: number) => {
    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.productId === productId
          ? { 
              ...product, 
              quantity: Math.max(1, product.quantity + change) 
            }
          : product
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartProducts(prevProducts =>
      prevProducts.filter(product => product.productId !== productId)
    );
  };

  return (
    <div className="p-4">
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-start justify-between py-4 border-b gap-4"
        >
          <div className="flex items-start flex-1">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base">{product.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>

              <div className="flex items-center mt-2">
                <button 
                  onClick={() => handleQuantityChange(product.productId, -1)}
                  className="border rounded w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base font-medium hover:bg-gray-100"
                >
                  -
                </button>
                <span className="mx-2 sm:mx-4 text-sm sm:text-base">{product.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(product.productId, 1)}
                  className="border rounded w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base font-medium hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            <p className="font-semibold text-sm sm:text-base">
              Rs:{(product.price * product.quantity).toFixed(2)}
            </p>
            <button 
              onClick={() => handleRemoveItem(product.productId)}
              className="p-1 sm:p-2 hover:bg-red-50 rounded-full transition-colors"
            >
              <RiDeleteBin3Line className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 hover:text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;