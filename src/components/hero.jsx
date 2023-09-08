import React from "react";
import { Text, VStack, HStack, Button, chakra } from "@chakra-ui/react";

import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <VStack mb={"250px"} mt={"200px"}>
      <Text
        bgGradient="linear(to-l, #3d569e, #FF0380)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        align="center"
      >
        <chakra.span color="#000000">Our </chakra.span>
        <chakra.span color="#B165FE">Mission. </chakra.span>
        <chakra.span color="#000000">Your </chakra.span>
        <chakra.span color="#139BFD">Success. </chakra.span>
      </Text>

      <Text
        bgGradient="linear(to-l, #B165FE, #139BDF)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        <HStack>
          <chakra.span color="black">Let's get </chakra.span>
          <chakra.span> </chakra.span>
          <Typewriter
            options={{
              strings: ["Started.", "Now."],
              autoStart: true,
              loop: true,
            }}
          />
        </HStack>
      </Text>
      <Button colorScheme="gray" variant="solid" width="200px" mt={"50px"}>
        Learn More -{">"}
      </Button>
    </VStack>
  );
}
