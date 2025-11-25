import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = 
        direction === "left" 
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });

      // Update button visibility after scroll
      setTimeout(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          setShowLeftButton(scrollLeft > 0);
          setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
        }
      }, 300);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="relative">
      <div className="container mx-auto text-center mb-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Explore New Arrivals</h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
          Discover the latest styles off the runway, freshly added.
        </p>
        
        {/* Scroll Buttons */}
        {showLeftButton && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 z-10 transition-all duration-200 hover:scale-105"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
        
        {showRightButton && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 z-10 transition-all duration-200 hover:scale-105"
            aria-label="Scroll right"
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* HORIZONTAL SCROLL AREA */}
        <div 
          ref={scrollRef} 
          className="overflow-x-auto scroll-smooth scrollbar-hide"
          onScroll={handleScroll}
        >
          <div className="flex space-x-3 sm:space-x-4 lg:space-x-6 pb-4 px-1">
            {newArrivals.map((item) => (
              <div
                key={item._id}
                className="min-w-[150px] sm:min-w-[180px] lg:min-w-[200px] rounded-lg p-3 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.images[0].url}
                  alt={item.images[0].altText}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 font-semibold text-sm sm:text-base lg:text-lg">{item.name}</h3>
                <p className="text-gray-700 text-sm sm:text-base">${item.price}</p>
                <button className="w-full mt-2 bg-black text-white py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm hover:bg-gray-800 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;