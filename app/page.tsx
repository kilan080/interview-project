'use client';
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  ``
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center text-green-600 mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-40 h-40 object-contain mb-4"
              src={product.image}
              alt={product.title}
            />
            <p className="text-center font-semibold text-sm mb-1 line-clamp-2">{product.title}</p>
            <p className="text-green-600 font-bold mb-1">${product.price}</p>
            <p className="text-xs text-gray-500 text-center line-clamp-3">{product.description}</p>
            <span className="mt-3 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}