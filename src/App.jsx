import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Exp from "./Expeditors/Exp";

const App = () => {
  return (
    <ChakraProvider>
      <Exp />
    </ChakraProvider>
  );
};

export default App;
