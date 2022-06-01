import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import * as prismic from "@prismicio/client";
import { PrismicProvider } from "@prismicio/react";

const endpoint = prismic.getEndpoint("szabad");

export const client = prismic.createClient(endpoint, {
  routes: [],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
);
