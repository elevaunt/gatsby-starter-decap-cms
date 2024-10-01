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
  let containerMargin = {}

  if (containerStyles) {
    let { mt, mb, px, py, forcePadding, secondaryContent } = containerStyles;
    if (!px) px = 3;
    containerPadding = secondaryContent && !forcePadding
      ? { px: [0, 0, 0], pt: [py * .66, null, py], pb: [0, 0, 0] }
      : { px: [px * .3, px * .66, px], py: [py * .3, py * .66, py] };
    containerMargin = {mt: [mt * .3, mt * .66, mt], mb: [mb * .3, mb * .66, mb ]}
  } 

  const containerTheme = containerStyles && containerStyles.containerTheme;
  const inherit = containerTheme === "inherit";
  const secondaryTheme = (containerTheme && !inherit) ? themeMap[containerTheme] : sectionTheme

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
                ...containerMargin,
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