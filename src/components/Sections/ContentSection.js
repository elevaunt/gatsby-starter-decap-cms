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
  contentStyles,
  theme,
  mainImage,
  tagline,
  heading,
  subheading,
  description,
  buttons,
  content,
  isNestedContent,
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

  const imgSx = {
    flex: "0 1 50%",
  }
  const { px, py } = contentStyles;
  const containerPadding = isNestedContent ? { px: [0, 0, 0], pt: [py * .66, null, py], pb: [0, 0, 0] } : { px, py };
  return (
    <Section
      theme={theme}
      containerSx={{ ...containerPadding }}
      maxWidth={contentStyles.maxWidth}
      stackDirection={[mobileDirection, mobileDirection, direction]}
      stackGap={4}
    >
      {["top", "left"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
      <HeadingBlock level={isNestedContent ? 2 : 1}>
        <Content {...contentProps} >
          {buttons?.length && <Buttons buttons={buttons} />}
          <Stack direction={"row"} gap={6}>
            {content?.map((content, key) => {
              content.isNestedContent = true;
              return renderSection(content, key);
            })}
          </Stack>
        </Content>
      </HeadingBlock>
      {["right", "bottom"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
    </Section>
  );
};

export default ContentSection;