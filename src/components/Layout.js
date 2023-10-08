import * as React from "react";
// import { Helmet } from "react-helmet";
import Footer from "./Footer";
// import Navbar from "./Navbar";
// import useSiteMetadata from "./SiteMetadata";
// import { withPrefix } from "gatsby";
import "../configs/fonts.config"


import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles'
import { defaultTheme } from "../configs/themes.mui.config";
import Box from '@mui/joy/Box';
import AppBarJoy from "./AppBarJoy";


export function JoyWrapper({ nav = "full", children }) {
  return (
    <CssVarsProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            flex: "1 1 auto"
          }}
        >
          <AppBarJoy />
          {children}
        </Box>
        <Footer />
      </Box>
    </CssVarsProvider>
  );
}



export default JoyWrapper;