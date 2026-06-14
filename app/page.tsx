'use client';
import { useEffect } from "react";
import { useState } from "react";


export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null>(null);

  interface Product {
    id: number,
    title: string,
    price: number,
    image: string,
    description: string,
    category: string
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data)
        setProducts(data);
      } catch (error) {
        setError(null);
      } finally {
        setLoading(false)
      }
    }

    fetchProducts();
  }, [])

  return (
    <div className=" bg-green-500 flex justify-center items-center text-sm color-green-500 font-bold">
      {/* react component to fetch and display list of products for interview using try and catch from a random end pont */}

      <div className="flex-col items-center justify-center w-full h-full mt-2">
        {loading && <p>loading...</p>}
        {products.map((product: Product) => (
          <div className="flex flex-col items-center" key={product.id}>
            <img className="flex justify-center items-center w-60 h-40" src={product.image} alt={product.title} />
            <p className="flex justify-center items-center flex-column mt-2">{product.title}</p>
            <p className="flex justify-center items-center flex-column mt-2">${product.price}</p>
            <p className="text-sm max-w-120">{product.description}</p>
            <p className="text-sm w-60">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}