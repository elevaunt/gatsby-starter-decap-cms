/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../Base/TwoSidedLayout';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { ButtonGroup } from "@mui/joy";
import Section from '../Base/Section';

export default function HeroLeft01({
  theme,
  title,
  subtitle,
  blurb,
  buttonText,
  img,
  maxWidth,
  children
}) {
  const imgRatio = img?.width ? img.width / img.height : 3 / 4;
  return (
    <Section theme={theme}>
      <TwoSidedLayout ratio={imgRatio} maxWidth={maxWidth} maxHeight={750} basis={"50%"} img={img} py={16}>
        {children}
      </TwoSidedLayout>
    </Section>
  );
}