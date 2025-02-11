import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/ProductCardHome")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="w-full">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[100px]">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-[30px]">
          <b className="text-lg sm:text-2xl font-inter mb-4 sm:mb-0">
            Новинки на сайте
          </b>
          <button
            className="text-sm sm:text-base cursor-pointer text-[#0077B6] font-inter underline"
            onClick={() => navigate("/all-categories")}
          >
            Все категории
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[255px] h-auto sm:h-[401px] rounded-lg border bg-white shadow-sm"
            >
              <div className="flex items-center justify-center p-6 sm:p-10">
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-h-36 object-contain"
                />
              </div>
              <p className="mx-4 text-sm w-[195px] sm:text-base font-inter  w-full">
                {product.title}
              </p>
              <b className="mx-4 text-sm sm:text-base">{product.price}</b>
              <div className="m-4 mt-4 flex gap-x-[10px]">
                <button className="flex items-center justify-center bg-[#FFB12A] text-white gap-2 border border-[#FFB12A] rounded-lg p-2 w-full sm:w-auto">
                  <ShoppingCart size={20} />В корзину
                </button>
                {/* ?like */}
                <button className="bg-[#FFB12A] p-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.01 4.01 4 6.5 4c1.54 0 3.04.99 3.57 2.36h1.87C14.46 4.99 15.96 4 17.5 4 19.99 4 22 6.01 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}
