import { EmailIcon, AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { UserCard } from "../components";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  return (
    <Flex direction={"column"} gap={2} alignItems={"center"} p={10}>
      <Text fontSize={"3xl"} fontWeight={700} mb={4}>
        Manage Users
      </Text>
      <Button
        as={Link}
        to="/manage-users/add-one"
        leftIcon={<AddIcon />}
        colorScheme="blue"
        w="100%"
        variant="solid"
      >
        Add
      </Button>

      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </Flex>
  );
};

export default ManageUsers;
