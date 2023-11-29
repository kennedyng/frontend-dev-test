import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components";
import { Box } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Box bg="cyan.50">
        <Outlet />
      </Box>
    </>
  );
};

export default RootLayout;
