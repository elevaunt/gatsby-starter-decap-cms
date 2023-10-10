/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../Base/TwoSidedLayout';
import AspectRatio from '@mui/joy/AspectRatio';
import Section from '../Base/Section';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';
import { GatsbyImage } from "gatsby-plugin-image";
import { Sheet } from "@mui/joy";

const Content = ({
  children,
  ratio,
  maxHeight = 600,
  basis = "50%",
  imgBasis = "50%",
  img,
}) => (
  <>
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
        minWidth: 100,
        alignSelf: ['stretch', null, null, 'initial'],
        flexGrow: ["initial", 1],
        // [theme.breakpoints.up(834)]: {
        //   alignSelf: 'initial',
        //   flexGrow: 1,
        // },
        borderRadius: 'md',
        bgcolor: 'background.level2',
        flexBasis: imgBasis,
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
  </>
)

export default function Product_FullWidth({
  theme,
  title,
  subtitle,
  blurb,
  buttonText,
  img,
  reversed,
  maxWidth = "xl",
  py,
  children,
}) {
  const imgRatio = img?.width ? img.width / img.height : 3 / 4;
  const column = reversed ? 'column' : 'column-reverse';
  const row = reversed ? 'row' : 'row-reverse';
  return (
    <Sheet
      maxWidth={maxWidth}
      sx={(theme) => ({
        position: 'relative',
        display: 'flex',
        flexDirection: [column, column, column, row],
        alignItems: 'center',
        justifyContent: 'center',
        py: py,
        gap: [4, 6, 8],
        p: 4,
        boxShadow: "xl",
      })}
    >
      <Content>
        {children}
      </Content>
    </Sheet>
  );
}