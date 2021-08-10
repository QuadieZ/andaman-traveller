import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  HStack,
  Stack,
  Icon,
  Avatar,
  IconButton,
  Circle,
  Image,
} from "@chakra-ui/react";

export const RedeemModal = ({ image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Image
        src={image}
        onClick={onOpen}
        h="100%"
        maxW="20vh"
        objectFit="cover"
      />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent w="85%" borderRadius="20px">
          <ModalHeader
            textAlign="center"
            fontSize="xl"
            color="gray.400"
            fontWeight="normal"
            pb={0}
          >
            TEST
          </ModalHeader>
          <ModalCloseButton mt={1} />
          <ModalBody mt={1}>TEST</ModalBody>
          <ModalFooter>
            <HStack w="100%">
              <Button
                bgColor="#2D9CDB"
                color="white"
                w="50%"
                fontSize="sm"
                fontWeight="normal"
                borderRadius="10px"
              >
                hey
              </Button>
              <Button
                bgColor="gray.500"
                onClick={onClose}
                color="white"
                w="50%"
                fontSize="sm"
                fontWeight="normal"
                borderRadius="10px"
              >
                close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
