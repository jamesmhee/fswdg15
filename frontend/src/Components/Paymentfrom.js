import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useCallback} from "react";
import { SHOW_CART_QUERY } from "../Graphql/cartListQuery";
import { useSession } from "../Contexts/SessionContext";
import { UPDATE_CART_MUTATION } from "../Graphql/cartMutation";
import { CREATE_ORDER_MUTATION } from "../Graphql/orderMutation";
import { CREATE_PAYMENT_MUTATION } from "../Graphql/paymentMutation";
import { useHistory } from "react-router-dom";
const Paymentfrom = () => {
  const { user } = useSession();
  const { loading, error, data } = useQuery(SHOW_CART_QUERY, {
    variables: {
      username: user?.username,
    },
    fetchPolicy: "network-only",
  });
  const totalPrice = data?.products?.reduce(
    (a, c) => a + c?.price * c?.appearInCart[0].quantity,
    0
  );
  const [values, setValues] = useState({
    nameoncard: "",
    cardnumber: "",
    expdate: "",
    cvcode: "",
    ownerName: user?.username,
    orderOwner: user?.username,
  });
  const onChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const [createPayment] = useMutation(CREATE_PAYMENT_MUTATION, {
    variables: {
      record: {
        nameoncard: values.nameoncard,
        cardnumber: values.cardnumber,
        expdate: values.expdate,
        cvcode: values.cvcode,
        ownerName: values.ownerName,
        orderOwner: values.orderOwner,
      },
    },
  });
  const [createOrder] = useMutation(CREATE_ORDER_MUTATION, {
    variables: {
      record: {
        status: "WAITING",
        ownerName: user?.username,
        totalPrice: totalPrice,
      },
    },
  });
  const [updateProduct] = useMutation(UPDATE_CART_MUTATION);
  const updateOrder = () => {
    data?.products?.reduce((a, c) => {
      return updateProduct({
        variables: {
          id: c._id,
          record: {
            appearInOrder: {
              orderOwner: user?.username,
              quantity: c?.appearInCart[0].quantity,
              mutiprice: c?.price * c?.appearInCart[0].quantity,
            },
            appearInCart: c?.appearInCart.filter(
              (item) => item.cartOwner !== c?.appearInCart[0].cartOwner
            ),
          },
        },
      });
    });
  };
  const history = useHistory();
  const redirect = useCallback(() => {
    history.push("/customer/orders");
  }, [history]);
  const addPaymentandOrder = (event) => {
    event.preventDefault();
    alert("SUCCESS PAYMENT")
    createOrder();
    console.log("Create Order!!");
    updateOrder();
    console.log("Update Order!!");
    createPayment();
    console.log("Create Payment!!");
    redirect()
  };
  if (loading) {
    console.log("loading");
    return "Loading ...";
  }
  if (error) {
    console.log("error");
    return "Error !!";
  }
  console.log(user);
  // console.log(total)
  console.log(data);
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div className="relative mt-8 flex flex-col  items-center">
          <div className="mt-5 relative lg:max-w-screen-2xl w-full">
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
              <h1 className="font-bold tracking-wider text-3xl mb-8 text-gray-800">
                {" "}
                Payment Form
              </h1>
              <div className="row justify-center">
                <div className="col-6 ">
                  <form className="text-center" onSubmit={addPaymentandOrder}>
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="name"
                          name="nameoncard"
                          value={values.nameoncard}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                      <div className="md:w-3/5 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                          Card number
                        </label>
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="0000 0000 0000 0000"
                          name="cardnumber"
                          maxLength="16"
                          value={values.cardnumber}
                          onChange={onChange}
                        />
                      </div>
                      <div className="md:w-1/5 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          EXPIRATION DATE
                        </label>
                        <input
                          type="phone"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="MM/YY"
                          name="expdate"
                          maxLength="5"
                          value={values.expdate}
                          onChange={onChange}
                        />
                      </div>
                      <div className="md:w-1/5 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          CV CODE
                        </label>
                        <input
                          type="phone"
                          className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                          placeholder="CVC"
                          name="cvcode"
                          maxLength="3"
                          value={values.cvcode}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6"></div>

                    <button
                      // to="customer/orders"
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
                      <span class="ml-2 mt-5px">Payment</span>
                    </button>
                  </form>
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
                                <td className="text-left ">
                                  {e?.name} x {e?.appearInCart[0].quantity}
                                </td>
                                <td className="text-right">
                                  $ {e?.price * e?.appearInCart[0].quantity}
                                </td>
                              </tr>
                            );
                          })}
                          <tr>
                            <td className="text-left text-danger">
                              Redeem Code
                            </td>
                            <td className="text-right text-danger">0.00€</td>
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
                      <form>
                        <div className="-mx-3 md:flex mb-">
                          <div className="md:w-1/2 px-2 mb-6 md:mb-1 mt-1">
                            <input
                              type="text"
                              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                              placeholder="Redeem Code"
                            />
                          </div>
                          <div className="md:w-1/2 px-2 mb-6 md:mb-1 ">
                            <button
                              // type="submit"
                              className="flex justify-center w-full px- py-2 mt-1 font-medium text-white uppercase bg-blue-800 rounded-full item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                            >
                              <span class="ml-2 mt-5px">Redeem</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
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
export default Paymentfrom;
