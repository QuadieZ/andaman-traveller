import { Circle, Icon, IconButton } from "@chakra-ui/react";
import { BsArrowLeftShort } from "react-icons/bs";

export const BackButton = () => {
  return (
    <Circle
      size="6vh"
      bg="white"
      border="2px"
      borderColor="gray.400"
      position="absolute"
      top="0"
      left="0"
      m="2vh"
    >
      <Icon as={BsArrowLeftShort} boxSize="95%" color="gray.500" />
    </Circle>
  );
};
