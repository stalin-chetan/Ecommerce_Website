import { Link } from "react-router-dom";

interface ProductImage {
  url: string;
  altText?: string;
}

interface Product {
  id: string | number;
  name: string;
  price: number;
  images: ProductImage[];
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-gray-700 font-medium text-sm tracking-tighter">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
