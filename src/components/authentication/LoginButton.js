import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      variant="solid"
      border="0px"
      color="gray.600"
      w="100%"
      bgColor="#2D9CDB"
      color="white"
    >
      Sign In
    </Button>
  );
};

export const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect({ screen_hint: "signup" })}
      variant="solid"
      border="0px"
      color="gray.600"
      w="100%"
      mt={16}
    >
      Sign Up
    </Button>
  );
};
