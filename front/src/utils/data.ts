import { LoginProps, RegisterProps } from "@/app/types";
import { productsToPreLoad } from "./preLoadData";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

export const getProductsDB = async () => {
  const url = `${NEXT_PUBLIC_URL}/products`;
  try {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  } catch (error: any) {
    return error;
  }
};

export const getProducts = async (): Promise<Array<any>> => {
  const productsDB = await getProductsDB()
  const products = productsDB.map((product:any, index:number) => {
    return {
      ...product,
      imageUrl: productsToPreLoad[index].image
    }
  })
  return products
}

export const getProductById = async (id:string)=>{
  const products = await getProducts()
  const product = products.find((product) => product.id.toString() === id)
  if(!product) throw new Error('Product not found')
    return product
} 


export async function login(userData:LoginProps){
  const response =  await fetch(`${NEXT_PUBLIC_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (response.ok){
    return response.json()
  } else {
    alert('Datos incorrectos')
  }
}

export async function register(userData:RegisterProps) {
  const response = await fetch(`${NEXT_PUBLIC_URL}/users/register`,{
    method:"POST", 
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (response.ok){
    return response.json()
  } else {
    alert('Datos incorrectos')
  }
}