import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigation = useNavigate();
  return (
    <Flex direction={"column"} alignItems={"center"} p={10}>
      <Text fontWeight="700" fontSize={"3xl"}>
        Add User
      </Text>

      <Card w="100%">
        <CardBody>
          <Box as="form">
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your name" name="name" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>PIN</FormLabel>
              <InputGroup>
                <Input
                  type="password"
                  placeholder="Enter your PIN"
                  name="pin"
                />
                <InputRightElement>
                  {/* You can add an icon or other elements here */}
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Role</FormLabel>
              <Select placeholder="Select your role" name="role">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Select>
            </FormControl>

            <Flex gap={2}>
              <Button colorScheme="green" w="100%">
                Save
              </Button>
              <Button
                onClick={() => navigation(-1)}
                colorScheme="teal"
                w="100%"
              >
                Back
              </Button>
            </Flex>
          </Box>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default AddUser;
