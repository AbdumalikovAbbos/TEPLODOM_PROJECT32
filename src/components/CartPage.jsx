import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    quantity: "",
    name: "",
    phone: "",
    region: "",
    city: "",
    village: "",
    address: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value.trim() === "")) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    setError(""); 
    setIsOrderPlaced(true);

    setTimeout(() => {
      setIsModalOpen(false);
      setIsOrderPlaced(false);
      setFormData({ quantity: "", name: "", phone: "", region: "", city: "", village: "", address: "" });
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((product) => (
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
              <div className="m-4 mt-4 flex gap-x-[10px]">
                <button
                  className="bg-[#FFB12A] p-[12px] rounded-[8px] text-white text-center flex gap-x-[10px]"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img src="/src/assets/file 1 (Traced).png" alt="" />
                  Оформить
                </button>
                <button
                  className="text-white p-2 rounded-lg border border-gray-300 text-gray-400 hover:text-red-500 hover:border-red-500 transition"
                  onClick={() => removeFromCart(product.id)}
                >
                  <img src="/src/assets/mi_delete.png" alt="" />
                </button>
              </div>
            </div>
          ))}
        </ul>
      )}

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
              <h2 className="text-[28px] font-[600] text-center text-black">
                Спасибо за покупку!
                
                <p>Ваш номер заказа {cart[1].id}</p>
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
