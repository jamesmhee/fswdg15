import React, { useState, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT_MUTATION } from "../Graphql/productMutation";
import { useHistory } from "react-router-dom";

const FormUpdatePromotion = () => {
  const [values, setValues] = useState({
    name: "",
    monitor: "",
    cpu: "",
    gpu: "",
    ram: "",
    storage: "",
    url: "",
    price: "",
    amount: "",
  });
  const onChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const [addProduct] = useMutation(CREATE_PRODUCT_MUTATION, {
    update(proxy, result) {
      console.log(result);
    },
    variables: {
      record: {
        name: values.name,
        detail: {
          cpu: values.cpu,
          gpu: values.gpu,
          ram: values.ram,
          storage: values.storage,
        },
        url: values.url,
        price: values.price,
        amount: values.amount,
      },
    },
  });
  const history = useHistory();
  const redirect = useCallback(() => {
    history.push("/admin/promotion");
  }, [history]);
  const onSubmit = (event) => {
    event.preventDefault();
    addProduct();
    redirect();
    alert("Update Promotion Success");
    window.location.reload();
  };

  return (
    //form
    <div class="mt-1 col-md-8">
      <form className="text-center" onSubmit={onSubmit}>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-password"
            >
              <i class="fas fa-ad"></i> Promotion Name
            </label>
            <input
              name="name"
              onChange={onChange}
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder=""
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-password"
            >
              <i class="fas fa-images"></i> Promotion Image URL
            </label>
            <input
              name="image"
              onChange={onChange}
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder=""
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-first-name"
            >
              <i class="fas fa-info-circle"></i> Detail
            </label>
            <textarea
              name="detail"
              onChange={onChange}
              type="text-area"
              rows="9"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder=""
            />
          </div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-zip"
            >
              <i class="fas fa-percentage"></i> Discount
            </label>
            <input
              name="discount"
              type="text"
              onChange={onChange}
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Discount Price"
            />
          </div>
        </div>
        <button
          className="flex justify-center w-full px-10 py-4 mt-6 font-medium text-white uppercase bg-blue-800 rounded-full item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none"
          type="submit"
        >
          Create Promotion
        </button>
      </form>
    </div>
  );
};
export default FormUpdatePromotion;
