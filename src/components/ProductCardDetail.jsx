import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

export default function ProductCardDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Modal va forma uchun state'lar:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    quantity: "1",
    name: "",
    phone: "",
    region: "",
    city: "",
    village: "",
    address: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8081/ProductCardHome/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:8081/ProductCardHome`)
      .then((response) => response.json())
      .then((data) => setSimilarProducts(data))
      .catch((error) =>
        console.error("Error fetching similar products:", error)
      );
  }, []);

  if (!product) {
    return <div>No products found</div>;
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    // Agar biron maydon bo'sh bo'lsa
    if (Object.values(formData).some((value) => value.trim() === "")) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }
    setError("");
    setIsOrderPlaced(true);

    // 3 soniyadan keyin modal avtomatik yopiladi
    setTimeout(() => {
      setIsModalOpen(false);
      setIsOrderPlaced(false);
      setFormData({
        quantity: "1",
        name: "",
        phone: "",
        region: "",
        city: "",
        village: "",
        address: "",
      });
    }, 3000);
  };

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
              {/* Birinchi tugma: Modalni ochish */}
              <div
                className="bg-[#FFB12A] w-[64px] h-[64px] rounded-[8px] mt-[40px] flex items-center justify-center cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src="/src/assets/uiw_payhamyon.svg"
                  alt=""
                  className="p-[14px]"
                />
              </div>
              <div className="bg-white border-2 hover:bg-[#FFB12A] hover:border-white border-black w-[64px] h-[64px] rounded-[8px] mt-[40px] flex items-center justify-center">
                <img
                  src="/src/assets/fluent_calendar-clock-24-regularvaqt.svg"
                  alt=""
                  className="p-[14px]"
                />
              </div>
              <div className="bg-white border-2 hover:bg-[#FFB12A] hover:border-white border-black w-[64px] h-[64px] rounded-[8px] mt-[40px] flex items-center justify-center">
                <img
                  src="/src/assets/material-symbols_shopping-cart-outline-roundedsumka.svg"
                  alt=""
                  className="p-[14px]"
                  onClick={() => addToCart(product)}
                />
              </div>
              <div className="bg-white border-2 hover:bg-[#FFB12A] hover:border-white border-black w-[64px] h-[64px] rounded-[8px] mt-[40px] flex items-center justify-center">
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
          {similarProducts.map((prod) => (
            <div
              key={prod.id}
              className="w-full sm:w-[100%] h-auto sm:h-[401px] rounded-lg border bg-white shadow-sm cursor-pointer"
              onClick={() => navigate(`/product/${prod.id}`)}
            >
              <div className="flex items-center justify-center p-6 sm:p-10">
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="max-h-36 object-contain"
                />
              </div>
              <p className="mx-4 text-sm sm:text-base font-inter">{prod.title}</p>
              <b className="mx-4 text-sm sm:text-base">{prod.price} $</b>
              <div className="m-4 mt-4 flex gap-2">
                <button
                  className="flex items-center justify-center bg-[#FFB12A] text-white gap-2 border border-[#FFB12A] rounded-lg p-2 w-full sm:w-auto mb-2"
                  onClick={() => addToCart(prod)}
                >
                  <ShoppingCart size={20} /> В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal Oynasi */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[900px] relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            {isOrderPlaced ? (
              <h2 className="text-[28px] font-[600] text-center text-green-500">
                Спасибо за покупку! 🎉
              </h2>
            ) : (
              <>
                <h2 className="text-[28px] font-[600] mb-4">Оформление заказа</h2>
                <h3 className="mt-[20px] font-[500] text-[20px] leading-[20px]">
                  Купить Пеноплекс Основа
                </h3>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <form onSubmit={handleOrderSubmit}>
                  <div className="flex flex-col sm:flex-row gap-4 mt-[20px]">
                    <div className="flex-1">
                      <label className="block mb-2">Введите Штук</label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Введите"
                      />
                      <label className="block mb-2 mt-[20px]">Введите имя</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Введите имя"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2">Введите номер телефона</label>
                      <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Введите номер телефона"
                      />
                      <label className="block mb-2 mt-[20px]">Введите область</label>
                      <input
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Введите область"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-[20px]">
                    <div className="flex-1">
                      <label className="block mb-2">Введите город / район</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Введите город"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2">Введите населённый пункт</label>
                      <input
                        type="text"
                        name="village"
                        value={formData.village}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Введите населённый пункт"
                      />
                    </div>
                  </div>
                  <label className="block mb-2 mt-[20px]">Введите адрес</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Введите адрес"
                  />
                  <button type="submit" className="bg-[#FFB12A] w-full p-2 mt-4 text-white rounded">
                    Оформить заказ
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
