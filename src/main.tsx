import { render } from "preact";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./lib/utils/theme";
import App from "./app";

render(
  <>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>,
  document.getElementById("app") as HTMLElement
);
