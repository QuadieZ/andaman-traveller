import { Heading, Stack, Text } from "@chakra-ui/react";
import { BackButton } from "../components/BackButton";
import { Navigation } from "../components/Navigation";
import { PlaceCard } from "../components/PlaceCard";

const Pins = () => {
  return (
    <>
      <Stack w="100%" h="100vh" pt="5vh" px="5vw">
        <Heading fontWeight="normal" fontSize="xl">
          สถานที่ที่บันทึกไว้
        </Heading>
        <PlaceCard />
      </Stack>
      <Navigation />
    </>
  );
};

export default Pins;
