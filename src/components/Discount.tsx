// import React, { useState } from "react";
// import { DiscountCalculate } from "../lib/cal";
// import { TextInput, Button, Space, Container, Center } from "@mantine/core";
// import PageHero from "./PageHero";

// const pageData = [
//   { title: "SALE", description: "คำนวณสินค้าหลังจากลดเป็น % จะเหลือเท่าไหร่" },
// ];

// const Discount = () => {
//   const [total, setTotal] = useState<number>();
//   const [discount, setDiscount] = useState<number>();

//   const totalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTotal(Number(e.target.value));
//   };

//   const discountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDiscount(Number(e.target.value));
//   };

//   const defaultValue = () => {
//     setDiscount(() => 0);
//     setTotal(() => 0);
//   };

//   let result = DiscountCalculate(Number(total), Number(discount));

//   return (
//     <>
//       <PageHero
//         title={pageData[0].title}
//         description={pageData[0].description}
//       />
//       <Space h="xl" />
//       <Container
//         size="sm"
//         sx={(theme) => ({
//           boxShadow: theme.shadows.md,
//           borderRadius: theme.radius.sm,
//           paddingTop: theme.spacing.lg,
//           paddingBottom: theme.spacing.lg,
//           paddingLeft: theme.spacing.xl,
//           paddingRight: theme.spacing.xl,
//         })}
//       >
//         <form>
//           <TextInput
//             required
//             onChange={totalChange}
//             label="ราคาปกติ"
//             description="กรอกจำนวนด้วยตัวเลขเท่านั้น"
//             size="lg"
//             radius="md"
//             placeholder="กรอกราคาปกติ"
//             min={0}
//             type="number"
//             inputMode="numeric"
//             pattern="[0-9]*"
//             title="Non-negative integral number"
//           />
//           <Space mt={30} />

//           <TextInput
//             required
//             onChange={discountChange}
//             label="ส่วนลด %"
//             description="กรอกจำนวนด้วยตัวเลขเท่านั้น"
//             size="lg"
//             radius="md"
//             placeholder="กรอกจำนวนที่ลดเป็น % เช่น หากลด 20% ให้กรอก 20"
//             min={0}
//             type="number"
//             inputMode="numeric"
//             pattern="[0-9]*"
//             title="Non-negative integral number"
//           />
//           <Space mt={30} />
//           <TextInput
//             readOnly
//             value={result.total > 0 ? result.total : 0}
//             label="ลดเหลือ"
//             description="ผลลัพธ์หลังจากลดแล้ว"
//             size="lg"
//             radius="md"
//             min={0}
//             sx={(theme) => ({
//               ["input"]: {
//                 borderColor:
//                   theme.colorScheme === "light"
//                     ? result.total > 0
//                       ? theme.colors.blue[5]
//                       : theme.colors.gray[2]
//                     : result.total > 0
//                     ? theme.colors.blue[9]
//                     : theme.colors.gray[8],
//                 borderWidth: theme.radius.xs,
//                 ":focus": {
//                   borderWidth: theme.radius.xs,
//                 },
//               },
//             })}
//           />
//           <Space h={20} />
//           <Center>
//             <Button type="reset" onClick={defaultValue}>
//               Reset
//             </Button>
//           </Center>
//         </form>
//       </Container>
//     </>
//   );
// };

// export default Discount;
