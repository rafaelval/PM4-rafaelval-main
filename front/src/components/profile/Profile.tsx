import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";

const Profile = (): React.ReactElement => {
  const context = useAuth();

  const handleLogout = () => {
    context.setToken(null);
    sessionStorage.clear();
    context.setShoppingCart([]);
  };

  return (
    <div>
      {!context.token ? (
        <div className="flex justify-center">
          <Link className=" p-4" href={"/register"}>
            Register
          </Link>
          <Link className=" p-4" href={"/login"}>
            Login
          </Link>{" "}
        </div>
      ) : (
        <div className="flex flex-row">
          <p className=" cursor-pointer" onClick={handleLogout}>
            Logout
          </p>
          <div className="relative">
            <Link href={"/shoppingcart"}>
              <HiShoppingCart className=" text-3xl ml-3" />
            <span className="absolute -top-1 right-0 bg-red-600 rounded-3xl py-0 px-1 text-xs">
              {context.shoppingCart.length}
            </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
