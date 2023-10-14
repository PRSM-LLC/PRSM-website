import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
} from "@chakra-ui/react";

export const MobileDrawer = (props) => (
  <Drawer placement="top" {...props}>
    <DrawerContent>
      <DrawerBody mt="100px" mb={"20px"}>
        <Stack spacing="6" alignItems={"center"}>
          {["About", "Plans", "Contact"].map((item) => (
            <Button
              key={item}
              size="lg"
              width={"160px"}
              variant="ghost"
              colorScheme="gray"
            >
              {item}
            </Button>
          ))}
        </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
