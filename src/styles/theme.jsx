import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#139BDF",
    secondary: "#41a2b9",
    bgGradient: "linear(to-l, #7928CA, #FF0080)",
    bgColor: "#F5F5F5",
    primaryButton: {
      500: "#779bc1",
      600: "#139BDF",
    },
    secondaryButton: {
      500: "#333333",
      600: "#2A2A2A",
    },
    footerBg: "#0D132F",
    inputBg: "#0A0F24",
    buttonBg: {
      500: "#139BDF",
      600: "#139BDF",
    },
    joinTeamBtn: {
      500: "#4A7EAE",
      600: "#4A7EAE",
    },
  },

  styles: {
    global: () => ({
      body: {
        color: "black",
        backgroundColor: "bgColor",
        padding: 0,
        margin: 0,
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        variant: "outline",
        colorScheme: "#139BDF",
        fontWeight: "light",
      },
      variants: {
        outline: {
          _hover: {
            bg: "#139BDF !important",
            color: "whiteAlpha.900",
            borderColor: "transparent",
          },
        },
      },
    },
    Tooltip: {
      baseStyle: {
        bg: "blackAlpha.900",
        color: "white",
        fontSize: "md",
        px: 2,
        py: 1,
        borderRadius: "md",
        boxShadow: "lg",
      },
    },
  },
});

export default theme;
