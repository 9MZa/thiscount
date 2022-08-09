interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

import { Box } from "@mantine/core";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children, title = "iCal" }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
