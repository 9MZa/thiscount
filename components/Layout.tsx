import { Box } from "@mantine/core";
import Navbar from "./Navbar";
import { NextSeo } from "next-seo";
import img from "../public/images.jpeg";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = "iCalc" }: LayoutProps): JSX.Element => {
  return (
    <>
      <NextSeo
        title={title}
        description="คิด % และ VAT ง่ายๆ ผ่านเว็บไซต์"
        openGraph={{
          url: "https://icalc.vercel.app/",
          title: title,
          description: "คิด % และ VAT ง่ายๆ ผ่านเว็บไซต์",
          locale: "th-TH",
          images: [
            {
              url: img.src,
              width: 800,
              height: 600,
              alt: "Calculator",
              type: "image/jpeg",
            },
          ],
          site_name: "SiteName",
        }}
      />
      <Navbar />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
