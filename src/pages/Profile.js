import {
  Avatar,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useRadio,
} from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileCard = ({ name, level, img }) => {
  return (
    <Stack spacing="-2.2rem" align="center">
      <Avatar boxSize="4.8rem" border="1px" src={img} />
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

const LinkCard = ({ icon, label, link }) => {
  const history = useHistory();
  return (
    <Stack
      bgColor="white"
      border="2px"
      borderColor="gray.400"
      borderRadius="20px"
      py="1.8rem"
      px="1.2rem"
      w="100%"
      maxH="20vh"
      align="center"
      justify="center"
      spacing="0.2rem"
      onClick={() => {
        history.push(link);
      }}
    >
      <Icon
        as={icon}
        sx={{ path: { stroke: "#979797" } }}
        boxSize="1.5rem"
        color="#979797"
      />
      <Text
        color="gray.500"
        fontWeight="light"
        textAlign="center"
        fontSize="5vw"
      >
        {label}
      </Text>
    </Stack>
  );
};

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Stack px="5vw" py="6vh" spacing={3}>
      <ProfileCard name={user.given_name} level="เริ่มต้น" img={user.picture} />
      <PointCard />
      <HStack spacing={3}>
        <LinkCard
          icon={AiOutlineClockCircle}
          label="ประวัติการเดินทาง"
          link="/history"
        />
        <LinkCard icon={FiBook} label="บันทึกการเดินทาง" link="/journal" />
      </HStack>
    </Stack>
  );
};

export default Profile;
