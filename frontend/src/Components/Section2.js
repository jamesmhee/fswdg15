import React from "react";
import { Link } from "react-router-dom";
const Section2 = () => {
  return (
    <React.Fragment>
      <section>
        <div class="section py-28 w-full scree border grid md:grid-cols-2 bg-gray-200 text-gray-800">
          <div class="subsec flex-none overflow-hidden max-h-96">
            <img
              class="w-full"
              src="https://www.paldesk.com/wp-content/uploads/2020/05/6-Way-to-sneak-in-sales-promotion-messages-into-live-chat-customer-service-in-ecommerce-1.png"
              alt=""
            />
          </div>
          <div class="subsec my-auto p-8">
            <div class="title font-semibold text-3xl mb-5">
              Promotion is Coming Soon!!!!!!
            </div>
            <Link
              to="/promotion"
              className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider  p-2 rounded-lg focus:border-gray-700 hover:bg-blue-700"
            >
              All Promotion
            </Link>
            {/* <div class="desc text-lg">We've seen it all kinds of ways, with different types of flours, but we settled on almond flour for its nutty flavor. We also mix in spices—Italian seasoning and garlic powder—to give it more flavor. We skip yeast because it can be a pain and instead incorporate eggs and olive oil. The eggs help make the crust fluffy.</div> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Section2;
