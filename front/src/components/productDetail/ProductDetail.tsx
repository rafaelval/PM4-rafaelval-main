"use client";
import { getProductById } from "@/utils/data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct } from "@/app/types";
import { HiShoppingCart } from "react-icons/hi";
import { useAuth } from "@/context/AuthContext";

export default function Page() {
  const context = useAuth();
  const params = useParams();
  const { slug }: any = params;
  const [product, setProduct] = useState<IProduct | null>(null);

  function handleClick() {
    const token = context.token;
    if (!token) {
      alert("Debes estar logeado");
    } else {
      const id = product?.id;
      const isProduct = context.shoppingCart.filter((el) => el === id);
      if (!isProduct.length){
            context.setShoppingCart([...context.shoppingCart, product?.id]);
            sessionStorage.setItem("cart", JSON.stringify([...context.shoppingCart, product?.id]))

      }
     
    }
}

  useEffect(() => {
    (async () => {
      const res = await getProductById(slug);
      setProduct(res);
    })();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row m-5 w-full md:w-2/4 relative box-border">
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="w-full md:w-96 h-fit object-fill rounded-lg"
        />
        <div className="flex flex-col p-5 justify-around">
          <h1 className="m-5 font-mono font-bold text-2xl">{product?.name}</h1>
          <p className="text-gray-400">{product?.description}</p>
          <h3 className="text-green-600 text-xl font-bold">
            Price: $ {product?.price}
          </h3>
          <h4 className="text-gray-500">Disponible: {product?.stock}</h4>
        </div>
        <div className="w-full md:w-2/4">
          <button className=" bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative md:relative lg:relative s bottom-0 right-0 m-5">
            <HiShoppingCart onClick={handleClick} />
          </button>
        </div>
      </div>
    </div>
  );
}
