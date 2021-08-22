import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  mm: "410px",
  md: "434px",
  ts: "500px",
  mb: "600px",
  tm: "690px",
  ms: "760px",
  tb: "850px",
  sm: "1115px",
  lg: "1260px",
  xl: "1440px",
});

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Jost",
        fontWeight: "700",
        color: "#3A4374",
      },
      sizes: {
        H1: {
          fontSize: { base: "24px" },
          lineHeight: "35px",
          letterSpacing: { base: "-0.33px" },
        },
        H2: {
          fontSize: { base: "20px" },
          lineHeight: "29px",
          letterSpacing: { base: "-0.25px" },
          color: "white",
        },

        H3: {
          fontSize: { base: "18px" },
          lineHeight: "26px",
          letterSpacing: { base: "-0.25px" },
        },

        H4: {
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: { base: "-0.2px" },
        },
      },
    },

    Text: {
      baseStyle: {
        fontFamily: "Jost",
        fontWeight: "400",
        fontSize: "14px",
        color: "#3A4374",
      },
      sizes: {
        Body1: {
          fontSize: { base: "16px" },
        },

        Body2: {
          fontSize: { base: "15px" },
          color: "white",
        },

        Body3: {
          fontSize: { base: "13px" },
          fontWeight: "600",
          color: "#4661e6e6",
        },
      },
    },
  },

  fonts: {
    heading: "Jost",
    body: "Jost",
  },

  breakpoints,
});
