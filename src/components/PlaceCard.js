import { HStack, Image } from "@chakra-ui/react";

export const PlaceCard = () => {
  return (
    <HStack
      w="100%"
      h="18vh"
      bgColor="white"
      borderRadius="15px"
      border="2px"
      borderColor="gray.400"
      px="5%"
    >
      <Image
        src="https://paimayang.com/wp-content/uploads/2020/02/ket.jpg"
        h="75%"
        w="45%"
        objectFit="cover"
      />
    </HStack>
  );
};
