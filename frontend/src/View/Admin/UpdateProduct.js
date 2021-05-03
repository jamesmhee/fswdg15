import React, { Suspense } from "react";
import FormUpdateProduct from "../../Components/FormUpdateProduct";
import List from "../../Components/ListAdmin";
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
  const { id_product } = useParams();
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className="font-sans">
          <div className="relative mt-8 flex flex-col lg:justify-center items-center">
            <div className="mt-5 relative lg:max-w-screen-2xl w-full">
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                  <i class="fas fa-user-cog"></i> Update Product
                </h1>
                <hr></hr>

                <div class="ml-2 mt-4 row text-left">
                  <List />
                  <FormUpdateProduct id_product={id_product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </React.Fragment>
  );
};
export default UpdateProduct;
