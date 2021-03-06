import { HStack, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

import { Rating } from "react-simple-star-rating";

export const ReviewBody = () => {
  const [rating, setRating] = useState(0); // initial rating value
  console.log(rating);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };
  return (
    <Stack>
      <HStack>
        <Text fontSize="4vw" color="gray.500">
          คะแนนของสถานที่
        </Text>
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Rating Props */
          size="6vw"
        />
      </HStack>
      <Text fontSize="4vw" color="gray.500">
        ความเห็นเพิ่มเติม
      </Text>
      <Textarea
        placeholder="ไปเที่ยวมาแล้วเป็นยังไงบ้าง แนะนำเพื่อนๆนักเดินทางกัน!"
        fontSize="4vw"
        h="8vh"
      />
    </Stack>
  );
};
