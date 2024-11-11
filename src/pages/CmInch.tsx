import React from "react";
import Layout from "../components/Layout";
import ReactDOM from "react-dom/client";
import { Paper, Text, Title } from "@mantine/core";
import { CMInchesDetail } from "../components/CMInches";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
     <CMInchesDetail />
    </Layout>
  </React.StrictMode>
);
