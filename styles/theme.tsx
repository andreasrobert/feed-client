import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({ 
  ms: "340px",
  mm: "410px",
  md: "434px",
  ts: "440px",
  mb: "500px",
  tm: "690px",
  tb: "1035px",
  sm: "1090px",   //third
  lg: "1260px",  // after 1000px or x use->[fifth] before 1440px
  xl: "1440px",  // after 1440px or x use->[sixth]
})


export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Poppins", //Cousine 47, Fira Code 3-7, Fira Mono 457, Roboto Mono 1-7, Poppins 1-9, Roboto 134579, Sen 478, Montserrat 1-9
        fontWeight: "700",
        color:"black"
      },
      sizes: {
        Display: {
          fontSize: {base:"70px"},
          lineHeight: "15vh",
        },
        H1: {
          fontFamily: "Poppins",
          fontSize: {base:"19vw",ts:"80px"}, //64px
          fontWeight: "900",
          letterSpacing: {base:"-1px",mm:"1px"}

        },
        H2: {
          fontSize: {base:"16px"},
          lineHeight: "29px",
        },

        H3: {
          fontSize: {base:"26px"},
          lineHeight: "29px",
          letterSpacing: "2px",
        },

        SubH1: {
          fontSize: "17px",
          lineHeight: "28px",
          fontWeight: "500"
        },
        SubH2: {
          fontSize: "16px",
          lineHeight: "28px",
          fontWeight: "400",
          opacity:"0.8",
        },
        Menu: {
          fontFamily: "Roboto Mono",
          fontSize: "16px",
          lineHeight: "28px",
          fontWeight: "500",

          // letterSpacing: "4px",
        },

        // };
        // defaultProps: {
        //     size: string;
        // };
      },
    },

    Text: {
      baseStyle: {
        fontFamily: "Poppins",
        fontWeight: "300",
        fontSize: "15px",
      },
      sizes: {
        Body: {
            fontSize: {base:"15px"},
          },
      },
    },
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
   
  breakpoints
});
