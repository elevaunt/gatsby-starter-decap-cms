/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Markdown from 'react-markdown'
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/joy';
import { Heading, HeadingBlock } from "./Headings";

// Vertically stacked content
const Content = ({
  contentStyles,
  tagline,
  textAlign,
  heading,
  subheading,
  description,
  children,
}) => {
  // const size = {
  //   heading: {
  //     sm: 'xl4',
  //     md: 'xl5',
  //     lg: 'xl6',
  //     xl: 'xl7',
  //   },
  //   subheading: {
  //     sm: 'lg',
  //     md: 'xl',
  //     lg: 'xl2',
  //     xl: 'xl3',
  //   },
  //   tagline: {
  //     sm: 'sm',
  //     md: 'md',
  //     lg: 'lg',
  //     xl: 'xl',
  //   }
  // }

  //  REDO type in CMS to be h1, h2, etc...
  // consider https://dev.to/dcwither/typography-separating-style-from-semantics-n3f
  // - https://codesandbox.io/s/automatic-heading-level-olroi?from-embed=&file=/src/Heading.js:213-217
  const type = {
    heading: {
      default: 'h2',
      primary: 'h1',  // page title
      secondary: 'h2', // section title
      tertiary: 'p', // nested content title
    },
    subheading: {
      default: 'h3',
      primary: 'h3',  // section title
      secondary: 'h4', // nested content title
      tertiary: 'p', // description title
    },
    tagline: {
      default: `title-${tagline.size}`,
      primary: "h2",
      secondary: "h4",
      tertiary: `title-${tagline.size}`,
    }
  }

  const alignItems = contentStyles?.textAlign === "center" ? "center" : contentStyles?.textAlign === "right" ? "flex-end" : "flex-start";

  return (
    <Box
      sx={() => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: ['center', 'center', alignItems],
        textAlign: contentStyles.textAlign,
        justifyContent: 'center',
        minWidth: [null, null, 420],
        gap: 0,
        //  flexBasis: basis,
        flexShrink: 999,
        textWrap: [null, null, 'balance'],
      })}
    >
      <Heading>
        {tagline.text && (
          <>
            <Typography level={type.tagline[tagline.type]} fontSize={tagline.size} color={tagline.color}>
              {tagline.text}
            </Typography>
            <br />
          </>
        )}
        {heading.text && (
          <>
            <Typography level={type.heading[heading.type]} fontSize={heading.size} color={heading.color}>
              {heading.text}
            </Typography>
            <br />
          </>
        )}
        {subheading.text && (
          <>
            <Typography level={type.subheading[subheading.type]} fontSize={subheading.size} color={subheading.color}>
              {subheading.text}
            </Typography>
          </>
        )}
      </Heading>
      {description && <Typography textAlign={contentStyles.textAlign}><Markdown>{description.body}</Markdown></Typography>}
      {children}
    </Box>
  )
}

export default Content;