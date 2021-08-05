import axios from "axios";
import { useState } from "react";

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
      <p>This is home</p>
      {places.map((el, i) => (
        <p key={i}>{el.name}</p>
      ))}
    </>
  );
};
