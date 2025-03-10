import { useEffect, useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useLike } from "../contexts/LikeContext";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToLike } = useLike(); 

  useEffect(() => {
    fetch("http://localhost:8081/ProductCardHome")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="w-full">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-[30px]">
          <b className="text-lg sm:text-2xl font-inter mb-4 sm:mb-0">
            Новинки на сайте
          </b>
          <button
            className="text-sm sm:text-base cursor-pointer text-[#0077B6] font-inter"
            onClick={() => navigate("/all-categories")}
          >
            Смотреть Все
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[100%] h-auto sm:h-[401px] rounded-lg border bg-white shadow-sm"
            >
              <div
                className="flex items-center justify-center p-6 sm:p-10"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-h-36 object-contain"
                />
              </div>
              <p className="mx-4 text-sm w-[195px] sm:text-base font-inter w-full">
                {product.title}
              </p>
              <b className="mx-4 text-sm sm:text-base">{product.price}</b>
              <div className="m-4 mt-4 flex gap-x-[10px]">
                <button
                  className="flex items-center justify-center bg-[#FFB12A] text-white gap-2 border border-[#FFB12A] rounded-lg p-2 w-full sm:w-auto"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart size={20} />
                  В корзину
                </button>
                {/* Like Button */}
                <button
                  className="bg-[#FFB12A] p-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
                  onClick={() => addToLike(product)}
                >
                  <Heart size={24} color="white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}
