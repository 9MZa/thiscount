import Layout from "@/components/Layout";
import { Paper, Text, Title } from "@mantine/core";

export default function DiscountPage() {
  return (
    <Layout>
      <Paper shadow="sm" p="xl">
        <Title>DiscountPage</Title>
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that
          require background with shadow
        </Text>
      </Paper>
    </Layout>
  );
}
