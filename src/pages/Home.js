import axios from "axios";
import { useState } from "react";
import { Text } from "@chakra-ui/react";

export const Home = () => {
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
      <Text color="red" fontSize="4xl">
        Hello
      </Text>
      {places.map((el, i) => (
        <p key={i}>{el.name}</p>
      ))}
    </>
  );
};
