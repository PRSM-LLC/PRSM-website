import React from "react";
import { Box } from "@chakra-ui/react";

export default function Gallery() {
  return (
    <Box
      bgGradient="linear(-25deg, #139BDF, #B165FE 80%)"
      w="100%"
      h={"1000px"}
      p={4}
      transform="skewY(-5deg)"
      mt={"100px"}
      opacity={"90%"}
    ></Box>
  );
}
