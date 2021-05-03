import React, { Suspense } from "react";
import DetailProduct from "../../Components/DetailProduct";

const Detail = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <DetailProduct />
      </Suspense>
    </React.Fragment>
  );
};
export default Detail;
