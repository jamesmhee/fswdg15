import React from "react";
import { useQuery } from "@apollo/client";
import { ORDERS_QUERY } from "../Graphql/ordersQuery";
import { useSession } from "../Contexts/SessionContext";
const OrderList = () => {
  const { user } = useSession();
  const { loading, error, data } = useQuery(ORDERS_QUERY, {
    variables: {
      username: user?.username,
    },
  });
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    return "Error !!";
  }
  console.log(data);
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div className="relative mt-8 flex flex-col lg:justify-center items-center">
          <div className="mt-5 relative lg:max-w-screen-2xl w-full">
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                <i class="fas fa-shopping-cart"></i> Orders
              </h1>
              <hr></hr>
              <br></br>
              <table class="table-auto">
                <thead>
                  <tr className="bg-gray-200 max-w-lg">
                    <th className="w-2/4">
                      <h1 className="text-center">
                        <i className="fas fa-shopping-cart"></i> รายการสั่งซื้อ
                      </h1>
                    </th>
                    <th className="w-1/4">
                      <h1 className="text-center">
                        <i className="fas fa-history"></i> วันที่ทำการสั่งซื้อ
                      </h1>
                    </th>
                    <th className="w-1/6">
                      <h1 className="text-center">
                        <i className="fas fa-money-bill"></i> สถานะ
                      </h1>
                    </th>
                    <th className="w-1/3">
                      <h1 className="text-center">
                        <i className="fas fa-info"></i> ดูรายละเอียดเพิ่มเติม
                      </h1>
                    </th>
                  </tr>
                </thead>
                <br></br>
                <tbody>
                  {data.orders.map((order) => {
                    return (
                      <>
                        <tr>
                          <td>{order._id}</td>
                          <td>{order.timestamp}</td>
                          <td
                            className={
                              order.status === "WAITING"
                                ? "text-red-500 font-semibold"
                                : "text-green-500 font-semibold"
                            }
                          >
                            {order.status === "WAITING"
                              ? "Waiting Payment"
                              : "Payment Successful"}
                          </td>
                          <td className="no-underline hover:underline">
                            More Details
                          </td>
                        </tr>
                        <br></br>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderList;
