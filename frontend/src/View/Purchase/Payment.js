import React, { Suspense } from "react";

import Paymentfrom from "../../Components/Paymentfrom";

const Checkout = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Paymentfrom />
      </Suspense>
    </React.Fragment>
  );
};
export default Checkout;
