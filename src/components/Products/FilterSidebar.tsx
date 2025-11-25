import { useEffect, useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  type FiltersType = {
    category: string;
    gender: string;
    color: string;
    size: string[];
    material: string;
    brand: string[];
    minPrice: number;
    maxPrice: number;
  };

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [filters, setFilters] = useState<FiltersType>({
    category: "",
    gender: "",
    color: "",
    size: [] as string[],
    material: "",
    brand: [] as string[],
    minPrice: 100,
    maxPrice: 1000,
  });

  const [priceRange, setPriceRange] = useState([100, 1000]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Green", "Black", "White"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Wool"];
  const brands = ["FashionBrand", "StyleCo", "TrendSetters"];
  const genders = ["Men", "Women"];

  // Define updateUrlParams with useCallback to avoid infinite re-renders
  const updateUrlParams = useCallback((newFilters: FiltersType) => {
    const params = new URLSearchParams();
    
    Object.keys(newFilters).forEach((key) => {
      const filterKey = key as keyof FiltersType;
      const value = newFilters[filterKey];
      
      if (Array.isArray(value) && value.length > 0) {
        params.append(filterKey, value.join(","));
      } else if (value && value !== "" && value !== 100) { // Skip default values
        params.append(filterKey, value.toString());
      }
    });
    
    // Update URL using navigate
    navigate(`?${params.toString()}`, { replace: true });
  }, [navigate]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    const minPrice = Number(params.minPrice || 100);
    const maxPrice = Number(params.maxPrice || 1000);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material || "",
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: minPrice,
      maxPrice: maxPrice,
    });

    setPriceRange([minPrice, maxPrice]);
  }, [searchParams]);

  // Add useEffect to log filter changes and update URL
  useEffect(() => {
    console.log("Filters updated:", filters);
    updateUrlParams(filters);
  }, [filters, updateUrlParams]); // Added updateUrlParams to dependencies

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFilters(prev => {
      let newFilters = { ...prev };

      if (type === "checkbox") {
        if (name === "size" || name === "brand") {
          // Handle array fields (size and brand)
          if (checked) {
            newFilters = {
              ...prev,
              [name]: [...prev[name], value]
            };
          } else {
            newFilters = {
              ...prev,
              [name]: prev[name].filter((item: string) => item !== value)
            };
          }
        } else {
          // Handle material as single selection (like radio)
          newFilters = {
            ...prev,
            [name]: checked ? value : ""
          };
        }
      } else {
        // Handle radio buttons (category, gender)
        newFilters = {
          ...prev,
          [name]: value
        };
      }

      return newFilters;
    });
  };

  const handleColorChange = (color: string) => {
    setFilters(prev => ({
      ...prev,
      color: prev.color === color ? "" : color
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(e.target.value);
    setPriceRange([100, newPrice]);
    
    setFilters(prev => ({
      ...prev,
      maxPrice: newPrice
    }));
  };

  // For dual range slider (min and max)
  const handlePriceRangeChange = (index: number, value: number) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = value;
    
    // Ensure min <= max
    if (index === 0 && value > priceRange[1]) {
      newPriceRange[1] = value;
    } else if (index === 1 && value < priceRange[0]) {
      newPriceRange[0] = value;
    }
    
    setPriceRange(newPriceRange);
    
    setFilters(prev => ({
      ...prev,
      minPrice: newPriceRange[0],
      maxPrice: newPriceRange[1]
    }));
  };

  return (
    <div className="p-4">
      <h3 className="text-xl text-gray-800 mb-4 ">Filter</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="mb-1 flex items-center">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="mr-2"
            />
            <span>{category}</span>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="mb-1 flex items-center">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterChange}
              className="mr-2"
            />
            <span>{gender}</span>
          </div>
        ))}
      </div>

      {/* Color */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => handleColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                filters.color === color ? 'border-blue-500' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="mb-1 flex items-center">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size.includes(size)}
              onChange={handleFilterChange}
              className="mr-2"
            />
            <span>{size}</span>
          </div>
        ))}
      </div>

      {/* Material */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="mb-1 flex items-center">
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material === material}
              onChange={handleFilterChange}
              className="mr-2"
            />
            <span>{material}</span>
          </div>
        ))}
      </div>

      {/* Brand */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="mb-1 flex items-center">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2"
            />
            <span>{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range - Rs:{priceRange[0]} - Rs:{priceRange[1]}
        </label>
        
        {/* Single Range Slider (Max Price) */}
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-2">Max Price: Rs{priceRange[1]}</label>
          <input 
            type="range" 
            min={100} 
            max={1000} 
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full"
          />
        </div>

        {/* Dual Range Slider (Min and Max Price) - Optional */}
        <div>
          <label className="block text-sm text-gray-500 mb-2">Price Range</label>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">Min: Rs{priceRange[0]}</label>
              <input 
                type="range" 
                min={100} 
                max={1000} 
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(0, Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">Max: Rs{priceRange[1]}</label>
              <input 
                type="range" 
                min={100} 
                max={1000} 
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(1, Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <span>Rs:100</span>
          <span>Rs:1000</span>
        </div>
      </div>
    </div>
  );
};
export default FilterSidebar;