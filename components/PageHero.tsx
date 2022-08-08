import React from "react";
import { Text, Box, Title, createStyles } from "@mantine/core";

interface PageHeroProps {
  title: string;
  description: string;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.indigo[5],
    color: theme.colors.gray[0],
    paddingTop: 50,
    paddingBottom: 50,
    textAlign: "center",
  },

  title: {
    fontSize: 60,
  },
  description: {
    fontSize: theme.fontSizes.xl,
  },
}));

const PageHero = ({ title, description }: PageHeroProps): JSX.Element => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Title className={classes.title} order={2}>
        {title}
      </Title>
      <Text className={classes.description}>{description}</Text>
    </Box>
  );
};

export default PageHero;
