import { IProduct } from "@/app/types";
import Link from "next/link";

const ProductCard: React.FC<IProduct> = ({
  id,
  name,
  price,
  imageUrl,
  stock,
}: IProduct) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col items-center justify-center p-4 border border-black rounded-lg bg-gray-900 text-gray-300 m-2 w-64 h-72">
        <img src={imageUrl} alt={name} className="h-40 rounded-lg mt-5"/>
        <h2 className="my-2">{name}</h2>
        <h3 className="my-2 font-bold">$ {price}</h3>
        <h4 className="my-2">Available {stock}</h4>
      </div>
    </Link>
  );
};

export default ProductCard;
