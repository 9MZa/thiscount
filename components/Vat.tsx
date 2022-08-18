import React, { useState } from "react";
import {
  Space,
  Button,
  Checkbox,
  Tabs,
  Paper,
  TextInput,
  Container,
  Group,
  Center,
  Text,
  Stack,
} from "@mantine/core";
import { CurrencyBaht } from "tabler-icons-react";
import PageHero from "../components/PageHero";
import { IncVatCalculate, ExcVatCalculate } from "../lib/cal";

const VATDetail = () => {
  return (
    <Container size="sm">
      <Paper>
        <Stack
          sx={(theme) => ({
            color:
              theme.colorScheme === "light"
                ? theme.colors.gray[7]
                : theme.colors.gray[6],
          })}
        >
          <Text component="li">
            <b>VAT นอก</b>&nbsp;หรือ&nbsp;
            <b>VAT คำนวณแยกกับราคาสินค้า (Excluding VAT)</b>
            &nbsp;คือ ราคาสินค้าที่แสดงไว้ยังไม่รวมภาษีมูลค่าเพิ่ม
          </Text>
          <Text component="li">
            <b>VAT ใน</b>&nbsp;หรือ
            <b>&nbsp;VAT คำนวณรวมกับราคาสินค้า&nbsp;(Including vat)&nbsp;</b>
            คือ ราคาสินค้าที่แสดงไว้ได้บวกภาษีมูลค่าเพิ่มไว้แล้ว
            ไม่ต้องจ่ายเพิ่มจากป้าย
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
};

const pageData = [{ title: "VAT", description: "คำนวณภาษีมูลค่าเพิ่ม" }];

const Vat = () => {
  const [incValue, setIncValue] = useState<number>(0);
  const [excValue, setExcValue] = useState<number>(0);
  const [chkBox, setChkBox] = useState<boolean>(false);
  const [vat, setVat] = useState<number>(7);

  function handleInc(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    setIncValue(Number(e.target.value));
  }

  function handleExc(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    setExcValue(Number(e.target.value));
  }

  function handleVat(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    setVat(Number(e.target.value));
  }

  return (
    <>
      <PageHero
        title={pageData[0].title}
        description={pageData[0].description}
      />
      <Space mt={30} />
      <VATDetail />
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
        <Tabs defaultValue="exclude" color="primary">
          <Tabs.List grow>
            <Tabs.Tab value="exclude" icon={<CurrencyBaht size={14} />}>
              VAT นอก
            </Tabs.Tab>
            <Tabs.Tab value="include" icon={<CurrencyBaht size={14} />}>
              VAT ใน
            </Tabs.Tab>
          </Tabs.List>

          {/* exclude VAT */}
          <Tabs.Panel value="exclude" pt="xs">
            <Paper>
              <TextInput
                required
                onChange={handleExc}
                label="exclude"
                description="กรอกจำนวนด้วยตัวเลขเท่านั้น"
                size="lg"
                radius="md"
                placeholder="กรอกจำนวน"
                min={0}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                title="Non-negative integral number"
              />
              <Space mt={30} />
              <Group grow>
                <TextInput
                  readOnly={!chkBox}
                  defaultValue={vat}
                  onChange={handleVat}
                  label="VAT 7%"
                  description="จำนวน VAT (ไม่สามารถแก้ไขจำนวนได้)"
                  size="lg"
                  radius="md"
                  type="number"
                />
                <TextInput
                  readOnly
                  value={(ExcVatCalculate(excValue) - excValue).toFixed(2)}
                  label="ส่วนต่าง"
                  description="ส่วนต่างหลังจากที่คำนวณ VAT"
                  size="lg"
                  radius="md"
                  type="number"
                />
              </Group>
              <Space mt={10} />
              {/* <Checkbox
                checked={chkBox}
                disabled
                onChange={(event) => setChkBox(event.currentTarget.checked)}
                label="แก้ไข % VAT"
              /> */}
              <Space mt={30} />
              <TextInput
                readOnly
                label="รวม VAT"
                description="ผลลัพธ์หลังรวม VAT (ไม่สามารถแก้ไขจำนวนได้)"
                size="lg"
                radius="md"
                value={ExcVatCalculate(excValue)}
              />
            </Paper>
          </Tabs.Panel>

          {/* include VAT */}
          <Tabs.Panel value="include" pt="xs">
            <Paper>
              <TextInput
                required
                onChange={handleInc}
                label="รวม VAT"
                description="กรอกจำนวนด้วยตัวเลขเท่านั้น"
                size="lg"
                radius="md"
                placeholder="กรอกจำนวนรวม VAT"
                min={0}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                title="Non-negative integral number"
              />
              <Space mt={30} />
              <Group grow>
                <TextInput
                  readOnly
                  defaultValue={7}
                  label="VAT 7%"
                  description="จำนวน VAT (ไม่สามารถแก้ไขจำนวนได้)"
                  size="lg"
                  radius="md"
                  type="number"
                />
                <TextInput
                  readOnly
                  value={(incValue - IncVatCalculate(incValue)).toFixed(2)}
                  label="ส่วนต่าง"
                  description="ส่วนต่างหลังจากที่คำนวณ VAT"
                  size="lg"
                  radius="md"
                  type="number"
                />
              </Group>
              <Space mt={30} />
              <TextInput
                readOnly
                label="ก่อน VAT"
                description="ผลลัพธ์ก่อนรวม VAT (ไม่สามารถแก้ไขจำนวนได้)"
                size="lg"
                radius="md"
                value={IncVatCalculate(incValue)}
              />
            </Paper>
          </Tabs.Panel>
          <Center>
            <Space my={40} />
            <Button onClick={() => window.location.reload()}>Reset</Button>
          </Center>
        </Tabs>
      </Container>
    </>
  );
};

export default Vat;
