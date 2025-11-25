import { useEffect, useState, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import ProductGrid from "../components/Products/ProductGrid";

interface Product {
  id: number;
  name: string;
  images: { url: string }[];
  price: number;
}

const CollectionPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const sidebarRef = useRef<HTMLDivElement | null>(null); // FIXED TYPE
  const [issidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!issidebarOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {   // FIXED TYPE
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target as Node) // FIXED TYPE CAST
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts: Product[] = [
        {
          id: 1,
          name: "product 1",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500/?random=1" }],
        },
        {
          id: 2,
          name: "product 2",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500/?random=2" }],
        },
        {
          id: 3,
          name: "product 3",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500/?random=3" }],
        },
        {
          id: 4,
          name: "product 4",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500/?random=4" }],
        },
        {
          id: 5,
          name: "product 5",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500/?random=5" }],
        },
        {
          id: 6,
          name: "product 6",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500/?random=6" }],
        },
        {
          id: 7,
          name: "product 7",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500/?random=7" }],
        },
        {
          id: 8,
          name: "product 8",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500/?random=8" }],
        },
      ];

      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
      </button>

      <div
        ref={sidebarRef}
        className={`${
          issidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>


        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
