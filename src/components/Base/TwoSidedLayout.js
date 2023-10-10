import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Section from '../Base/Section';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';
import { GatsbyImage } from "gatsby-plugin-image";

export default function TwoSidedLayout({
  children,
  reversed,
  ratio,
  maxHeight = 600,
  basis = "50%",
  imgBasis = "50%",
  img,
  imgSx,
  py = 10,
  maxWidth = "lg",
  theme,
}) {
  return (
    <Container
      maxWidth={maxWidth}
      sx={(theme) => ({
        position: 'relative',
        display: 'flex',
        flexDirection: reversed ? 'column-reverse' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: py,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: reversed ? 'row-reverse' : 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 8,
        }
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexBasis: basis,
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: 'flex-start',
            textAlign: 'initial',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
        {children}
      </Box>
      <AspectRatio
        ratio={ratio}
        maxHeight={maxHeight}
        minHeight={100}
        variant="plain"
        sx={(theme) => ({
          flexBasis: imgBasis,
          minWidth: 100,
          alignSelf: 'stretch',
          [theme.breakpoints.up(834)]: {
            alignSelf: 'initial',
            flexGrow: 1,
          },
          borderRadius: 'md',
          bgcolor: 'background.level2',
          flexBasis: imgBasis,
          ...imgSx,
        })}
      >
        <GatsbyImage
          image={img}
          objectFit={"cover"}
          objectPosition={"top left"}
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          // This is a presentational image, so the alt should be an empty string
          alt=""
          formats={["auto", "webp", "avif"]}
        />
      </AspectRatio>
    </Container>
  );
}