import React from "react";
import { Link, useHistory} from "react-router-dom";
import { useQuery} from "@apollo/client";
import List from "../../Components/ListAdmin";
import { DataGrid } from "@material-ui/data-grid";
import { ALL_ORDERS_QUERY } from "../../Graphql/ordersQuery";
const columns = [
  { field: "id", headerName: "Order", width: 220 },
  { field: "user", headerName: "User", width: 120 },
  { field: "email", headerName: "E-mail", width: 240 },
  { field: "date", headerName: "Date", width: 120 },
  { field: "total", headerName: "Total", width: 100 },
  { field: "status", headerName: "Status", width: 100 },
];
const rows = [];

const OrderInfo = () => {
  const history = useHistory();
  const { loading, error, data } = useQuery(ALL_ORDERS_QUERY);
 
  data?.orders?.map((order,) => {
    return rows.push({
      id: order._id,
      user: order.ownerName,
      email: order.owner.email,
      date: order.timestamp,
      total: order.totalPrice,
      status: order.status,
    });
  });
  const handleRowClick = (event) => {
    history.push(`/admin/order/${event.id}`);
    console.log(event.id)
  };
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    return "Error !!";
  }
  
  
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div className="relative mt-8 flex flex-col lg:justify-center items-center">
          <div className="mt-5 relative lg:max-w-screen-2xl w-full">
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                <i class="fas fa-user-cog"></i> Admin Dasboard
              </h1>
              <hr></hr>

              <div class="ml-2 mt-4 row text-left">
                <List />
                <div class="mt-1 col-md-8">
                  <div class="h2">
                    <i class="fas fa-list"></i> Manage Order<br></br>
                  </div>
                  <div class="row">
                    <div class="col-11 px-6 py-4 border rounded bg-gray-100 shadow-md">
                      <div style={{ height: 400, width: "100%" }}>
                        <DataGrid rows={rows} columns={columns} pageSize={5} onRowDoubleClick={handleRowClick}/>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 row">
                    <Link to="/admin/order/id_order">
                      <button
                        type="button"
                        class="mt-2 col-11 px-6 py-4 btn button-admin"
                      >
                        <i class="fas fa-eye"></i> View Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderInfo;
