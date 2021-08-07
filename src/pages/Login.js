import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import {
  LoginButton,
  SignUpButton,
} from "../components/authentication/LoginButton";

const Login = () => {
  return (
    <Stack px={10} pb={10} h="100vh" justify="center" spacing={8}>
      <Heading color="gray.700">ยินดีต้อนรับ!</Heading>
      <Stack align="center" justify="center" px={3}>
        <Image src="/beach.png" w="80%" mb={5} />
        <LoginButton />
        <SignUpButton />
      </Stack>
    </Stack>
  );
};

export default Login;
