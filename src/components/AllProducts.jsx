import { useEffect, useState } from "react";

export default function AllCategories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/ProductCard") 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-[100px]">
      <h1 className="text-3xl font-inter mb-[30px]">Все категории</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-[255px] h-auto rounded-lg border bg-white shadow-sm overflow-hidden"
          >
            <div className="flex items-center justify-center p-4 md:p-10">
              <img src={product.img} alt={product.title} className="max-h-36 object-contain" />
            </div>
            <p className="ms-4 font-inter w-full truncate">{product.title}</p>
            <b className="ms-4">{product.price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
