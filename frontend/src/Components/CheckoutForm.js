import { React, useState, useCallback } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { SHOW_CART_QUERY } from '../Graphql/cartListQuery'
import { CREATE_CHECKOUT_MUTATION } from '../Graphql/checkoutMutation'
import { useSession } from "../Contexts/SessionContext";
import { useHistory } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useSession();
  const { loading, error, data } = useQuery(SHOW_CART_QUERY, {
    variables: {
      username: user?.username,
    },
  });

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    county: "",
    city: "",
    state: "",
    address: "",
    zip: "",

  });
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [addCheckout] = useMutation(CREATE_CHECKOUT_MUTATION, {
    update(proxy, result) {
      console.log(result);
    },
    variables: {
      record: {
          ownerName: user?.username,
          firstname: values?.firstname,
          lastname: values?.lastname,
          email: values?.email,
          tel: values?.tel,
          county: values?.county,
          city: values?.city,
          state: values?.state,
          address: values?.address,
          zip: values?.zip,
          
        },
    },
  });
  const history = useHistory();
  const redirect = useCallback(() => {
    history.push("/payment");
  }, [history]);
  const onSubmit = () => {
    addCheckout();
    redirect();
    alert("Go to Payment page!!")
  };

  const totalPrice = data?.products?.reduce(
    (a, c) => a + c?.price * c?.appearInCart[0].quantity,
    0
  );

  if (loading) {
    console.log("loading");
    return "Loading ...";
  }
  if (error) {
    console.log("error");
    return "Error !!";
  }
console.log(data)
  return (
    //form
    <section className="#">
      <form className="text-center" onSubmit={onSubmit}>
      <div className="font-sans">
        <div className="relative mt-8 flex flex-col  items-center">
          <div className="mt-5 relative lg:max-w-screen-2xl w-full">
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
              <h1 className="font-bold tracking-wider text-3xl mb-8 text-gray-800">
                {" "}
                Checkout Form
              </h1>
              <div className="row justify-center">
                <div className="col-6 ">
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="firstname"
                          onChange={onChange}
                          value={values.firstname}
                          name="firstname"
                          
                        />
                      </div>
                      <div className="md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="lastname"
                          onChange={onChange}
                          value={values.lastname}
                          name="lastname"
                        />
                      </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-password"
                        >
                          E-mail
                        </label>
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="email"
                          onChange={onChange}
                          value={values.email}
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="phone"
                          onChange={onChange}
                          value={values.tel}
                          name="tel"
                        />
                      </div>
                      <div className="md:w-1/2 px-3 mb-6 md:mb-0"></div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-password"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="address"
                          onChange={onChange}
                          value={values.address}
                          name="address"
                        />
                      </div>
                    </div>
                    <div className="-mx-3 md:flex mb-">
                      <div className="md:w-1/2 px-2 mb-6 md:mb-1">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-city"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          name="county"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="Thailand"
                          onChange={onChange}
                          value={values.county}
                        />
                      </div>
                      <div className="md:w-1/2 px-1">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-state"
                        >
                          City
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                            placeholder="Bangkok"
                            onChange={onChange}
                            value={values.city}
                          name="city"
                          />

                          <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"></div>
                        </div>
                      </div>
                      <div className="px-10">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-zip"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="XXX"
                          onChange={onChange}
                          value={values.state}
                          name="state"
                        />
                      </div>
                      <div className="px-10">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-zip"
                        >
                          Zip
                        </label>
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="XXXXX"
                          onChange={onChange}
                          value={values.zip}
                          name="zip"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex justify-center w-full px-10 py-2 mt-6 font-medium text-white uppercase bg-blue-800 rounded-full item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                    >
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="credit-card"
                        class="w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                        />
                      </svg>
                      <span class="ml-2 mt-5px">Continue to Checkout</span>
                    </button>
              
                </div>
                <div class="col-4 ">
                  <div class="is-sticky-column">
                    <div
                      class="is-sticky-column__inner"
                      style={{ position: "relative" }}
                    >
                      <table class="table table-borderless">
                        <thead className="h-12 uppercase">
                          <tr class="table-info">
                            <th className="text-left   focus:text-black font-bold mb-">
                              ORder
                            </th>
                            <th className="text-right  focus:text-black font-bold mb-2">
                              Subtotal
                            </th>
                          </tr>
                        </thead>
                      
                        <tbody>
                        {data?.products?.map((e) => {
                         return (
                          <tr>
                            <td className="text-left ">{e?.name} x {e?.appearInCart[0].quantity} </td>
                            <td className="text-right">$ {e?.price * e?.appearInCart[0].quantity}</td>
                          </tr>
                          );
                        })}
                          <tr>
                            <td className="text-left text-danger"></td>
                            <td className="text-right text-danger"></td>
                          </tr>
                          <tr>
                            <td className="text-left font-bold mb-2">
                              <b>Total</b>
                            </td>
                            <td className="text-right font-bold mb-2">
                              $ {totalPrice}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <hr></hr>
                      {/* <form>
                                            <div className="-mx-3 md:flex mb-">
                                                <div className="md:w-1/2 px-2 mb-6 md:mb-1 mt-1">
                                                    <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Redeem Code" />
                                                </div>
                                                <div className="md:w-1/2 px-2 mb-6 md:mb-1 ">
                                                    <button  type="submit" className="flex justify-center w-full px- py-2 mt-1 font-medium text-white uppercase bg-blue-800 rounded-full item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                                                        <span class="ml-2 mt-5px">Redeem</span>
                                                    </button>
                                                </div> 
                                            </div>
                                            </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </section>
  );
};
export default CheckoutForm;
