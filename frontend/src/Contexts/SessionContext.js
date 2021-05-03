import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { useCookies } from "react-cookie";
import { useHistory, useLocation } from "react-router";

import { ME_QUERY } from "../Graphql/meQuery";
import { LOGIN_MUTATION } from "../Graphql/loginMutation";

const SessionContext = createContext();

export const SessionProvider = (props) => {
  const { children } = props;
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [, setCookie, removeCookie] = useCookies(["token"]);
  const [loadMe, { loading, data, client }] = useLazyQuery(ME_QUERY, {
    fetchPolicy: "network-only",
  });
  const [login] = useMutation(LOGIN_MUTATION);
  const handleLogin = useCallback(
    async (username, password) => {
      const res = await login({ variables: { username, password } });
      if (res?.data?.login?.token) {
        setCookie("token", res?.data?.login?.token, { maxAge: 86400 });
        setUser(res?.data?.login?.user);
        history.push("/customer");
        if (res?.data?.login?.user?.role === "Customer") {
          alert("Welcome Customer!!!");
          console.log(history);
          history.push("/");
        } else {
          alert("Welcome Admin!!!");
          console.log(history);
          history.push("/admin");
        }
      } else {
        throw new Error(res?.errors?.[0]?.message);
      }
    },
    [history, login, setCookie]
  );
  const handleLogout = useCallback(async () => {
    removeCookie("token", { maxAge: 86400 });
    await client.clearStore();
    await loadMe();
    setUser(null);
    history.push("");
  }, [client, loadMe, removeCookie, history]);
  useEffect(() => {
    if (data?.me) {
      setUser(data?.me);
      if (location.state) {
        history.replace(location.state.from);
      }
    }
  }, [data, history, location]);
  useEffect(() => {
    const loadData = async () => {
      try {
        await loadMe();
      } catch (err) {
        handleLogout();
      }
    };
    loadData();
  }, [handleLogout, loadMe, removeCookie]);
  return (
    <SessionContext.Provider
      value={{
        loading,
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

export default SessionContext;
