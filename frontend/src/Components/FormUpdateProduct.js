import React, { useState, useCallback, useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { UPDATE_PRODUCT_MUTATION } from "../Graphql/productMutation";
import { PRODUCT_BYID_QUERY } from "../Graphql/productsQuery";
const FormUpdateProduct = (id_product) => {
  const [loadProduct, { loading, error, data }] = useLazyQuery(
    PRODUCT_BYID_QUERY,
    {
      variables: {
        id: id_product.id_product,
      },
    }
  );
  const [values, setValues] = useState({
    id: data?.productById?._id,
    name: data?.productById?.name,
    monitor: data?.productById?.detail?.monitor,
    cpu: data?.productById?.detail?.cpu,
    gpu: data?.productById?.detail?.gpu,
    ram: data?.productById?.detail?.ram,
    storage: data?.productById?.detail?.storage,
    url: data?.productById?.url,
    price: data?.productById?.price,
  });
  useEffect(() => {
    const loadData = async () => {
      loadProduct();
    };
    loadData();
    if (data?.productById) {
      setValues({
        id: data?.productById?._id,
        name: data?.productById?.name,
        monitor: data?.productById?.detail?.monitor,
        cpu: data?.productById?.detail?.cpu,
        gpu: data?.productById?.detail?.gpu,
        ram: data?.productById?.detail?.ram,
        storage: data?.productById?.detail?.storage,
        url: data?.productById?.url,
        price: data?.productById?.price,
      });
    }
  }, [loadProduct, data]);
  const onChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const [updateProduct] = useMutation(UPDATE_PRODUCT_MUTATION, {
    update(result) {
      console.log(result);
    },
    variables: {
      id: values.id,
      record: {
        name: values.name,
        detail: {
          monitor: values.monitor,
          cpu: values.cpu,
          gpu: values.gpu,
          ram: values.ram,
          storage: values.storage,
        },
        url: values.url,
        price: parseInt(values.price),
      },
    },
  });
  const history = useHistory();
  const redirect = useCallback(() => {
    history.push("/admin/product");
  }, [history]);
  const onSubmit = (event) => {
    event.preventDefault();
    updateProduct();
    redirect();
    alert("Update Product Success");
    window.location.reload();
  };
  if (loading) {
    return loading;
  }
  if (error) {
    return (
      <div class="mt-1 col-md-8">
        <p>Please Fill Product Id after product/update/"...."</p>
      </div>
    );
  }
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
              <i class="fas fa-archive"></i> Product Name
            </label>
            <input
              name="name"
              onChange={onChange}
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder=""
              value={values.name}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-first-name"
            >
              <i class="fas fa-tv"></i> DisplayScreen
            </label>
            <input
              name="monitor"
              onChange={onChange}
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              value={values.monitor}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-last-name"
            >
              <i class="fas fa-microchip"></i> Processor
            </label>
            <input
              name="cpu"
              onChange={onChange}
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder=""
              value={values.cpu}
            />
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-first-name"
            >
              <i class="fas fa-vr-cardboard"></i> Graphics
            </label>
            <input
              name="gpu"
              onChange={onChange}
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder=""
              value={values.gpu}
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-first-name"
            >
              <i class="fas fa-hdd"></i> Storage
            </label>
            <input
              name="storage"
              onChange={onChange}
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder=""
              value={values.storage}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-">
          <div className="md:w-1/2 px-2 mb-6 md:mb-1">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-city"
            >
              <i class="fas fa-memory"></i> Memory
            </label>
            <input
              name="ram"
              onChange={onChange}
              type="text"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder=""
              value={values.ram}
            />
          </div>
          <div className="md:w-1/2 px-1">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-state"
            >
              <i class="fas fa-images"></i> ImageURL
            </label>
            <div className="relative">
              <input
                onChange={onChange}
                className=" bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700  "
                type="text"
                name="url"
                value={values.url}
              />
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"></div>
            </div>
          </div>
          <div className="px-10">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-zip"
            >
              <i class="far fa-money-bill-alt"></i> Price
            </label>
            <input
              name="price"
              type="text"
              onChange={onChange}
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder=""
              value={values.price}
            />
          </div>
        </div>
        <button
          className="flex justify-center w-full px-10 py-2 mt-6 font-medium text-white uppercase bg-blue-800 rounded-full item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none"
          type="submit"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};
export default FormUpdateProduct;
