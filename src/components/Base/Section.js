import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles'
import { Box, Container, Stack } from '@mui/joy';
import { defaultTheme, light, colored, dark, darkest } from "../../configs/themes.mui.config";
import { HeadingBlock } from "./Headings";

const Section = ({ 
  theme, 
  maxWidth = "xl", 
  containerSx, 
  sectionSx,
  stackDirection,
  stackGap,
  children 
}) => {
  const themeMap = {
    "default": defaultTheme,
    "light": light,
    "colored": colored,
    "dark": dark,
    "darkest": darkest,
  }

  const sectionTheme = themeMap[theme] || defaultTheme;

  return (
    <CssVarsProvider theme={sectionTheme}>
      <HeadingBlock level={-1}>
        <Box
          sx={{
            backgroundColor: "background.body",
            ...sectionSx,
          }}
        >
          <Container maxWidth={maxWidth} sx={containerSx}>
            <Stack direction={stackDirection} gap={stackGap}>
              {children}
            </Stack>
          </Container>
        </Box>
      </HeadingBlock>
    </CssVarsProvider>
  )
}

export default Section;