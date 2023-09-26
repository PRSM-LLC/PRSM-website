"use client";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper(props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Plan() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          {/* Start with 14-day free trial. No credit card needed. Cancel at
          anytime. */}
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Basic
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                950
              </Text>
              <Text fontSize="3xl" color="gray.500">
                {/* /month */}
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Customized Website Design & Development
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Responsive Web Design
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Basic SEO Setup
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />2 Weeks
                Post-Launch Support
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />3 Basic
                Features
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />1 Advanced
                Feature
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Contact Us
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("#139BFD", "#139BFD")}
                px={3}
                py={1}
                // color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Standard
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  2,000
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  {/* /month */}
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Customized Website Design & Development
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Responsive Web Design
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Advanced SEO Setup
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />1 Month
                  Post-Launch Support{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />5 Basic
                  Features
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />3 Advanced
                  Features{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />1 Premium
                  Feature
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red">
                  Contact Us
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("#B165FE", "#B165FE")}
                px={3}
                py={1}
                // color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                BEST VALUE
              </Text>
            </Box>
          </Box>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Premium
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                9,000
              </Text>
              <Text fontSize="3xl" color="gray.500">
                {/* /month */}
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Customized Website Design & Development
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Responsive Web Design
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Advanced SEO Setup with optimization
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />2 Months
                Post-Launch Support{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />7 Basic
                Features
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />6 Advanced
                Features{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />4 Premium
                Features
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Contact Us
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
