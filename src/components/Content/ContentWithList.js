/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import IconList from "../Base/IconList";
import Section from "../Base/Section";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function ContentWithList({
  theme,
  title,
  subtitle,
  blurb,
  img,
  variant = "plain",
  sheetSx = { p: 4, boxShadow: 'lg', },
}) {
  const imgRatio = img?.width ? img.width / img.height : 3 / 4;
  return (
    <Sheet variant={variant} sx={sheetSx}>
      {title && <Typography level="h2" fontSize={"xl4"} >{title}</Typography>}
      {subtitle && <Typography level="h3" >{subtitle}</Typography>}
      {blurb && <Typography level="body-lg" textColor="text.secondary" lineHeight="lg">{blurb}</Typography>}
      
      <IconList icon={<KeyboardDoubleArrowRightIcon color="warning" />} >
        <Typography>Volkswagen ipsum Beetle sit amet, Kombi adipiscing elit. Fusce Microbus vintage sapien, et Käfer leo posuere et.</Typography>
        <Typography>Volkswagen ipsum Beetle sit amet, Kombi adipiscing elit. Fusce Microbus vintage sapien, et Käfer leo posuere et.</Typography>
        <Typography>Volkswagen ipsum Beetle sit amet, Kombi adipiscing elit. Fusce Microbus vintage sapien, et Käfer leo posuere et.</Typography>
      </IconList>
    </Sheet>
    
  );
}