import React, { Suspense } from "react";
import OrderList from "../../Components/OrderList";

const Orders = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <OrderList />
      </Suspense>
    </React.Fragment>
  );
};
export default Orders;
