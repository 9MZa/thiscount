import classes from "./index.module.css";
import { Logo } from "../Logo";
import { useDisclosure } from "@mantine/hooks";
import { Group, Burger, Container, Drawer, Stack } from "@mantine/core";

const links = [
  { link: "/discount/index.html", label: "ส่วนลดสินค้า" },
  { link: "/vat/index.html", label: "ภาษีมูลค่าเพิ่ม (VAT)" },
  { link: "/cm-inch/index.html", label: "แปลงหน่วย" },
];

export const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Logo />
          <Group gap={10} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={open} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
      <Drawer opened={opened} onClose={close} position="right">
        <Stack gap={10}>{items}</Stack>
      </Drawer>
    </header>
  );
};
