import "@mantine/core/styles.css";
import "./fonts.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../../theme";
import { Navbar } from "../Navbar";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <MantineProvider theme={theme}>
      <Navbar />
      <main>{children}</main>
    </MantineProvider>
  );
};

export default Layout;
