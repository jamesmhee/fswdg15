import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SessionProvider } from "./Contexts/SessionContext";
import possibleTypes from "./Cache/possibleTypes.json";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache({
    possibleTypes,
    typePolicies: {
      Project: {
        fields: {
          members: {
            merge: false,
          },
        },
      },
    },
  }),
  credentials: "include",
});
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter basename="/">
        <ApolloProvider client={client}>
          <SessionProvider>
            <App />
          </SessionProvider>
        </ApolloProvider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
