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
} from "@chakra-ui/react";
import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { ReviewBody } from "./ReviewBody";

export const CheckInModal = ({ place }) => {
  const isLocationEnabled = true;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCheckIn, setIsCheckIn] = useState(true);

  const CheckInBody = isLocationEnabled ? (
    <>
      <Text fontSize="xs">ตอนนี้คุณอยู่ที่...</Text>
      <Text fontSize="xl" w="100%" textAlign="center">
        {place}
      </Text>
    </>
  ) : (
    <Stack align="center">
      <Icon as={RiErrorWarningLine} boxSize="1.5rem" />
      <Text fontSize="lg" w="100%" textAlign="center">
        กรุณาเปิดใช้งาน GPS เพื่อเช็คอิน
      </Text>
    </Stack>
  );

  function handleClose() {
    onClose();
    setIsCheckIn(true);
  }

  return (
    <>
      <IconButton
        onClick={onOpen}
        borderRadius="50%"
        bgColor="white"
        position="absolute"
        bottom="5vh"
        zIndex="2"
        left="40vw"
        icon={
          <Circle size="20vw" bg="white" border="2px" borderColor="gray.400">
            <Icon as={FiMapPin} boxSize="55%" color="gray.500" />
          </Circle>
        }
      >
        Open Modal
      </IconButton>
      <Modal
        isCentered
        onClose={handleClose}
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
            เช็คอิน
          </ModalHeader>
          <ModalBody mt={1}>
            {isCheckIn ? CheckInBody : <ReviewBody />}
          </ModalBody>
          <ModalFooter>
            <HStack w="100%">
              <Button
                bgColor="#2D9CDB"
                color="white"
                w="50%"
                fontSize="sm"
                fontWeight="normal"
                borderRadius="10px"
                onClick={() => {
                  if (isCheckIn) {
                    setIsCheckIn(false);
                  }
                }}
              >
                {isCheckIn ? "เช็คอิน" : "ยืนยัน"}
              </Button>
              <Button
                bgColor="gray.500"
                onClick={handleClose}
                color="white"
                w="50%"
                fontSize="sm"
                fontWeight="normal"
                borderRadius="10px"
              >
                ยกเลิก
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
