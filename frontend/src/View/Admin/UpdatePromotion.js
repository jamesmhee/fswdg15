import React, { Suspense } from "react";
import FormUpdatePromotion from "../../Components/FormUpdatePromotion";
import List from "../../Components/ListAdmin";
import { useParams } from "react-router-dom";
const UpdatePromotion = () => {
  const { id_promotion } = useParams();
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className="font-sans">
          <div className="relative mt-8 flex flex-col lg:justify-center items-center">
            <div className="mt-5 relative lg:max-w-screen-2xl w-full">
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                  <i class="fas fa-user-cog"></i> Update Promotion
                </h1>
                <hr></hr>

                <div class="ml-2 mt-4 row text-left">
                  <List />
                  <FormUpdatePromotion id_promotion={id_promotion} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </React.Fragment>
  );
};
export default UpdatePromotion;
