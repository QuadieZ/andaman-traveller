import { Avatar, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const ProfileCard = ({ name, level }) => {
  return (
    <Stack>
      <Avatar src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59094623-stock-illustration-female-avatar-woman.jpg" />
      <Stack bgColor="white" border="2px" borderColor="gray.400">
        <Heading>{name}</Heading>
        <Text>นักเดินทางระดับ{level}</Text>
      </Stack>
    </Stack>
  );
};

const Profile = () => {
  console.log("hi");
  return (
    <>
      <ProfileCard name="จอห์น ลี" level="เริ่มต้น" />
    </>
  );
};

export default Profile;
