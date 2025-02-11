// src/components/CategoryDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SuxiSmesiDetail = () => {
  const { categoryId } = useParams(); // Get the category ID from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/products?categoryId=${categoryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server error!");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-10">
      <h1 className="text-3xl font-bold mb-6">Products in Category</h1>

      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white w-full p-4 rounded-lg shadow-md"
            >
              <img
                className="mb-4 mx-auto"
                src={product.image}
                alt={product.title}
              />
              <p className="font-medium">{product.title}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuxiSmesiDetail;
