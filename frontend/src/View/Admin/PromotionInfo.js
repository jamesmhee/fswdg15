import React from "react";
import List from "../../Components/ListAdmin";
import { Link } from "react-router-dom";
const PromotionInfo = () => {
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div className="relative mt-8 flex flex-col lg:justify-center items-center">
          <div className="mt-5 relative lg:max-w-screen-2xl w-full">
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                <i class="fas fa-user-cog"></i> Admin Dasboard
              </h1>
              <hr></hr>
              <div class="ml-2 mt-4 row text-left">
                <List />
                <div class="mt-1 col-md-8">
                  <div class="h2">
                    <i class="fas fa-ad"></i> Manage Promotion<br></br>
                  </div>
                  <div class="row">
                    <div class="col-11 px-6 py-4 border rounded bg-gray-100 shadow-md">
                      <span class="h3">
                        <i class="fas fa-chart-pie"></i> จำนวนโปรโมชั่นที่มี
                      </span>
                      <hr></hr>
                      <br></br> 10 ชิ้น{" "}
                    </div>
                  </div>
                  <div class="mt-5 row">
                    <Link to="/admin/promotion/create">
                      <button
                        type="button"
                        class="col-11 px-6 py-4 btn button-admin"
                      >
                        <i class="fas fa-plus-circle"></i> Create Promotion
                      </button>
                    </Link>
                    <Link to="/admin/promotion/update">
                      <button
                        data-toggle="modal"
                        data-target="#myModal"
                        type="button"
                        class="mt-2 col-11 px-6 py-4 btn button-admin"
                      >
                        <i class="fas fa-sync-alt"></i> Click for update
                        promotion !!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromotionInfo;
