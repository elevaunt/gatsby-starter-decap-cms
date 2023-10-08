/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Markdown from 'react-markdown'
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/joy';

// Vertically stacked content
const Content = ({
  tagline,
  textAlign,
  heading,
  subheading,
  description,
  children,
}) => {
  const size = {
    heading: {
      sm: 'xl4',
      md: 'xl5',
      lg: 'xl6',
      xl: 'xl7',
    },
    subheading: {
      sm: 'lg',
      md: 'xl',
      lg: 'xl2',
      xl: 'xl3',
    }
  }

  const alignItems = textAlign === "center" ? "center" : textAlign === "right" ? "flex-end" : "flex-start";

  return (
    <Box
      sx={() => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: ['center', 'center', alignItems],
        textAlign,
        justifyContent: 'center',
        minWidth: [null, null, 420],
        gap: 0,
        //  flexBasis: basis,
        flexShrink: 999,
        textWrap: [null, null, 'balance'],
      })}
    >
      {tagline.text && <Typography level={`title-${tagline.size}`} >{tagline.text}</Typography>}
      {heading.text && <Typography level={'h1'} fontSize={size.heading[heading.size]} >{heading.text}</Typography>}
      {subheading.text && <Typography level={'h3'} fontSize={size.subheading[subheading.size]} >{subheading.text}</Typography>}
      {description && <Typography textAlign={textAlign}><Markdown>{description.body}</Markdown></Typography>}
      {children}
    </Box>
  )
}

export default Content;