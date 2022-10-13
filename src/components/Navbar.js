import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="w-full bg-blue-600 py-[20px] px-[10px] box-border">
      <div className="max-w-[960px] mx-auto">
        <ul className="flex mx-0 my-auto  items-center gap-3">
          <li className="mr-auto font-bold text-xl text-white">
            <Link exact to="/">
              <span className="text-2xl text-yellow-400">€</span> Tracker
            </Link>
          </li>

          {!user && (
            <>
              <li>
                <Link
                  className="text-white no-underline hover:text-yellow-400 font-bold"
                  to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="text-white no-underline hover:text-yellow-400 font-bold"
                  to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}

          {user && (
            <>
              <li className="text-white">Hi, {user.displayName}</li>
              <li>
                <button
                  onClick={logout}
                  className="border-white text-white border-2 px-[6px] py-[6px] rounded font-bold cursor-pointer  hover:text-yellow-400 hover:border-yellow-400">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
