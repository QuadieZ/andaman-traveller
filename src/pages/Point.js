import { Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { BackButton } from "../components/BackButton";
import { RedeemModal } from "../components/Modals/RedeemModal";
import { Navigation } from "../components/Navigation";

const mockProduct = [
  {
    name: "Coupon A",
    price: 500,
    image: "https://paimayang.com/wp-content/uploads/2020/02/ket.jpg",
  },
  {
    name: "Coupon B",
    price: 300,
    image: "https://miro.medium.com/max/1838/1*NLV89aE2H9Bun5TEMs7_xQ.jpeg",
  },
  {
    name: "Coupon C",
    price: 600,
    image:
      "https://assets.website-files.com/5fc1ff918f677a5d53526968/603f4b70459fac1830bc42e9_50978110116_af035608a1_b.jpeg",
  },
];

const Points = () => {
  return (
    <>
      <BackButton />
      <Stack w="100%" h="100vh" pt="12vh" px="5vw">
        <Heading fontWeight="normal" fontSize="xl">
          แต้มของคุณ
        </Heading>
        <HStack w="100%" overflowX="scroll">
          {mockProduct.map((el) => (
            <RedeemModal image={el.image} />
          ))}
        </HStack>
      </Stack>
      <Navigation />
    </>
  );
};

export default Points;
