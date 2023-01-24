import { extendTheme } from "@chakra-ui/react";
import "@fontsource/pt-sans";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: `'PT Sans', sans-serif`,
    heading: `'PT Sans', sans-serif`,
  },
});

export default theme;
