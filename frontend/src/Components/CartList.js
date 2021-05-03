import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { SHOW_CART_QUERY } from "../Graphql/cartListQuery";
import { useSession } from "../Contexts/SessionContext";
import { UPDATE_CART_MUTATION } from "../Graphql/cartMutation";
const CartList = () => {
  const { user } = useSession();
  const { loading, error, data } = useQuery(SHOW_CART_QUERY, {
    variables: {
      username: user?.username,
    },
    fetchPolicy: "network-only",
  });
  const [manageQuantity] = useMutation(UPDATE_CART_MUTATION);
  const totalPrice = data?.products?.reduce(
    (a, c) => a + c?.price * c?.appearInCart[0].quantity,
    0
  );
  // const [total, setTotal] = useState(0);
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
        <div className="relative mt-8 flex flex-col lg:justify-center items-center">
          <div className="mt-5 relative lg:max-w-screen-2xl w-full">
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                <i class="fas fa-shopping-cart"></i> Cart
              </h1>
              <table class="w-full text-sm lg:text-base" cellspacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="text-left">Product</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="hidden lg:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">
                      Unit price
                    </th>
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>
                {data?.products?.map((e) => {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          <Link to={`/product/detail/${e?._id}`}>
                            <p className=" text-left ">{e?.name}</p>
                          </Link>
                          <p
                            className="text-left text-danger"
                            onClick={() => {
                              manageQuantity({
                                variables: {
                                  id: e?._id,
                                  record: {
                                    appearInCart: e?.appearInCart.filter(
                                      (item) =>
                                        item.cartOwner !==
                                        e?.appearInCart[0].cartOwner
                                    ),
                                  },
                                },
                              });
                            }}
                          >
                            <small>(Remove item)</small>
                          </p>
                        </td>
                        <td className="justify-center md:justify-end md:flex mt-6">
                          <div className="w-20 h-10">
                            <div className="relative flex flex-row w-full h-8">
                              {/* <input
                            type="number"
                            min="1"
                            max="99"
                            onClick="{handleClickcount}"
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                          /> */}
                              <button
                                onClick={() => {
                                  if (e?.appearInCart[0]?.quantity - 1 <= 0) {
                                    manageQuantity({
                                      variables: {
                                        id: e?._id,
                                        record: {
                                          appearInCart: e?.appearInCart.filter(
                                            (item) =>
                                              item.cartOwner !==
                                              e?.appearInCart[0].cartOwner
                                          ),
                                        },
                                      },
                                    });
                                  } else {
                                    manageQuantity({
                                      variables: {
                                        id: e?._id,
                                        record: {
                                          appearInCart: {
                                            cartOwner:
                                              e?.appearInCart[0].cartOwner,
                                            quantity:
                                              e?.appearInCart[0].quantity - 1,
                                          },
                                        },
                                      },
                                    });
                                  }
                                }}
                                className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                              >
                                -
                              </button>
                              <label className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black">
                                {e?.appearInCart[0].quantity}
                              </label>

                              <button
                                onClick={() => {
                                  manageQuantity({
                                    variables: {
                                      id: e?._id,
                                      record: {
                                        appearInCart: {
                                          cartOwner:
                                            e?.appearInCart[0].cartOwner,
                                          quantity:
                                            e?.appearInCart[0].quantity + 1,
                                        },
                                      },
                                    },
                                  });
                                }}
                                className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="hidden text-right md:table-cell">
                          <span className="text-sm lg:text-base font-medium">
                            $ {e?.price}
                          </span>
                        </td>
                        <td className="text-right">
                          <span className="text-sm lg:text-base font-medium">
                            {e?.price * e?.appearInCart[0].quantity}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>

              <br></br>
              <hr></hr>
              <div className="row">
                <div className="col-10 text-right  uppercase">
                  <b>Total</b>
                </div>
                <div className="col-2 text-right">
                  <b>$ {totalPrice}</b>
                </div>
              </div>
              <div className="flex justify-content-end">
                <Link to="/checkout">
                  <button className="flex justify-center  px-6 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-500 focus:shadow-outline focus:outline-none">
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      className="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                    <span className="ml-2 mt-5px">Go to checkout</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartList;
