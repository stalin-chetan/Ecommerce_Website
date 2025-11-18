
import { useRef } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  images: {
    url: string;
    altText: string;
  }[];
}

const NewArrivals = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const newArrivals: Product[] = [
    {
      _id: "1",
      name: "Stylish Shirt",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500/?random=1",
          altText: "Stylish Shirt",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Shirt",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500/?random=2",
          altText: "Stylish Shirt",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Shirt",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500/?random=3",
          altText: "Stylish Shirt",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Shirt",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500/?random=4",
          altText: "Stylish Shirt",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Shirt",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500/?random=5",
          altText: "Stylish Shirt",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Shirt",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500/?random=6",
          altText: "Stylish Shirt",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Shirt",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500/?random=7",
          altText: "Stylish Shirt",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Shirt",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500/?random=8",
          altText: "Stylish Shirt",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>

        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles off the runway, freshly added.
        </p>
        {/* HORIZONTAL SCROLL AREA */}
        <div ref={scrollRef} className="overflow-x-auto scroll-smooth">
          <div className="flex space-x-4 pb-4">
            {newArrivals.map((item) => (
              <div
                key={item._id}
                className="min-w-[200px] rounded p-3 bg-white shadow"
              >
                <img
                  src={item.images[0].url}
                  alt={item.images[0].altText}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="mt-2 font-semibold">{item.name}</h3>
                <p className="text-gray-700">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
