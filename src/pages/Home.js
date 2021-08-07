import axios from "axios";
import { useState } from "react";
import { Stack, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PointCard, UserCard, PlaceCard } from "../components/UserCard";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    axios
      .get("/api/places")
      .then((res) => {
        //Each .then must have a .catch to catch errors.
        setPlaces(res.data);
        setLoading(false);
      })
      .catch((err) => console.log("Read all products Error-------", err));
  }

  return (
    <>
      <Stack py="10vw" px="5vw">
        <UserCard name="ณัฐ" />
        <HStack w="100%">
          <PointCard score="300" areaName="ภูเก็ต" />
          <PlaceCard img="https://picsum.photos/500" placeName="แหลมพรหมเทพ" />
        </HStack>
        <Link to="/places">Place</Link>
      </Stack>
    </>
  );
};

export default Home;
