
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
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
]

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      {/* Best Sellers */}
      <h2 className="text-3xl text-center font-bold mb-4">Best seller</h2>
      <ProductDetails />
    <div className="container mx-auto ">
      <h2 className="text-3xl text-center font-bold mb-4">
        Top Wear for Women
      </h2>
      <ProductGrid products={placeholderProducts} />
    </div>
    </div>
  );
};

export default Home;
