/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../Base/TwoSidedLayout';
import Section from '../Base/Section';

export default function Content01({
  theme,
  title,
  subtitle,
  blurb,
  buttonText,
  img,
  reversed,
  bgColor,
}) {
  const imgRatio = img?.width ? img.width / img.height : 3 / 4;
  return (
    <Section theme={theme}>
      <TwoSidedLayout reversed={reversed} maxWidth="xl" ratio={imgRatio} maxHeight={750} basis={"50%"} img={img}>
        <Typography fontSize="lg" fontWeight="lg">
          {subtitle}
        </Typography>
        <Typography
          level="h2"
        // fontWeight="xl"
        // fontSize="xxl"
        >
          {title}
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          {blurb}
        </Typography>
      </TwoSidedLayout>
    </Section>
  );
}