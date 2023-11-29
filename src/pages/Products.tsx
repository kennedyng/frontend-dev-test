import {
  Box,
  Center,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../components";
import { SearchIcon } from "@chakra-ui/icons";

const Products = () => {
  return (
    <Box>
      <Flex direction={"row"} justifyContent={"center"} px={10} pt={20}>
        <InputGroup width={{ sm: "100%", md: "20%" }}>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={SearchIcon} color="gray.300" />}
          />
          <Input borderColor={"blue"} type="text" placeholder="Search" />
        </InputGroup>
      </Flex>
      <SimpleGrid
        columns={{ sm: 2, md: 6, lg: 8 }}
        spacing="4"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SimpleGrid>
    </Box>
  );
};

export default Products;
