import React, { Suspense } from "react";
import CartList from "../../Components/CartList";

const Cart = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <CartList />
      </Suspense>
    </React.Fragment>
  );
};
export default Cart;
