import React, { Suspense } from "react";
import List from "../../Components/ListAdmin";
import FormaddPromotion from "../../Components/FormAddPromotion";
const AddPromotion = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className="font-sans">
          <div className="relative mt-8 flex flex-col lg:justify-center items-center">
            <div className="mt-5 relative lg:max-w-screen-2xl w-full">
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                  <i class="fas fa-user-cog"></i> Create Promotion
                </h1>
                <hr></hr>
                <div class="ml-2 mt-4 row text-left">
                  <List />
                  <FormaddPromotion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </React.Fragment>
  );
};
export default AddPromotion;
