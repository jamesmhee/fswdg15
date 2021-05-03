import React, { Suspense } from "react";

import CheckoutFrom from "../../Components/CheckoutForm";

const Checkout = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <CheckoutFrom />
      </Suspense>
    </React.Fragment>
  );
};
export default Checkout;
