import React from "react";
import { Link } from "react-router-dom";
var Navbar = () => {
  return (
    <div class="div-nav">
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div class="px-2 mx-2 navbar-start ">
        <span class="text-lg titlee font-bold">Ad-Axen</span>
      </div>
      <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex hm items-stretch">
          <Link to="/" className="btn btn-ghost btn-sm cus rounded-btn">
            Home
          </Link>
        </div>
      </div>
      <div class="px-2 none mx-2 navbar-start ">
        <span class="text-lg titlee font-bold">Ad-Axen</span>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
