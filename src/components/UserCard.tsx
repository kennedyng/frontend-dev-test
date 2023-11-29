import { EditIcon } from "@chakra-ui/icons";
import {
  Card,
  Divider,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";

const UserCard = () => {
  return (
    <Card px={4} py={6} w={"100%"}>
      <Flex justifyContent={"space-between"} gap={2}>
        <Text fontWeight={700} textTransform={"uppercase"}>
          Three
        </Text>
        <IconButton
          variant="solid"
          color={"white"}
          bg={"black"}
          aria-label="Done"
          fontSize="20px"
          icon={<EditIcon />}
        />
      </Flex>

      <Flex direction={"column"}>
        <Text fontWeight={700} textTransform={"uppercase"} mt={10}>
          ROLES
        </Text>

        <HStack>
          <Text>SYSTEM</Text>
          <Text>SYSTEM</Text>
          <Text>SYSTEM</Text>
        </HStack>
      </Flex>

      <Divider />
      <Flex justifyContent={"space-between"} gap={2}>
        <Text fontWeight={700} textTransform={"uppercase"}>
          Three
        </Text>
        <IconButton
          variant="solid"
          color={"white"}
          bg={"black"}
          aria-label="Done"
          fontSize="20px"
          icon={<EditIcon />}
        />
      </Flex>
    </Card>
  );
};

export default UserCard;
