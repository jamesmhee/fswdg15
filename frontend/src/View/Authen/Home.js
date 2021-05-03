import React, { Suspense } from "react";
import CardHome from "../../Components/CardProductHome";
import Section1 from "../../Components/Section1";
import Section2 from "../../Components/Section2";
const Home = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Section1 />
        <CardHome />
        <Section2 />
      </Suspense>
    </React.Fragment>
  );
};
export default Home;
