import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UseWalletProvider } from "use-wallet";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/space-grotesk";

const theme = extendTheme({
  fonts: {
    heading: "Space Grotesk",
    body: "Space Grotesk",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <ChakraProvider theme={theme}>
        <UseWalletProvider
          chainId={1337}
          connectors={{
            walletconnect: {
              rpcUrl: "http://127.0.0.1:8545",
            },
          }}
        >
          <NavBar />
          <Component {...pageProps} />
          <Footer />{" "}
        </UseWalletProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
