import { useState } from "react";
import { DiscountCalculate } from "../lib/cal";
import {
  Text,
  Title,
  Space,
  Box,
  Container,
  Grid,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  header: {
    fontSize: 48,
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 32,
    },
  },
  inputWrapper: {
    backgroundColor: theme.colors.gray[0],
  },
  inputBox: {
    backgroundColor: theme.colors.gray[1],
    padding: theme.spacing.xl,
    textAlign: "center",
    border: 0,
    width: "100%",
    fontSize: "48px",
    boxSizing: "border-box",
    color: theme.colors.gray[7],
    ":focus": {
      color: theme.colors.gray[8],
      outlineColor: theme.colors.indigo[5],
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 30,
    },
  },
  inputDetail: {
    fontSize: theme.fontSizes.xl,
    textAlign: "center",
    border: `1px solid ${theme.colors.gray[2]}`,
    padding: theme.spacing.xs,
  },

  resultBox: {
    backgroundColor: theme.colors.green[0],
    fontSize: 54,
    fontWeight: 600,
    color: theme.colors.green[7],
    textAlign: "center",
    padding: theme.spacing.xl,
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 30,
    },
  },
}));

const Discount = () => {
  const [total, setTotal] = useState(2700);
  const [discount, setDiscount] = useState(20);
  const { classes } = useStyles();

  const totalChange = (e: any) => {
    setTotal(e.target.value);
  };

  const discountChange = (e: any) => {
    setDiscount(e.target.value);
  };

  let result = DiscountCalculate(Number(total), Number(discount));

  return (
    <Container
      size="sm"
      sx={{
        position: "relative",
      }}
    >
      <Title align="center" className={classes.header}>
        คำนวณส่วนลดสินค้า
      </Title>
      <Space h="xl" />
      <Grid columns={2} grow gutter="xl">
        <Grid.Col span={1}>
          <Box className={classes.inputWrapper}>
            <Box
              className={classes.inputBox}
              defaultValue={2700}
              component="input"
              onChange={totalChange}
              type="number"
              inputMode="numeric"
              min={0}
              pattern="[0-9]*"
              title="Non-negative integral number"
            />

            <Text className={classes.inputDetail}>ราคาปกติ</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={1}>
          <Box className={classes.inputWrapper}>
            <Box
              className={classes.inputBox}
              defaultValue={20}
              component="input"
              onChange={discountChange}
              type="number"
              inputMode="numeric"
              min={0}
              pattern="[0-9]*"
              title="Non-negative integral number"
            />

            <Text className={classes.inputDetail}>ส่วนลด %</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={2}>
          <Box className={classes.inputWrapper}>
            <Text className={classes.resultBox}>
              {result.sumTotal > 0
                ? `ลดเหลือ ${result.sumTotal.toLocaleString()}`
                : "ถูกงี้ให้ฟรีเหอะ"}
            </Text>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Discount;
