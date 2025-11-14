import menCollectionImage from "../../assets/mensCollectionImage.jpg";
import womenCollectionImage from "../../assets/womenCollectionimage.jpg";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1">
          <img
            src={menCollectionImage}
            alt="Men's Collection"
            className="w-full h-[700] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white/40 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men collection
            </h2>
            <Link
              to="/collection/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src={womenCollectionImage}
            alt="Women's Collection"
            className="w-full h-[700] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white/40 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women collection
            </h2>
            <Link
              to="/collection/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
