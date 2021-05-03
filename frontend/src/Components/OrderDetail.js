import React from "react";
import { useParams } from "react-router";
import { ORDERS_QUERY_BY_ID } from "../Graphql/ordeqruertById";
import { useQuery } from "@apollo/client";

const OrderDetail = () => {
  const { id_order } = useParams()
  const { loading, error, data }= useQuery(
  ORDERS_QUERY_BY_ID,
  {
    variables: {
      id: id_order,
    },
  }
);
if (loading) {
  return "Loading ...";
}
if (error) {
  return "Error !!";
}
console.log(data)
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div class="mt-4 text-left"><b><i class="fas fa-archive"></i> Order Number</b> : 001 - Product Name<hr></hr>
        </div>
        <div class="text-left mt-2"><i class="fas fa-user"></i> <b>User</b> : {data?.order?.ownerName}<br></br>
        <li> Name : {data?.order?.owner?.fullname}</li>
        <li> Address : Bangkok Ladkrabang</li>
        <li> Tel : {data?.order?.owner?.tel}</li>
        <b><i class="mt-2 fas fa-calendar"></i> Date Order</b> : {data?.order?.timestamp}<br></br>
        <b><i class="mt-2 fas fa-chart-pie"></i> Item</b> : 2<br></br>
        <b><i class="mt-2 far fa-money-bill-alt"></i> </b> : $ {data?.order?.totalPrice}<br></br>
        <b><i class="mt-2 fas fa-exclamation-circle"></i> Status</b> : {data?.order?.status}
        </div>
        {/* <a href="javascript:javascript:history.go(-1)"> */}
        <button
                        data-toggle="modal"
                        data-target="#myModal"
                        type="button"
                        class="mt-4 col-11 px-6 py-4 btn button-admin" 
                      >
        <i class="fas fa-arrow-circle-left"></i> ย้อนกลับ
        </button>
        {/* </a> */}
      </div>
    </section>
  );
};
export default OrderDetail;
