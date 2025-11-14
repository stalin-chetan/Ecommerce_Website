import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
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
  ];

  return (
    <div className="p-4">
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-20 h-24 object-cover rounded mr-4"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>

              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>

          <p className="font-semibold">
            Rs:{(product.price * product.quantity).toFixed(2)}
          </p>
          <button>
            <RiDeleteBin3Line className="h-6 w-6 text-gray-600 mt-2" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
