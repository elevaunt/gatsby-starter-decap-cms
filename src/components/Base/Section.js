import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles'
import { Box, Container, Stack } from '@mui/joy';
import { defaultTheme, light, colored, dark, darkest } from "../../configs/themes.mui.config";
import { HeadingBlock } from "./Headings";
import { palette } from "@mui/system";

const Section = ({ 
  id,
  theme, 
  maxWidth = "xl", 
  containerSx,
  containerStyles, 
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
  let containerPadding = {};

  if (containerStyles) {
    const { px, py, forcePadding, secondaryContent } = containerStyles;
    containerPadding = secondaryContent && !forcePadding
      ? { px: [0, 0, 0], pt: [py * .66, null, py], pb: [0, 0, 0] }
      : { px, py: {sm: py * .3, md: py * .66, lg: py} };
  } 

  const containerTheme = containerStyles && containerStyles.containerTheme;
  const inherit = containerTheme === "inherit";
  const secondaryTheme = (containerTheme && !inherit) ? themeMap[containerTheme] : sectionTheme

  console.log("SECTION", containerStyles);
  return (
    <CssVarsProvider theme={sectionTheme}>
      <HeadingBlock level={-1}>
        <Box
        id={id}
          sx={{
            backgroundColor: "background.body",
            ...sectionSx,
          }}
        >
          <CssVarsProvider theme={secondaryTheme }>
            <Container
              maxWidth={maxWidth}
              sx={(containerTheme) => ({
                // Need to change text color based on container theme
                backgroundColor: `background.body`,
                borderRadius: containerTheme.vars.radius[containerStyles?.radius],
                boxShadow: containerTheme.vars.shadow[containerStyles?.shadow],
                mt: containerStyles?.mt,
                mb: containerStyles?.mb,
                ...containerPadding,
                ...containerSx,
              })}
            >
              <Stack direction={stackDirection} gap={stackGap}>
                {children}
              </Stack>
            </Container>
          </CssVarsProvider>
        </Box>
      </HeadingBlock>
    </CssVarsProvider>
  )
}

export default Section;