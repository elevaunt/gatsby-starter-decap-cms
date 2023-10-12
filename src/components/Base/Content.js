/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Markdown from 'react-markdown'
import Typography from '@mui/joy/Typography';
import { Box, List, ListItem, ListItemDecorator, ListItemContent } from '@mui/joy';
import { Heading, HeadingBlock } from "./Headings";
import { Block } from "@mui/icons-material";
import Icon from "./Icon";

// Vertically stacked content
const Content = ({
  contentStyles,
  tagline,
  heading,
  subheading,
  description,
  children,
}) => {
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

  const renderHeading = (headingType, headingProps) => {
    return (
      <Typography
        level={type[headingType][headingProps.type]}
        fontSize={headingProps.size}
        color={headingProps.color}
        sx={(theme) => ({
          display: "block",
          fontFamily: theme.fontFamily[headingProps.font],
        })}
      >
        {headingProps.text}
      </Typography>
    )
  }

  const ListItemReplacement = ({icon, children, ...props}) => {
    return (
    <ListItem
      sx={{
        textAlign: "left",
        alignItems: "flex-start",
      }}
    >
      {icon && <ListItemDecorator><Icon name={icon.name} color={icon.color} /></ListItemDecorator>}
      <ListItemContent>{children}</ListItemContent>
    </ListItem>
  )}

  return (
    <Box
      sx={() => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: ['center', 'center', alignItems],
        textAlign: contentStyles.textAlign,
        justifyContent: 'center',
        // minWidth: [null, null, 420],
        gap: 0,
        //  flexBasis: basis,
        flexShrink: 999,
        textWrap: [null, null, 'balance'],
      })}
    >
      <Heading>
        {tagline.text && renderHeading("tagline", tagline)}
        {heading.text && renderHeading("heading", heading)}
        {subheading.text && renderHeading("subheading", subheading)}
      </Heading>
      {description && (
        <Typography textAlign={contentStyles.textAlign}>
          <Markdown
            components={{
              ul: List,
              li(props) {return <ListItemReplacement icon={description.bullets.icon} {...props} />},
            }}
          >{description.body}</Markdown>
        </Typography>
      )}
      {children}
    </Box>
  )
}

export default Content;