import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../Contexts/SessionContext";
const LoginForm = (props) => {
  const { login } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      if (!disabled) {
        setDisabled(true);
        try {
          await login(username, password);
        } catch (err) {
          alert(err?.message);
          setDisabled(false);
        }
      }
    },
    [disabled, login, password, username]
  );
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <form className="text-center" onSubmit={handleLogin}>
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                  Sign In
                </h1>
                <div className="py-2 text-left">
                  <input
                    type="text"
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Username"
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="py-2 text-left">
                  <input
                    type="password"
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="py-2">
                  <button
                    type="submit"
                    className="border-2 border-gray-100 focus:outline-none bg-red-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                  >
                    Login
                  </button>
                  <br></br>
                </div>
              </form>
              <strong>Do you have an account ?</strong>
              <Link
                to="/register"
                type="button"
                className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginForm;
