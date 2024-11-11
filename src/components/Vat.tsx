import React, { useState } from "react";
import {
  Space,
  Button,
  Tabs,
  Paper,
  TextInput,
  Container,
  Center,
  Text,
  Stack,
  Grid,
} from "@mantine/core";

import { IncVatCalculate, ExcVatCalculate } from "../lib/cal";
import { PageHero } from "./PageHero";

export const VATDescription = () => {
  return (
    <Paper
      my={20}
      style={{
        fontFamily: "Noto Sans Thai, sans-serif",
      }}
    >
      <Stack>
        <Text
          component="li"
          style={{
            fontSize: "var(--mantine-font-size-lg)",
          }}
        >
          <b>VAT นอก</b>&nbsp;หรือ&nbsp;
          <b>VAT คำนวณแยกกับราคาสินค้า (Excluding VAT)</b>
          &nbsp;คือ ราคาสินค้าที่แสดงไว้ยังไม่รวมภาษีมูลค่าเพิ่ม
        </Text>
        <Text
          component="li"
          style={{
            fontSize: "var(--mantine-font-size-lg)",
          }}
        >
          <b>VAT ใน</b>&nbsp;หรือ
          <b>&nbsp;VAT คำนวณรวมกับราคาสินค้า&nbsp;(Including VAT)&nbsp;</b>
          คือ ราคาสินค้าที่แสดงไว้ได้บวกภาษีมูลค่าเพิ่มไว้แล้ว
          ไม่ต้องจ่ายเพิ่มจากป้าย
        </Text>
      </Stack>
    </Paper>
  );
};

const pageData = { title: "VAT", description: "คำนวณภาษีมูลค่าเพิ่ม" };
export const VATDetail = () => {
  const [incValue, setIncValue] = useState<number>(0);
  const [excValue, setExcValue] = useState<number>(0);
  const vat: number = 7;

  function handleInc(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    setIncValue(Number(e.target.value));
  }

  function handleExc(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    setExcValue(Number(e.target.value));
  }

  function resetValues() {
    setExcValue(0);
    setIncValue(0);
  }

  return (
    <>
      <PageHero title={pageData.title} description={pageData.description} />
      <Space mt={30} />
      <Container mt={30} size="md">
        <VATDescription />
        <Paper shadow="lg" p="xl">
          <Tabs defaultValue="exclude">
            <Tabs.List grow>
              <Tabs.Tab value="exclude">VAT นอก</Tabs.Tab>
              <Tabs.Tab value="include">VAT ใน</Tabs.Tab>
            </Tabs.List>

            {/* exclude VAT */}
            <Tabs.Panel value="exclude" pt="xs">
              <form>
                <TextInput
                  required
                  onChange={handleExc}
                  label="Excluding VAT"
                  description="กรอกจำนวนด้วยตัวเลขเท่านั้น"
                  size="lg"
                  radius="md"
                  placeholder="กรอกจำนวน"
                  min={0}
                  type="number"
                />
                <Space mt={30} />
                <Grid grow>
                  <Grid.Col>
                    <TextInput
                      readOnly
                      defaultValue={vat}
                      label="VAT 7%"
                      description="จำนวน VAT (ไม่สามารถแก้ไขจำนวนได้)"
                      size="lg"
                      radius="md"
                      type="number"
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput
                      readOnly
                      value={(ExcVatCalculate(excValue) - excValue).toFixed(2)}
                      label="ส่วนต่าง"
                      description="ส่วนต่างหลังจากที่คำนวณ VAT"
                      size="lg"
                      radius="md"
                      type="number"
                    />
                  </Grid.Col>
                </Grid>
                <Space mt={10} />
                <Space mt={30} />
                <TextInput
                  readOnly
                  label="รวม VAT"
                  description="ผลลัพธ์หลังรวม VAT (ไม่สามารถแก้ไขจำนวนได้)"
                  size="lg"
                  radius="md"
                  value={ExcVatCalculate(excValue)}
                />
                <Center>
                  <Space my={40} />
                  <Button size="md" type="reset" onClick={resetValues}>
                    Reset
                  </Button>
                </Center>
              </form>
            </Tabs.Panel>

            {/* include VAT */}
            <Tabs.Panel value="include" pt="xs">
              <form>
                <TextInput
                  required
                  onChange={handleInc}
                  label="Including VAT"
                  description="กรอกจำนวนด้วยตัวเลขเท่านั้น"
                  size="lg"
                  radius="md"
                  placeholder="กรอกจำนวนรวม VAT"
                  min={0}
                  type="number"
                />
                <Space mt={30} />
                <Grid grow>
                  <Grid.Col>
                    <TextInput
                      readOnly
                      defaultValue={7}
                      label="VAT 7%"
                      description="จำนวน VAT (ไม่สามารถแก้ไขจำนวนได้)"
                      size="lg"
                      radius="md"
                      type="number"
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput
                      readOnly
                      value={(incValue - IncVatCalculate(incValue)).toFixed(2)}
                      label="ส่วนต่าง"
                      description="ส่วนต่างหลังจากที่คำนวณ VAT"
                      size="lg"
                      radius="md"
                      type="number"
                    />
                  </Grid.Col>
                </Grid>
                <Space mt={30} />
                <TextInput
                  readOnly
                  label="ก่อน VAT"
                  description="ผลลัพธ์ก่อนรวม VAT (ไม่สามารถแก้ไขจำนวนได้)"
                  size="lg"
                  radius="md"
                  value={IncVatCalculate(incValue)}
                />
                <Center>
                  <Space my={40} />
                  <Button size="md" type="reset" onClick={resetValues}>
                    Reset
                  </Button>
                </Center>
              </form>
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </Container>
    </>
  );
};
