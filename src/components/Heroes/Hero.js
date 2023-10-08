import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = ({ theme, title, subtitle, blurb, img, imgPosition = "top left", height = 400,  }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default
        }}
      >
        <Container
          maxWidth="xl"
        >
          <Stack
            direction={["colmn", "row"]}
            spacing={4}
            useFlexGap={true}
          >
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Typography variant="h1" component="h1">{title}</Typography>
              <Typography variant="h2" component="h2">{subtitle}</Typography>
              <Typography variant="body1">{blurb}</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
              }}
            >
              {img?.url ? (
                <Box
                  component={"img"}
                  src={img}
                  objectFit={"cover"}
                  objectPosition={imgPosition}
                  style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    height: height,
                    width: "100%",
                  }}
                  // You can optionally force an aspect ratio for the generated image
                  aspectratio={3 / 1}
                  // This is a presentational image, so the alt should be an empty string
                  alt=""
                  formats={["auto", "webp", "avif"]}
                />
              ) : (
                <GatsbyImage
                  image={img}
                  objectFit={"cover"}
                  objectPosition={imgPosition}
                  style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    maxHeight: height,
                  }}
                  layout="fullWidth"
                  // You can optionally force an aspect ratio for the generated image
                  aspectratio={3 / 1}
                  // This is a presentational image, so the alt should be an empty string
                  alt=""
                  formats={["auto", "webp", "avif"]}
                />
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Hero;