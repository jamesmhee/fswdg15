import React from "react";

// Navber Admin
const NavbarAdmin = () => {
  return (
    <React.Fragment>
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
          <div className="sub_head ml-auto flex space-x-6 my-auto">
            <a className="h_btns cursor-pointer" href="/">
              Home
            </a>
            <a className="h_btns cursor-pointer" href="/product">
              Products
            </a>
            <a className="h_btns cursor-pointer" href="/orders">
              Order
            </a>
            <a className="h_btns cursor-pointer" href="/promotion">
              Promotion
            </a>
            <a className="h_btns cursor-pointer" href="/">
              Dashboard
            </a>
            <a className="h_btns cursor-pointer" href="/cart">
              Cart
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarAdmin;
