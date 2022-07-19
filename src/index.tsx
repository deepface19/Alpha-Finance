import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextsProvider from './contexts';
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ContextsProvider>
      <App />
    </ContextsProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

