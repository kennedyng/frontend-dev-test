import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProductCard = () => {
  return (
    <Box boxShadow="base" px={1} py={1}>
      <Flex justifyContent={"flex-end"}>
        <IconButton
          isRound={true}
          variant="solid"
          color={"white"}
          bg={"black"}
          aria-label="Done"
          fontSize="20px"
          icon={<EditIcon />}
        />
      </Flex>

      <Box bg="red" h={150}>
        Image
      </Box>
      <Divider />

      <Flex justifyContent={"space-between"}>
        <Text color={"black"}>Stock:</Text>
        <Text>300.40</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text color={"black"}>Price:</Text>
        <Text color={"blue"} fontWeight={700}>
          300.40
        </Text>
      </Flex>

      <Flex justifyContent={"space-between"}>
        <Text color={"black"}>Cost:</Text>
        <Text>300.40</Text>
      </Flex>

      <Flex justifyContent={"space-between"}>
        <Text color={"black"}>Price:</Text>
        <Text color={"blue"} fontWeight={700}>
          300.40
        </Text>
      </Flex>

      <Flex justifyContent={"space-between"}>
        <Text color={"black"}>Cost:</Text>
        <Text>300.40</Text>
      </Flex>

      <VStack gap={2}>
        <Text
          p={3}
          w={"100%"}
          bg="blue.200"
          fontWeight={700}
          fontSize={"lg"}
          color="black"
        >
          In Manual
        </Text>
        <Text
          w={"100%"}
          p={3}
          bg="red.200"
          fontWeight={600}
          fontSize={"lg"}
          color="black"
        >
          Not For Sale
        </Text>
      </VStack>
    </Box>
  );
};

export default ProductCard;
