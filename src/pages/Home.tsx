import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "../components/Layout";
import { Title } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <Title>Home Page</Title>
    </Layout>
  </React.StrictMode>
);
