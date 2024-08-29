"use client";

import { useAuth } from "@/context/AuthContext";
import { getProducts } from "@/utils/data";
import { useEffect, useState } from "react";
import ProductCard from "../product_card/ProductCard";

const ShoppingCart = () => {
  const [productsCards, setProductsCards] = useState<Array<any>>([]);
  const context = useAuth();

  const handleDelete = (id:number)=>{
      const newArr = context.shoppingCart.filter(el => el !== id)
      context.setShoppingCart(newArr)
      sessionStorage.setItem("cart", JSON.stringify(newArr))
  }

  const handleCheckout = () => {
    context.setShoppingCart([])
    sessionStorage.removeItem("cart")
    alert("Shoping done!")
  }

  useEffect(() => {
    getProducts().then((res: any[]) => {
      const loadProducts = res.filter((el) =>
        context.shoppingCart.includes(el.id)
      );
      setProductsCards(loadProducts);
    });
  }, [context.shoppingCart]);

  return (
    <div className=" min-h-80 flex flex-col items-center justify-center">
      <div className="flex">
        {productsCards.map((el, i) => (
          <div key={i} className="flex items-start mx-5 flex-wrap">
            <ProductCard
              id={el.id}
              name={el.name}
              imageUrl={el.imageUrl}
              price={el.price}
              description={el.description}
              stock={el.stock}
              categoryId={el.categoryId}
            />
            <button className=" cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-3" onClick={() => handleDelete(el.id)}>X</button>
          </div>
        ))}
      </div>
      {productsCards.length ? <button className=" cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-3 mb-5" onClick={handleCheckout}>Checkout</button> : <p>Your car is empty</p>}
      
    </div>
  );
};

export default ShoppingCart;
