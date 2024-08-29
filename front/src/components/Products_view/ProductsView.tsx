"use client"
import { getProducts } from "@/utils/data";
import ProductCards from "../product_cards/Product_cards";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/app/types";

const ProductsView = (): React.ReactElement => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <div>
      <ProductCards products={products} />
    </div>
  );
};

export default ProductsView;
