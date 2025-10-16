import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: "bearer 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",
    },
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App apolloClient={apolloClient} />
  </StrictMode>
);
