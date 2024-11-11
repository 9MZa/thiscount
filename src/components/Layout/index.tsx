// import { Box } from "@mantine/core";
// import Navbar from "./Navbar";
// import { NextSeo } from "next-seo";
// import img from "../public/images.jpeg";

// interface LayoutProps {
//   children: React.ReactNode;
//   title?: string;
// }

// const Layout = ({ children, title = "iCalc" }: LayoutProps): JSX.Element => {
//   return (
//     <>
//       <NextSeo
//         title={title}
//         description="คิด % และ VAT ง่ายๆ ผ่านเว็บไซต์"
//         openGraph={{
//           url: "https://icalc.vercel.app/",
//           title: title,
//           description: "คิด % และ VAT ง่ายๆ ผ่านเว็บไซต์",
//           locale: "th-TH",
//           images: [
//             {
//               url: img.src,
//               width: 800,
//               height: 600,
//               alt: "Calculator",
//               type: "image/jpeg",
//             },
//           ],
//           site_name: "SiteName",
//         }}
//       />
//       <Navbar />
//       <Box>{children}</Box>
//     </>
//   );
// };

// export default Layout;
import "@mantine/core/styles.css";
import {
  AppShell,
  Burger,
  Button,
  Group,
  MantineProvider,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./index.module.css";
import { NavLink } from "react-router-dom";
import { theme } from "@/theme";
import { router } from "@/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Group justify="space-between" style={{ flex: 1 }}>
              {/* <MantineLogo size={30} /> */}
              <NavLink to="/" className={classes.logo}>
                <Title order={1}>iCalc</Title>
              </NavLink>
              <Group ml="xl" gap={0} visibleFrom="sm">
                <NavLink to="/discount" className={classes.nav}>
                  <UnstyledButton >
                    ส่วนลดสินค้า
                  </UnstyledButton>
                </NavLink>

                <NavLink to="/vat" className={classes.nav}>
                  <UnstyledButton >
                    ภาษีมูลค่าเพิ่ม (VAT)
                  </UnstyledButton>
                </NavLink>
                <NavLink to="/cm-inch" className={classes.nav}>
                  <UnstyledButton >
                    แปลงหน่วย
                  </UnstyledButton>
                </NavLink>
              </Group>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
          <UnstyledButton className={classes.control}>
            <NavLink to="/">Home</NavLink>
          </UnstyledButton>
          <UnstyledButton className={classes.control}>
            <NavLink to="/about">About</NavLink>
          </UnstyledButton>
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
