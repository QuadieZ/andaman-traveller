import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BiHomeAlt, BiSearch, BiUser } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { CheckInModal } from "./Modals/CheckInModal";

const NavigationItem = ({ icon, label, path }) => {
  const history = useHistory();
  return (
    <Stack
      align="center"
      bgColor="white"
      justify="center"
      h="100%"
      w="40%"
      zIndex="1"
      spacing={0}
      onClick={() => {
        history.push(path);
      }}
    >
      <Icon as={icon} boxSize="45%" color="gray.400" />
      <Text fontSize="xs" color="gray.500">
        {label}
      </Text>
    </Stack>
  );
};

export const Navigation = () => {
  return (
    <HStack
      w="100%"
      h="10vh"
      bgColor="white"
      position="absolute"
      bottom="0"
      left="0"
      spacing={0}
      justify="space-between"
      border="1px"
      borderColor="gray.500"
    >
      <HStack h="100%" w="50%" spacing={1} justify="flex-start">
        <NavigationItem icon={BiHomeAlt} label="Home" path="/home" />
        <NavigationItem icon={BiSearch} label="Places" path="/places" />
      </HStack>

      <CheckInModal place="แหลมพรหมเทพ" />

      <HStack h="100%" w="50%" spacing={1} justify="flex-end">
        <NavigationItem icon={FiBook} label="My Pins" path="/pins" />
        <NavigationItem icon={BiUser} label="Profile" path="/profile" />
      </HStack>
    </HStack>
  );
};
