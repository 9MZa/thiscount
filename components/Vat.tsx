import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import {
  Space,
  Text,
  Tabs,
  Paper,
  TextInput,
  createStyles,
  Container,
} from "@mantine/core";
import { CurrencyBaht } from "tabler-icons-react";
import PageHero from "../components/PageHero";
import { VatCalculate } from "../lib/cal";

const useStyles = createStyles((theme, _params) => ({
  inputBox: {
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.lg,
  },
  result: {
    backgroundColor: theme.colors.blue[0],
    border: "1px solid",
    borderColor: theme.colors.blue[1],
    fontSize: 50,
    borderRadius: theme.radius.sm,
    color: theme.colors.blue[6],
    textAlign: "center",
    fontWeight: 500,
  },
}));

const pageData = [{ title: "VAT", description: "คำนวณภาษีมูลค่าเพิ่ม" }];

const Vat = () => {
  // const { classes } = useStyles();
  const [incValue, setIncValue] = useState<number>(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    setIncValue(Number(e.target.value));
  }

  return (
    <Layout>
      <PageHero
        title={pageData[0].title}
        description={pageData[0].description}
      />
      <Container
        mt={30}
        size="sm"
        sx={(theme) => ({
          boxShadow: theme.shadows.md,
          borderRadius: theme.radius.sm,
          paddingTop: theme.spacing.lg,
          paddingBottom: theme.spacing.lg,
          paddingLeft: theme.spacing.xl,
          paddingRight: theme.spacing.xl,
        })}
      >
        <Tabs defaultValue="include" color="primary">
          <Tabs.List grow>
            <Tabs.Tab value="include" icon={<CurrencyBaht size={14} />}>
              รวม VAT
            </Tabs.Tab>
            <Tabs.Tab value="exclude" icon={<CurrencyBaht size={14} />}>
              ถอด VAT
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="include" pt="xs">
            <Paper>
              <TextInput
                required
                onChange={handleChange}
                label="ก่อน VAT"
                description="กรอกจำนวนด้วยตัวเลขเท่านั้น"
                size="lg"
                radius="md"
                placeholder="กรอกราคาปกติ"
                min={0}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                title="Non-negative integral number"
              />
              <Space mt={30} />
              <TextInput
                required
                readOnly
                defaultValue={7}
                label="VAT 7%"
                description="จำนวน VAT (ไม่สามารถแก้ไขจำนวนได้)"
                size="lg"
                radius="md"
                placeholder="กรอกราคาปกติ"
                type="number"
              />
              <Space mt={30} />
              <TextInput
                readOnly
                label="รวม VAT"
                description="ผลลัพธ์หลังรวม VAT (ไม่สามารถแก้ไขจำนวนได้)"
                size="lg"
                radius="md"
                value={VatCalculate(incValue)}
                placeholder="กรอกราคาปกติ"
              />
            </Paper>
          </Tabs.Panel>

          <Tabs.Panel value="exclude" pt="xs">
            <Paper>
              <Text>ยังทำไม่เสร็จนะ</Text>
            </Paper>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default Vat;
