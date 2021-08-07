import {
  Avatar,
  Heading,
  VStack,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";

// UserCard
export const UserCard = (props) => {
  const { name } = props;
  return (
    <HStack
      w="100%"
      h="20%"
      backgroundColor="white"
      border="2px"
      borderColor="gray.400"
      align="center"
      justify="center"
      borderRadius="20px"
      p="5%"
    >
      <Avatar
        boxSize="5rem"
        src="data:image/jpeg;base64,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"
      />
      <Stack>
        <Heading fontSize="5vw" color="gray.600" fontWeight="normal">
          ยินดีต้อนรับ{name}
        </Heading>
        <Text fontSize="3vw" color="gray.600">
          สวัสดีตอนเช้าคุณนักเดินทางระดับเริ่มต้น
          การเดินทางวันนี้จะเป็นการเดินทางที่ดีเพราะการเดินทางของคุณคือการเรียนรู้!
        </Text>
      </Stack>
    </HStack>
  );
};

//point card
export const PointCard = ({ score, areaName }) => {
  return (
    <VStack
      w="40%"
      h="18vh"
      backgroundColor="white"
      border="2px"
      borderColor="gray.400"
      align="center"
      justify="center"
      borderRadius="20px"
      spacing="0"
      p="5%"
    >
      <Heading fontSize="5vw" color="gray.600" fontWeight="normal">
        แต้มของคุณ
      </Heading>
      <Text
        align="center"
        justify="center"
        fontSize="10vw"
        fontWeight="normal"
        color="gray.500"
        m="0"
      >
        {score}
      </Text>
      <HStack>
        <FiMapPin color="#2D9CDB" />
        <Text fontSize="5vw" color="#2D9CDB">
          {areaName}
        </Text>
      </HStack>
    </VStack>
  );
};

//place
export const PlaceCard = ({ img, placeName }) => {
  return (
    <VStack
      w="60%"
      h="18vh"
      backgroundColor="white"
      border="2px"
      borderColor="gray.400"
      align="center"
      justify="center"
      borderRadius="20px"
      spacing="0"
      p="5%"
    >
      <Heading fontSize="5vw" color="gray.600" fontWeight="normal">
        สถานที่แนะนำประจำวัน
      </Heading>
      <Image src={img} boxSize="90%" objectFit="cover" />
      <Text fontSize="3vw" color="gray.600" fontWeight="normal">
        {placeName}
      </Text>
    </VStack>
  );
};
