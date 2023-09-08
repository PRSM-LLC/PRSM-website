import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Image,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { MobileDrawer } from "./MobileNavbar";
import { ToggleButton } from "./ToggleButton";
import { useRouter } from "next/router";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

  const mobileNavbar = useDisclosure();
  return (
    <Box borderBottomWidth="2px" position="relative" zIndex="tooltip">
      <Flex
        mx={{ base: "50px", lg: "150px" }}
        py="4"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          src="/prsmlogo.png"
          width={"32.8px"}
          height={"52px"}
          alt="PRSM Logo"
        />
        {isDesktop ? (
          <HStack spacing="8">
            <ButtonGroup
              size="lg"
              variant="ghost"
              colorScheme="blackAlpha"
              fontFamily={"sans-serif"}
            >
              {["About", "Plans", "Contact"].map((item) => (
                <Button
                  onClick={() => handleClick(`/${item.toLowerCase()}`)}
                  key={item}
                >
                  {item}
                </Button>
              ))}
            </ButtonGroup>
          </HStack>
        ) : (
          <>
            <ToggleButton
              onClick={mobileNavbar.onToggle}
              isOpen={mobileNavbar.isOpen}
              aria-label="Open Menu"
            />
            <MobileDrawer
              isOpen={mobileNavbar.isOpen}
              onClose={mobileNavbar.onClose}
            />
          </>
        )}
      </Flex>
    </Box>
  );
};
