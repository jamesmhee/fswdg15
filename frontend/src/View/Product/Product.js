import React, { Suspense } from "react";
import Card from "../../Components/CardProducts";

const Product = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Card />
      </Suspense>
    </React.Fragment>
  );
};
export default Product;
