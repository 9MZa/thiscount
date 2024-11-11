// import React, { useState } from "react";
// import { Container, Input, Space, Paper, Tabs } from "@mantine/core";
// import PageHero from "./PageHero";
// import { CentimetersToInches, InchesToCentimeters } from "../lib/cal";

// const CMInches = () => {
//   const [centimeters, setCentimeters] = useState<number>();
//   const [inches, setInches] = useState<number>();

//   function handleCM(e: React.ChangeEvent<HTMLInputElement>) {
//     e.preventDefault;
//     setCentimeters(Number(e.target.value));
//   }

//   function handleInches(e: React.ChangeEvent<HTMLInputElement>) {
//     e.preventDefault;
//     setInches(Number(e.target.value));
//   }

//   return (
//     <>
//       <PageHero
//         title="Centimeters Inches Converter"
//         description="แปลงเซนติเมตรเป็นนิ้วหรือแปลงนิ้วเป็นเซนติเมตร"
//       />
//       <Space h="xl" />
//       <Container size="sm">
//         <Paper shadow="xs" p="xl">
//           <Tabs defaultValue="cm">
//             <Tabs.List grow>
//               <Tabs.Tab value="cm">Centimeters to Inches</Tabs.Tab>
//               <Tabs.Tab value="inches">Inches to Centimeters</Tabs.Tab>
//             </Tabs.List>
//             <Space my={14} />

//             {/* Centimeters */}
//             <Tabs.Panel value="cm">
//               <form>
//                 <Input.Wrapper
//                   size="lg"
//                   label="Centimeters (cm)"
//                   description="กรอกจำนวนเซนติเมตร"
//                   required
//                 >
//                   <Input
//                     onChange={handleCM}
//                     size="lg"
//                     radius="md"
//                     type="number"
//                     placeholder="กรอกจำนวนเซนติเมตร"
//                   />
//                 </Input.Wrapper>
//                 <Space mt={30} />
//                 <Input.Wrapper
//                   label="Inches (in)"
//                   size="lg"
//                   placeholder="จำนวนนิ้ว"
//                   description="ไม่สามารถแก้ไขได้"
//                 >
//                   <Input
//                     readOnly
//                     value={CentimetersToInches(Number(centimeters))}
//                     size="lg"
//                     radius="md"
//                     type="number"
//                   />
//                 </Input.Wrapper>
//               </form>
//             </Tabs.Panel>

//             {/* Inch */}
//             <Tabs.Panel value="inches">
//               <form>
//                 <Input.Wrapper
//                   size="lg"
//                   label="Inches (in)"
//                   description="กรอกจำนวนนิ้ว"
//                   placeholder="จำนวนนิ้ว"
//                   required
//                 >
//                   <Input
//                     onChange={handleInches}
//                     size="lg"
//                     radius="md"
//                     type="number"
//                     placeholder="กรอกจำนวนนิ้ว"
//                   />
//                 </Input.Wrapper>
//                 <Space mt={30} />
//                 <Input.Wrapper
//                   label="Centimeters (cm)"
//                   size="lg"
//                   description="ไม่สามารถแก้ไขได้"
//                 >
//                   <Input
//                     readOnly
//                     value={InchesToCentimeters(Number(inches))}
//                     size="lg"
//                     radius="md"
//                     type="number"
//                   />
//                 </Input.Wrapper>
//               </form>
//             </Tabs.Panel>
//           </Tabs>
//         </Paper>
//       </Container>
//     </>
//   );
// };

// export default CMInches;
