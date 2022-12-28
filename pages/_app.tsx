import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const colors = {
  brand: {
    50: "#E9FAFB",
    100: "#C2F0F5",
    200: "#9BE6EE",
    300: "#74DCE7",
    400: "#4DD2E0",
    500: "#25C8DA",
    600: "#1EA0AE",
    700: "#167883",
    800: "#0F5057",
    900: "#07282C",
  },
};
const Button = defineStyleConfig({
  baseStyle: {
    _disabled: {
      opacity: 0.4,
    },
  },
  variants: {
    solid: {
      bg: "#1C96A3",
      color: "#ffffff",
      _hover: {
        bgGradient: "linear(to-r, #23B4C3, #19838C)",
        bg: "#1C96A3",
        _disabled: {
          bg: "#1C96A3",
        },
      },
    },
    ghost: {
      bg: "#A6E0E5",
      color: "#373737",
      _hover: {
        bgGradient:
          "linear(to-r, rgba(222, 246, 252, 0.8), rgba(123, 210, 219, 0.8))",
        bg: "#A6E0E5",
        _disabled: {
          bg: "#A6E0E5",
        },
      },
    },
    outline: {
      bg: "#FFFFFF",
      border: "2px solid",
      borderColor: "#1C96A3",
      color: "#1C96A3",
      _hover: {
        bgGradient: "linear(to-r, #DEF6FC, #7BD2DB)",
        bg: "#FFFFFF",
      },
    },
  },
  sizes: {
    lg: defineStyle({
      minW: "24",
      px: "4",
    }),
    md: defineStyle({
      minW: "20",
      px: "4",
    }),
    sm: defineStyle({
      minW: "14",
      px: "3",
    }),
  },
});

const theme = extendTheme({
  colors: colors,
  components: {
    Button,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
