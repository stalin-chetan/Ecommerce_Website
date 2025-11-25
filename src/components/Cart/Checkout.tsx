import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      Image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Sneakers",
      size: "43",
      color: "Black",
      price: 100,
      Image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 220,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutId(123);
    console.log("Checkout created, checkoutId:", 123);
  };

  const handleMockPayment = () => {
    setIsProcessing(true);
    console.log("Payment processing started...");

    setTimeout(() => {
      setIsProcessing(false);
      console.log("Payment completed, redirecting...");
      navigate("/order-confirmation");
    }, 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl uppercase mb-4 sm:mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-base sm:text-lg mb-3 sm:mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
              disabled
            />
          </div>
          <h3 className="text-base sm:text-lg mb-3 sm:mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-gray-700 text-sm sm:text-base">
                First Name
              </label>
              <input
                type="text"
                value={shippingAddress.firstname}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstname: e.target.value,
                  })
                }
                className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm sm:text-base">
                Last Name
              </label>
              <input
                type="text"
                value={shippingAddress.lastname}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastname: e.target.value,
                  })
                }
                className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm sm:text-base">
              Address
            </label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-gray-700 text-sm sm:text-base">
                City
              </label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm sm:text-base">
                Postal Code
              </label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-gray-700 text-sm sm:text-base">
                Country
              </label>
              <input
                type="text"
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
                className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm sm:text-base">
                Phone
              </label>
              <input
                type="text"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  })
                }
                className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 sm:py-4 rounded text-sm sm:text-base hover:bg-gray-800 transition-colors"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-base sm:text-lg mb-3 sm:mb-4">
                  Pay with Esewa
                </h3>
                {isProcessing ? (
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-gray-900 mx-auto mb-3 sm:mb-4"></div>
                    <p className="text-sm sm:text-base">
                      Processing your payment...
                    </p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleMockPayment}
                    className="w-full bg-green-600 text-white py-3 sm:py-4 rounded text-sm sm:text-base hover:bg-green-700 transition-colors"
                  >
                    Pay Rs. {cart.totalPrice}
                  </button>
                )}
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="bg-white rounded-lg p-4 sm:p-6 h-fit">
        <h2 className="text-xl sm:text-2xl uppercase mb-4 sm:mb-6">
          Order Summary
        </h2>
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 border-b pb-3 sm:pb-4"
            >
              <img
                src={product.Image}
                alt={product.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium text-sm sm:text-base">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Size: {product.size} | Color: {product.color}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-sm sm:text-base">
                  Rs. {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-3 sm:pt-4 space-y-1 sm:space-y-2">
          <div className="flex justify-between text-sm sm:text-base">
            <span>Subtotal:</span>
            <span>Rs. {cart.totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <span>Shipping:</span>
            <span>Rs. 0</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <span>Tax:</span>
            <span>Rs. 0</span>
          </div>
          <div className="flex justify-between text-base sm:text-lg font-bold border-t pt-2">
            <span>Total:</span>
            <span>Rs. {cart.totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
