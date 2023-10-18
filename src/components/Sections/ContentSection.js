/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from '../Base/Image';
import Section from '../Base/Section';
import Content from "../Base/Content";
import Buttons from "../Base/Buttons";
import renderSection from "../../configs/sectionsMap.config";
import { HeadingBlock } from "../Base/Headings";
import { Stack } from "@mui/joy";


const ContentSection = ({
  id,
  theme,
  contentStyles,
  mainImage,
  tagline,
  heading,
  subheading,
  description,
  buttons,
  content,
  secondaryContent,
}) => {
  const imgPosition = mainImage.position;
  let direction = "row";
  let mobileDirection = "column";
  if (["top", "bottom"].includes(imgPosition) || contentStyles.split === "1/1") {
    direction = "column"
  }
  if (["right", "bottom"].includes(imgPosition)) {
    mobileDirection = "column-reverse"
  }

  const contentProps = {
    contentStyles,
    tagline,
    heading,
    subheading,
    description,
    buttons,
    content,
  }

  let flexBasis = "50%";
  switch (contentStyles.split) {
    case "1/1":
      flexBasis = "100%";
      break;
    case "1/2":
      flexBasis = "50%";
      break;
    case "1/3":
      flexBasis = "33.33%";
      break;
    case "1/4":
      flexBasis = "25%";
      break;
    case "1/5":
      flexBasis = "20%";
      break;
    case "1/6":
      flexBasis = "16.66%";
      break;
  
    default:
      break;
  }

  const imgSx = {
    flex: `0 1 ${flexBasis}`,
  }
  return (
    <Section
      id={id}
      theme={theme}
      maxWidth={contentStyles.maxWidth}
      stackDirection={[mobileDirection, mobileDirection, direction]}
      stackGap={4}
      containerStyles={{...contentStyles, secondaryContent}}
    >
      {mainImage.image && ["top", "left"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
      <HeadingBlock level={secondaryContent ? 2 : 1}>
        <Content {...contentProps} >
          {buttons?.length && <Buttons buttons={buttons} />}
          <Stack direction={["column", "column", "row"]} gap={[4, 4, 6]}>
            {content?.map((content, key) => renderSection(content, key))}
          </Stack>
        </Content>
      </HeadingBlock>
      {mainImage.image && ["right", "bottom"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
    </Section>
  );
};

export default ContentSection;