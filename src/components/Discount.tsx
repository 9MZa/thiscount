import React, { useState } from "react";
import { DiscountCalculate } from "../lib/cal";
import {
  TextInput,
  Button,
  Space,
  Container,
  Center,
  Paper,
} from "@mantine/core";
import { PageHero } from "./PageHero";

const pageData = {
  title: "SALE",
  description: "คำนวณสินค้าหลังจากลดเป็น % จะเหลือเท่าไหร่",
};

export const DiscountDetail = () => {
  const [total, setTotal] = useState<number>();
  const [discount, setDiscount] = useState<number>();

  const totalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotal(Number(e.target.value));
  };

  const discountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(Number(e.target.value));
  };

  const defaultValue = () => {
    setDiscount(() => 0);
    setTotal(() => 0);
  };

  let result = DiscountCalculate(Number(total), Number(discount));

  return (
    <>
      <PageHero title={pageData.title} description={pageData.description} />
      <Container size={`md`} my={`var(--mantine-spacing-xl)`}>
        <Paper shadow="lg" p="xl">
          <form>
            <TextInput
              required
              onChange={totalChange}
              label="ราคาปกติ"
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
              onChange={discountChange}
              label="ส่วนลด %"
              description="กรอกจำนวนด้วยตัวเลขเท่านั้น"
              size="lg"
              radius="md"
              placeholder="กรอกจำนวนที่ลดเป็น % เช่น หากลด 20% ให้กรอก 20"
              min={0}
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              title="Non-negative integral number"
            />
            <Space mt={30} />
            <TextInput
              readOnly
              value={result.total > 0 ? result.total : 0}
              label="ลดเหลือ"
              description="ผลลัพธ์หลังจากลดแล้ว"
              size={`lg`}
              radius="md"
              min={0}
            />
            <Space h={20} />
            <Center>
              <Button type="reset" size={`md`} onClick={defaultValue}>
                Reset
              </Button>
            </Center>
          </form>
        </Paper>
      </Container>
    </>
  );
};
