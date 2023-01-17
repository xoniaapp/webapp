import { render } from "preact";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";

import App from "./app";
import theme from "./lib/utils/theme";

render(
  <>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>,
  document.getElementById("app") as HTMLElement
);
