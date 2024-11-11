// import { useState } from "react";
// import {
//   createStyles,
//   Box,
//   Button,
//   Container,
//   useMantineColorScheme,
//   Title,
//   Anchor,
//   Burger,
//   Drawer,
//   Group,
//   Stack,
//   Center,
//   ActionIcon,
//   Tooltip,
// } from "@mantine/core";
// import { Sun, Moon } from "tabler-icons-react";
// import Logo from "./Logo";

// interface ToggleProps {
//   color: boolean;
//   toggle(): void;
// }

// const items = [
//   { title: "ส่วนลดสินค้า", href: "/discount" },
//   { title: "ภาษีมูลค่าเพิ่ม (VAT)", href: "/vat" },
//   { title: "แปลงหน่วย", href: "/cm-inch" },
// ].map((item, index) => (
//   <Anchor
//     href={item.href}
//     sx={(theme) => ({
//       fontWeight: 600,
//       color:
//         theme.colorScheme === "light"
//           ? theme.colors.gray[7]
//           : theme.colors.gray[5],
//     })}
//     key={index}
//   >
//     {item.title}
//   </Anchor>
// ));

// const DarkLightButton = ({ color, toggle }: ToggleProps) => {
//   return (
//     <Tooltip label="Dark or Light" position="right">
//       <ActionIcon
//         variant="subtle"
//         onClick={() => toggle()}
//         title="Toggle color scheme"
//       >
//         {!color ? <Sun size={24} /> : <Moon size={24} />}
//       </ActionIcon>
//     </Tooltip>
//   );
// };

// const DesktopNav = ({ color, toggle }: ToggleProps) => {
//   return (
//     <div>
//       <Box
//         sx={(theme) => ({
//           [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
//             display: "none",
//           },
//           display: "flex",
//         })}
//       >
//         <Logo />
//         <Group
//           ml={50}
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             width: "100%",
//           }}
//         >
//           <Group spacing={30}>{items}</Group>
//           <DarkLightButton color={color} toggle={toggle} />
//         </Group>
//       </Box>
//     </div>
//   );
// };

// const MobileNav = ({ color, toggle }: ToggleProps) => {
//   const [opened, setOpened] = useState(false);
//   const title = opened ? "Close navigation" : "Open navigation";

//   return (
//     <Stack
//       sx={(theme) => ({
//         [theme.fn.largerThan("sm")]: { display: "none" },
//       })}
//     >
//       <Group sx={{ justifyContent: "space-between" }}>
//         <Logo />
//         <Burger
//           opened={opened}
//           onClick={() => setOpened((o) => !o)}
//           title={title}
//           size="md"
//           sx={(theme) => ({
//             [theme.fn.largerThan("sm")]: { display: "none" },
//           })}
//         />
//       </Group>
//       <Drawer
//         padding="xl"
//         size="sm"
//         position="right"
//         opened={opened}
//         onClose={() => setOpened(false)}
//       >
//         <Stack align="center" justify="flex-end" spacing="xl">
//           {items}
//           <DarkLightButton color={color} toggle={toggle} />
//         </Stack>
//       </Drawer>
//     </Stack>
//   );
// };

// const Navbar = ({}) => {
//   const { colorScheme, toggleColorScheme } = useMantineColorScheme();
//   const dark = colorScheme === "dark";

//   return (
//     <Box
//       sx={(theme) => ({
//         padding: theme.spacing.lg,
//       })}
//     >
//       <Container size="lg">
//         <DesktopNav color={dark} toggle={toggleColorScheme} />
//       </Container>
//       <MobileNav color={dark} toggle={toggleColorScheme} />
//     </Box>
//   );
// };

// export default Navbar;
