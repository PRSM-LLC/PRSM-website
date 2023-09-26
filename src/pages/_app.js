import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
