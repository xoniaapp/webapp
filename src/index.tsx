import { createRoot } from "react-dom/client"
import { ChakraProvider, theme } from '@chakra-ui/react'
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>,
)
