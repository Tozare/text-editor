import React from "react";
import { Box } from '@chakra-ui/react';
import { HorizontalFieldCard } from '@src/entities/elements';
import { VerticalFieldCard } from '@src/entities/elements';
import { FieldsList } from "@src/widgets/fields";
import { Routes } from "@src/processes/routing";



export const App = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
    >
      <Routes />
    </Box>
  )
}