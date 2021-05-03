import React, { Fragment, Suspense, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSession } from "../Contexts/SessionContext";
// Navber
// const LoginForm = React.lazy(() => import("../View/Authen/Login"));

const Navbar = () => {
  const { loading, user, logout: handleLogout } = useSession();
  const userBox = useMemo(() => {
    if (loading) {
      return null;
    }
    if (user) {
      return (
        <Fragment>
          <NavLink
            className="block text-md px-2  ml-2 py-2 rounded text-black-700 font-bold hover:text-blue"
            to="/customer"
          >
            {user?.username} ({user?.role})
          </NavLink>
          <button
            className="block text-md px-2  ml-2 py-2 rounded text-black-700 font-bold hover:text-white hover:bg-red-700 lg:mt-0"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </Fragment>
      );
    }
    return (
      <NavLink
        className="block text-md px-2  ml-2 py-2 rounded text-black-700 font-bold hover:text-blue"
        to="/login"
        type="button"
      >
        Login
      </NavLink>
    );
  }, [handleLogout, loading, user]);
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
      <div className="section font-semibold px-10 text-gray-800 fixed w-full top-0 flex header_section bg-gray-100 shadow z-10">
        <a className="h_btns cursor-pointer" href="/">
          <div className="sub_head flex my-auto py-2">
            <div className="logo w-10">
              <img
                className="w-full"
                src="https://icons-for-free.com/iconfiles/png/512/finance+payment+icon-1320186339191923550.png"
                alt=""
              />
            </div>
            <div className="text ml-2 my-auto flex-none">E-Commerce</div>
          </div>
        </a>
        <div className="sub_head  flex space-x-6  ml-5 my-auto">
          <Link className="h_btns cursor-pointer" to="">
            Home
          </Link>
          <Link className="h_btns cursor-pointer" to="/product">
            Products
          </Link>
          <Link className="h_btns cursor-pointer" to="/promotion">
            Promotion
          </Link>
          <Link className="h_btns cursor-pointer" to="/cart">
            Cart
          </Link>
        </div>
        <div className="sub_head ml-auto flex space-x-6 my-auto">
          <Suspense fallback={null}>{userBox}</Suspense>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
