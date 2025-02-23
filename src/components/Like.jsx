import { useCart } from "../contexts/CartContext";
import { useLike } from "../contexts/LikeContext";
import { useNavigate } from "react-router-dom";
import { ShoppingCart} from "lucide-react";

export default function Like() {
  const { likedItems, removeFromLike } = useLike();
  const {addToCart} = useCart()
  const navigate = useNavigate();
 
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold mb-6">Избранные товары</h1>
      {likedItems.length === 0 ? (
        <p>Список избранных товаров пуст</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {likedItems.map((product) => (
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
              <p className="mx-4 text-sm sm:text-base font-inter w-full">
                {product.title}
              </p>
              <b className="mx-4 text-sm sm:text-base">{product.price}</b>
              <div className="m-4 mt-4 flex gap-x-[20px] mt-10">
                <button onClick={() => addToCart(product) } className="bg-[#FFB12A] text-white  rounded-lg w-[171px] flex p-[12px] gap-x-[10px] font-semibold"><ShoppingCart size={20}/>В корзину</button>
                <button
                  className=" text-white  p-2 rounded-lg border border-gray-300 text-gray-400 hover:text-red-500 hover:border-red-500 transition"
                  onClick={() => removeFromLike(product.id)}
                >
                    <img src="/src/assets/mi_delete.png" alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
