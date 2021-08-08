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
  const [header, setHeader] = useState("เช็คอิน");
  const [confirmText, setConfirmText] = useState("เช็คอิน");
  const [confirmed, setConfirmed] = useState(false);
  const [point, setPoint] = useState(0);

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

  const confirmBody = (
    <Text textAlign="center" mx={1} mb={5}>
      คุณได้รับ {point} แต้มจากการ{confirmText}
    </Text>
  );

  const modalContent = isCheckIn ? CheckInBody : <ReviewBody />;

  function handleConfirm() {
    if (isCheckIn) {
      setIsCheckIn(false);
      setHeader("เขียนรีวิว");
      setPoint((prev) => prev + 50);
    } else {
      setHeader("ยินดีด้วย!");
      setConfirmed(true);
      setConfirmText("เช็คอินและรีวิว");
      setPoint((prev) => prev + 50);
    }
  }

  function handleSkip() {
    setHeader("ยินดีด้วย!");
    setConfirmed(true);
  }

  function handleClose() {
    onClose();
    setIsCheckIn(true);
    setConfirmed(false);
    setPoint(0);
    setHeader("เช็คอิน");
    setConfirmText("เช็คอิน");
  }

  return (
    <>
      <IconButton
        onClick={onOpen}
        borderRadius="50%"
        bgColor="white"
        position="absolute"
        bottom="4vh"
        zIndex="2"
        _focus={{ outline: "none" }}
        left="38vw"
        icon={
          <Circle size="22vw" bg="white" border="2px" borderColor="gray.400">
            <Icon as={FiMapPin} boxSize="55%" color="gray.500" />
          </Circle>
        }
      />
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
            {header}
          </ModalHeader>
          <ModalCloseButton display={confirmed ? "box" : "none"} mt={1} />
          <ModalBody mt={1}>{confirmed ? confirmBody : modalContent}</ModalBody>
          <ModalFooter display={confirmed ? "none" : "flex"}>
            <HStack w="100%">
              <Button
                bgColor="#2D9CDB"
                color="white"
                w="50%"
                fontSize="sm"
                fontWeight="normal"
                borderRadius="10px"
                onClick={handleConfirm}
              >
                {isCheckIn ? "เช็คอิน" : "ยืนยัน"}
              </Button>
              <Button
                bgColor="gray.500"
                onClick={!isCheckIn ? handleSkip : handleClose}
                color="white"
                w="50%"
                fontSize="sm"
                fontWeight="normal"
                borderRadius="10px"
              >
                {isCheckIn ? "ยกเลิก" : "ข้าม"}
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
