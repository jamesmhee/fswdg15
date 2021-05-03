import React, { Suspense } from "react";
import { useQuery } from "@apollo/client";
import List from "../../Components/ListAdmin";
import OrderDetail from "../../Components/OrderDetail";
import { ORDERS_QUERY_BY_ID } from "../../Graphql/ordeqruertById";
import { useParams } from "react-router";

const DetailOrder = () => {
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

console.log(data, id_order)
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className="font-sans">
          <div className="relative mt-8 flex flex-col lg:justify-center items-center">
            <div className="mt-5 relative lg:max-w-screen-2xl w-full">
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                  <i class="fas fa-user-cog"></i> Detail Order
                </h1>
                <hr></hr>
                <div class="ml-2 mt-4 row text-left">
                  <List />
                  <div class="mt-1 col-md-8">
                    <OrderDetail />
                  </div>                
                </div>                  
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </React.Fragment>
  );
};
export default DetailOrder;
