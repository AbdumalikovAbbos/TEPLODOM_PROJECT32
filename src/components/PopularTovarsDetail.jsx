import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/ProductCard")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:8081/ProductCardHome")
      .then((response) => response.json())
      .then((data) => setSimilarProducts(data))
      .catch((error) =>
        console.error("Error fetching similar products:", error)
      );
  }, []);

  if (!product) {
    return <div>No products found</div>;
  }

  return (
    <div className="bg-[#fafafa] pb-[100px] pt-[60px]">
      <div className="max-w-7xl mx-auto p-4 bg-[#ffffff] p-[20px]">
        <div className="flex gap-x-[46px]">
          <div className="w-full border rounded-[20px]">
            <img src={product.img} alt={product.title} className="w-full" />
          </div>
          <div>
            <p className="font-[600] text-[48px]">{product.title}</p>
            <p className="font-[400] text-[24px] mt-[30px]">{product.desc}</p>
            <p className="font-[400] text-[24px] mt-[33px]">{product.size}</p>
            <p className="font-[500] text-[48px] mt-[34px]">
              {product.price} $
            </p>
            <div className="flex gap-x-[34px]">
              <div className="bg-[#FFB12A] w-[64px] h-[64px] rounded-[8px] mt-[40px] flex items-center justify-center">
                <img
                  src="/src/assets/uiw_payhamyon.svg"
                  alt=""
                  className="p-[14px]"
                />
              </div>
              <div className="bg-white border-2 hover:bg-[#FFB12A]  hover:border-white border-black w-[64px] h-[64px] rounded-[8px] mt-[40px] flex items-center justify-center">
                <img
                  src="/src/assets/fluent_calendar-clock-24-regularvaqt.svg"
                  alt=""
                  className="p-[14px]"
                />
              </div>
              <div className="bg-white border-2  hover:bg-[#FFB12A]  hover:border-white border-black w-[64px] h-[64px] rounded-[8px] mt-[40px] flex items-center justify-center">
                <img
                  src="/src/assets/material-symbols_shopping-cart-outline-roundedsumka.svg"
                  alt=""
                  className="p-[14px]"
                />
              </div>
              <div className="bg-white border-2  hover:bg-[#FFB12A]  hover:border-white border-black w-[64px] h-[64px] rounded-[8px] mt-[40px] flex items-center justify-center">
                <img
                  src="/src/assets/cil_heartlike.svg"
                  alt=""
                  className="p-[14px]"
                />
              </div>
              <div className="flex items-center justify-between w-36 h-14 border border-[#E1E1E1] rounded-lg mt-[45px]">
                <button className="w-1/3 h-full flex items-center justify-center border-r border-gray-300 text-xl font-bold hover:bg-gray-100">
                  −
                </button>
                <div className="w-1/3 h-full flex items-center justify-center text-lg font-semibold">
                  2
                </div>
                <button className="w-1/3 h-full flex items-center justify-center border-l border-gray-300 text-xl font-bold hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Похожие продукты */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <b className="text-lg sm:text-2xl font-inter mb-4 inline-flex items-center">
          Похожие продукты
        </b>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[100%] h-auto sm:h-[401px] rounded-lg border bg-white shadow-sm cursor-pointer"
              onClick={() => navigate(`/product-detail/${product.id}`)}
            >
              <div className="flex items-center justify-center p-6 sm:p-10">
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-h-36 object-contain"
                />
              </div>
              <p className="mx-4 text-sm sm:text-base font-inter">
                {product.title}
              </p>
              <b className="mx-4 text-sm sm:text-base">{product.price} $</b>
              <div className="m-4 mt-4 flex gap-2">
                <button className="flex items-center justify-center bg-[#FFB12A] text-white gap-2 border border-[#FFB12A] rounded-lg p-2 w-full sm:w-auto mb-2">
                  <ShoppingCart size={20} /> В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
