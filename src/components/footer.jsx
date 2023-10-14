import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  {
    title: "Company",
    links: [
      {
        label: "Our story",
        href: "#",
      },
      {
        label: "FAQs",
        href: "#",
      },
    ],
  },
  {
    title: "Our work",
    links: [
      {
        label: "Services",
        href: "#",
      },
      {
        label: "Plans",
        href: "#",
      },
      // {
      //   label: "Integrations",
      //   href: "#",
      // },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Case studies",
        href: "#",
      },
    ],
  },
];

export const Footer = () => (
  <Box bg="" mt={"130px"} mx={"40px"}>
    <Stack
      justify="space-between"
      align="start"
      direction={{ base: "column", lg: "row" }}
      py={{ base: "12", md: "16" }}
      spacing="8"
    >
      <Stack spacing={{ base: "6", md: "8" }} align="start">
        <Image
          src="/prsmlogo.png"
          width={"63px"}
          height={"100px"}
          alt="PRSM Logo"
        />
        {/* <Text color="fg.muted">Innovation starts with us.</Text> */}
      </Stack>
      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        gap="8"
        width={{ base: "full", lg: "auto" }}
      >
        {links.map((group, idx) => (
          <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
            <Text fontWeight="semibold" color="fg.subtle">
              {group.title}
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              {group.links.map((link, idx) => (
                <Button
                  key={idx}
                  as="a"
                  fontSize="sm"
                  variant="unstyled"
                  colorScheme="gray"
                  _hover={{ color: "gray.500" }}
                  href={link.href}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
    >
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} PRSM LLC. No Rights Reserved reserved.
      </Text>
      <ButtonGroup variant="tertiary">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="GitHub"
          icon={<FaInstagram />}
        />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
      </ButtonGroup>
    </Stack>
  </Box>
);
