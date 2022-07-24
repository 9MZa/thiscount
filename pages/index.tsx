import { useState } from "react";
import DiscountCalculate from "../components/Discount";

import {
  Input,
  InputWrapper,
  NumberInput,
  Container,
  Title,
  Space,
  Text,
} from "@mantine/core";

const Home = () => {
  const [total, setTotal] = useState();
  const [discount, setDiscount] = useState();

  const totalChange = (e: any) => {
    setTotal(e.target.value);
  };

  const discountChange = (e: any) => {
    setDiscount(e.target.value);
  };

  let result = DiscountCalculate(Number(total), Number(discount));

  return (
    <Container size="sm" mt={40}>
      <Title align="center">ลดเท่าไหร่กันนะ</Title>
      <Space />
      <InputWrapper label="ราคาปกติ" mt={30}>
        <Input
          size="md"
          onChange={totalChange}
          type="number"
          inputMode="numeric"
          min={0}
          pattern="[0-9]*"
          title="Non-negative integral number"
          placeholder="2000"
        />
      </InputWrapper>
      <InputWrapper label="ส่วนลด %" defaultValue={20} mt={30}>
        <Input
          size="md"
          onChange={discountChange}
          type="number"
          inputMode="numeric"
          min={0}
          pattern="[0-9]*"
          title="Non-negative integral number"
          placeholder="20%"
        />
      </InputWrapper>
      <Space py={20} />
      <Title order={2} align="center">
        {total && discount !== undefined ? (
          <Title
            order={2}
            sx={(theme) => ({
              color: theme.colors.green[6],
            })}
          >
            {result.sumTotal > 0
              ? `ลดเหลือ ${result.sumTotal.toLocaleString()}`
              : "ของถูกงี้ให้ฟรีเหอะ"}
          </Title>
        ) : (
          ""
        )}
      </Title>
    </Container>
  );
};

export default Home;
