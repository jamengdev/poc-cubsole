import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

// workaround to fix sticky hover state on mobile buttons https://github.com/chakra-ui/chakra-ui/issues/6173

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
      "@media(hover: none)": {
        _hover: {
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
      "@media(hover: none)": {
        _hover: {
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
      "@media(hover: none)": {
        _hover: {
          bg: "#FFFFFF",
        },
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

export default extendTheme({
  initialColorMode: "system",
  useSystemColorMode: true,
  colors: colors,
  components: {
    Button,
  },
});
