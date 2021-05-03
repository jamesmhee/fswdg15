import { useQuery } from "@apollo/client";
import React from "react";
import { ALL_QUERY } from '../Graphql/allQuery';
// import List from "../Components/ListAdmin";
const Dasboard = () => {
  const { loading, error, data }= useQuery(ALL_QUERY);
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    return "Error !!";
  }
  console.log(data);
  return (
    <div class="mt-1 col-md-8">
      <div class="row">
        <div class="col-5 px-6 py-5 border rounded bg-blue-100 shadow-md">
          <span class="h3">
            <i class="fas fa-chart-pie"></i> จำนวนสินค้า
          </span>
          <hr></hr>
          <br></br> {data?.products?.length} ชิ้น{" "}
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="col-5 px-6 py-5 border rounded bg-green-100 shadow-md">
          <span class="h3">
            <i class="fas fa-list"></i> จำนวนออร์เดอร์
          </span>
          <hr></hr>
          <br></br> {data?.orders?.length} ชิ้น{" "}
        </div>
      </div>
      <div class="mt-5 row">
        <div class="col-5 px-6 py-5 border rounded bg-red-100 shadow-md">
          <span class="h3">
            <i class="fas fa-chart-pie"></i> จำนวนโปรโมชั่นที่มี
          </span>
          <hr></hr>
          <br></br> {data?.promotions?.length} ชิ้น{" "}
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="col-5 px-6 py-5 border rounded bg-yellow-100 shadow-md">
          <span class="h3">
            <i class="fas fa-user-cog"></i> จำนวนผู้ใช้ที่มี
          </span>
          <hr></hr>
          <br></br> {data?.customers?.length} user{" "}
        </div>
      </div>
    </div>
  );
};
export default Dasboard;
