import { Box, Title } from "@mantine/core";

export const PageHero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): JSX.Element => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 0",
        backgroundColor: "var(--mantine-color-blue-5)",
        color: "var(--mantine-color-white)",
      }}
    >
      <Title order={1}>{title}</Title>
      <Title order={3} style={{ fontWeight: 400 }}>{description}</Title>
    </Box>
  );
};
