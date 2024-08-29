"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  token: string | null;
  userName: string | null;
  setToken:(token:string | null) => void;
  shoppingCart:Array<number>
  setShoppingCart:(products:any)=>void
}

interface AutoProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
  token: null,
  userName: "",
  setToken:()=>{},
  shoppingCart:[],
  setShoppingCart:()=>{}
});

export const AuthProvider: React.FC<AutoProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [shoppingCart, setShoppingCart] =  useState<Array<number>>([])

  useEffect(() => {
    const tokenFromSession = sessionStorage.getItem("token");
    const userNameFromSession = sessionStorage.getItem("username");
    const currentCart = sessionStorage.getItem("cart")

    if (tokenFromSession) {
      setToken(tokenFromSession);
    }
    if (userNameFromSession) {
      setUserName(userNameFromSession);
    } 
    if(currentCart){
      setShoppingCart(JSON.parse(currentCart))
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, userName,setToken, shoppingCart, setShoppingCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
