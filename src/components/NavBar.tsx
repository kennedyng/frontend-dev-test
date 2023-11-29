import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      boxShadow="md"
      px={10}
      py={2}
      alignItems={"center"}
    >
      <Text as={Link} to="/" color={"blue.500"} fontWeight={700} fontSize="3xl">
        Bofrak
      </Text>

      <HStack gap={4}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/manage-users">
              Manage Users
            </MenuItem>
            <MenuItem as={Link} to="/manage-thresholds">
              Manage Thresholds
            </MenuItem>
          </MenuList>
        </Menu>
        <Button size="md" variant="solid" colorScheme="teal">
          Login
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
