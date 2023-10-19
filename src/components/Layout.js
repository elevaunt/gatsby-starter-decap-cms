import React, { createContext, useState } from "react";
// import { Helmet } from "react-helmet";
import Footer from "./Footer";
// import Navbar from "./Navbar";
// import useSiteMetadata from "./SiteMetadata";
// import { withPrefix } from "gatsby";
import "../configs/fonts.config"
import "../style/custom-style.sass";


import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles'
import { defaultTheme } from "../configs/themes.mui.config";
import Box from '@mui/joy/Box';
import AppBarJoy from "./AppBarJoy";


export const ModalContext = createContext({ openModal: false, setOpenModal: () => {} })

export function JoyWrapper({ nav = "full", children }) {
  const [openModal, setOpenModal] = useState(false)
  return (
    <CssVarsProvider theme={defaultTheme}>
      {/* 
        Add react helmet here to get things in the header
        Like page seoTitle, global styles, etc
      */}
      <ModalContext.Provider value={{ openModal, setOpenModal }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            scrollBehavior: "smooth",
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
      </ModalContext.Provider>
    </CssVarsProvider>
  );
}



export default JoyWrapper;