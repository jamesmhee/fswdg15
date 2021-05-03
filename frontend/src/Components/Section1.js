import React from "react";
const Section1 = () => {
  return (
    <React.Fragment>
      <section>
        <div class="section bg-image flex overflow-hidden h-screen text-gray-800">
          <div class="hero bg-gray-200 text-center grid  border w-2/4 m-auto p-8 bg-opacity-90 rounded-lg">
            <div class="text m-auto text-lg md:ml-5 p-5 md:text-center">
              <div class="head text-3xl mb-3 font-semibold">
                Welcome To E-commerce Website
              </div>
              <div class="desc">
                WebSite E-Commerce or e-commerce website is a business operation
                using electronic media. To achieve the business goals that the
                organization has set, such as trading of goods and services.
                With the aim of reducing costs And increase the efficiency of
                the organization By reducing the role of business elements such
                as location, business building Warehouse Show room Including
                salesperson Staff introducing products Receptionists, customers,
                etc., thus reducing distance and time restrictions.
              </div>
            </div>
          </div>
        </div>
        <div class="heading_section italic bg-gray-200 font-semibold text-3xl text-center p-5 pt-24 text-gray-800">
          Choose what you want from the list.
        </div>
      </section>
    </React.Fragment>
  );
};

export default Section1;
