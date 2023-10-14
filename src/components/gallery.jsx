import React from "react";
import { motion } from "framer-motion";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";

export default function Gallery() {
  return (
    <>
      <Box
        bgGradient="linear(-25deg, #139BDF, #B165FE 80%)"
        w="100%"
        h={"130vh"}
        p={4}
        transform="skewY(-5deg)"
        mt={"100px"}
        opacity={"90%"}
      >
        <Flex
          mt={"130px"}
          mr="100px"
          flexDirection={"column"}
          alignItems={"flex-end"}
          // justifyContent={"flex-end"}
          transform={"skewY(5deg)"}
          gap={12}
        >
          <Heading
            textAlign={"right"}
            w={"60%"}
            fontSize={"7xl"}
            color={"white"}
          >
            Our Trusted Businesses on the Road to Success
          </Heading>

          <Image
            src="https://media.discordapp.net/attachments/928498867153014847/1154942880121630771/image.png?width=1242&height=671"
            alt="ish"
            w="60%"
            h="60%"
            borderRadius={"5px"}
            className="gallery-img"
          />
        </Flex>
      </Box>
    </>
  );
}
