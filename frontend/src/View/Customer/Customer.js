import React, { Suspense } from "react";
import Info from "../../Components/Info";

const Customer = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Info />
      </Suspense>
    </React.Fragment>
  );
};
export default Customer;
