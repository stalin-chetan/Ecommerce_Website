import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Uncommented this line

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
  const navigate = useNavigate(); // Uncommented this line
  const [checkoutId, setCheckoutId] = useState(null);
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
    setCheckoutId(null);
    console.log("Checkout created, checkoutId:", 123); // Add this for debugging
  };

  const handleMockPayment = () => {
    // Simulate payment processing
    setIsProcessing(true);
    console.log("Payment processing started..."); // Add this for debugging
    
    setTimeout(() => {
      setIsProcessing(false);
      console.log("Payment completed, redirecting..."); // Add this for debugging
      // Redirect to order confirmation page
      navigate("/order-confirmation");
    }, 3000); // 3 second delay to simulate processing
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4 ">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstname}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstname: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastname}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastname: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4 ">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded "
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Esewa</h3>
                {/* Mock payment button */}
                {isProcessing ? (
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                    <p>Processing your payment...</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleMockPayment}
                    className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
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
      <div className="bg-white rounded-lg p-6 h-fit">
        <h2 className="text-2xl uppercase mb-6">Order Summary</h2>
        <div className="space-y-4 mb-6">
          {cart.products.map((product, index) => (
            <div key={index} className="flex items-center gap-4 border-b pb-4">
              <img 
                src={product.Image} 
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  Size: {product.size} | Color: {product.color}
                </p>
                <p className="text-sm text-gray-600">Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="font-medium">Rs. {product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>Rs. {cart.totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Rs. 0</span>
          </div>
          <div className="flex justify-between">
            <span>Tax:</span>
            <span>Rs. 0</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-2">
            <span>Total:</span>
            <span>Rs. {cart.totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;