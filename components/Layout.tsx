type LayoutProps = {
  children: React.ReactNode;
};

import { Box, Container } from "@mantine/core";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
