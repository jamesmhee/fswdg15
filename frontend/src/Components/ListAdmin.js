import React from "react";
import { Link } from "react-router-dom";

const ListAdmin = () => {
  return (
    //form
    <div class="col-md-4">
      <Link to="/admin/dashboard">
        <button type="button" class="mt-4 px-5 py-4 btn button-admin">
          <i class="fas fa-user-cog"></i> Dashboard
        </button>
      </Link>
      <br></br>
      <Link to="/admin/product">
        <button type="button" class="mt-4 px-5 py-4 btn button-admin">
          <i class="fas fa-archive"></i> Manage Product
        </button>
      </Link>
      <br></br>
      <Link to="/admin/promotion">
        <button type="button" class="mt-4 px-5 py-4 btn button-admin">
          <i class="fas fa-ad"></i> Manage Promotion
        </button>
      </Link>
      <br></br>
      <Link to="/admin/order">
        <button type="button" class="mt-4 px-5 py-4 btn button-admin">
          <i class="fas fa-list"></i> Manage Order
        </button>
      </Link>
    </div>
  );
};
export default ListAdmin;
