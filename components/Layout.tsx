type LayoutProps = {
  children: React.ReactNode;
};

import { Container } from "@mantine/core";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
