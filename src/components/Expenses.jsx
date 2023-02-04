import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ExpenseForm from "../pages/ExpenseForm";

const Expenses = () => {
  return (
    <>
      <ChakraProvider>
      <ExpenseForm/>
      </ChakraProvider>
    </>
  );
};

export default Expenses;
