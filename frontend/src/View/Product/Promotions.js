import React, { Suspense } from "react";
import CardPromotion from "../../Components/CardPromotion";

const Promotions = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <CardPromotion />
      </Suspense>
    </React.Fragment>
  );
};
export default Promotions;
