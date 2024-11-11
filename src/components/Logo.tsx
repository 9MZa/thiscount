import { Box } from "@mantine/core";
import { TablerCategory2Icon } from "./TablerCategory2";

export const Logo = () => {
  return (
    <>
      <Box
        component="a"
        href="/"
        color="blue"
        style={{
          cursor: "pointer",
          backgroundColor: "var(--mantine-color-blue-6)",
          height: "40px",
          width: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <TablerCategory2Icon
          width={26}
          height={26}
          color="var(--mantine-color-white)"
        />
      </Box>
    </>
  );
};
