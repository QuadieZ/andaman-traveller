import { Avatar, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";

const ProfileCard = ({ name, level }) => {
  return (
    <Stack spacing="-2.2rem" align="center">
      <Avatar
        boxSize="4.8rem"
        border="1px"
        src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59094623-stock-illustration-female-avatar-woman.jpg"
      />
      <Stack
        bgColor="white"
        border="2px"
        borderColor="gray.400"
        borderRadius="20px"
        pt="3rem"
        pb="1.5rem"
        w="100%"
        align="center"
        spacing="0.2rem"
      >
        <Heading fontSize="1.7rem" fontWeight="medium" color="gray.600">
          {name}
        </Heading>
        <Text color="gray.500" fontWeight="light">
          นักเดินทางระดับ{level}
        </Text>
      </Stack>
    </Stack>
  );
};

const PointCard = () => {
  return (
    <Stack
      bgColor="white"
      border="2px"
      borderColor="gray.400"
      borderRadius="20px"
      py="1rem"
      w="100%"
      align="center"
      spacing="0.2rem"
    >
      <Text color="gray.500" fontWeight="light">
        แต้มของคุณ
      </Text>
      <Heading fontSize="4xl" fontWeight="medium" color="gray.500">
        200
      </Heading>
      <HStack spacing="0.2rem" align="center" justify="center">
        <Icon as={GrLocation} sx={{ path: { stroke: "#2D9CDB" } }} />
        <Text color="gray.500" fontWeight="light">
          ภูเก็ต
        </Text>
      </HStack>
    </Stack>
  );
};

const Profile = () => {
  console.log("hi");
  return (
    <Stack px="5vw" py="5vh">
      <ProfileCard name="จอห์น ลี" level="เริ่มต้น" />
      <PointCard />
    </Stack>
  );
};

export default Profile;
