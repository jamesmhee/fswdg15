import React, { useState } from "react";
import { REGISTER_MUTATION } from "../../Graphql/registerMutation";
import { useMutation } from "@apollo/client";
import Alert from "@material-ui/lab/Alert";
const Register = (props) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    role: "Customer",
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [addUser] = useMutation(REGISTER_MUTATION, {
    update(proxy, result) {
      console.log(result);
      alert("สมัครสมาชิกเรียบร้อย!!!!!!!!!!");
      props.history.push("/login");
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.message);
      setErrors(err.graphQLErrors[0].extensions.exception.message);
    },
    variables: {
      record: {
        role: values.role,
        username: values.username,
        fullname: values.fullname,
        password: values.password,
        email: values.email,
      },
    },
  });
  const onSubmit = (event) => {
    event.preventDefault();
    addUser();
  };
  return (
    // For Register
    <section className="#">
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <form className="text-center" onSubmit={onSubmit}>
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                  Register
                </h1>
                <div className="py-2 text-left">
                  Username
                  <input
                    type="name"
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Ex:adam1234"
                    value={values.username}
                    onChange={onChange}
                    name="username"
                  />
                </div>
                <div className="py-2 text-left">
                  Fullname
                  <input
                    type="name"
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Ex:Adam Levi"
                    value={values.fullname}
                    onChange={onChange}
                    name="fullname"
                  />
                </div>
                <div className="py-2 text-left">
                  Email
                  <input
                    type="email"
                    value={values.email}
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Ex:adamli@mail.com"
                    onChange={onChange}
                    name="email"
                  />
                </div>
                <div className="py-2 text-left">
                  Password
                  <input
                    type="password"
                    value={values.password}
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Password"
                    onChange={onChange}
                    name="password"
                  />
                </div>
                <div className="py-2 text-left">
                  Confirm Password
                  <input
                    type="password"
                    value={values.confirmpassword}
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Confirm Password Again"
                    onChange={onChange}
                    name="confirmpassword"
                  />
                </div>
                <div className="py-2">
                  <button
                    type="submit"
                    className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                  >
                    Sign Up
                  </button>
                </div>
                {Object.keys(errors).length > 0 && (
                  <Alert severity="error">{errors}</Alert>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
