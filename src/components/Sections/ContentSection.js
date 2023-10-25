/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from '../Base/Image';
import Section from '../Base/Section';
import Content from "../Base/Content";
import Buttons from "../Base/Buttons";
import renderSection from "../../configs/sectionsMap.config";
import { HeadingBlock } from "../Base/Headings";
import { Stack } from "@mui/joy";
import { useFlexBasis } from "../../hooks/useFlexBasis";


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
  const { primaryFlexBasis, secondaryFlexBasis } = useFlexBasis(contentStyles.split);
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
    contentStyles: { ...contentStyles, flex: `0 1 ${secondaryFlexBasis}` },
    tagline,
    heading,
    subheading,
    description,
    buttons,
    content,
  }

  const imgSx = {
    flex: `0 1 ${primaryFlexBasis}`,
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