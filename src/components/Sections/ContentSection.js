/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Media from "../Base/Media";
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
  mainMedia,
  tagline,
  heading,
  subheading,
  description,
  buttons,
  content,
  secondaryContent,
}) => {
  const { primaryFlexBasis, secondaryFlexBasis } = useFlexBasis(contentStyles.split);
  const imgPosition = mainMedia?.position;
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

  console.log("ContentSection", contentStyles);
  const contentCount = content?.length;
  return (
    <Section
      id={id}
      theme={theme}
      maxWidth={contentStyles.maxWidth}
      stackDirection={[mobileDirection, mobileDirection, direction]}
      stackGap={4}
      containerStyles={{...contentStyles, secondaryContent}}
      sectionSx={secondaryContent && {
        flex: "0 1 100%",
      }}
    >
      {mainMedia?.image && ["top", "left"].includes(imgPosition) && <Media {...mainMedia} sx={imgSx} />}
      <HeadingBlock level={secondaryContent ? 2 : 1}>
        <Content {...contentProps} >
          {buttons?.length > 0 && <Buttons buttons={buttons} />}
          <Stack direction={["column", "column", "row"]} gap={[4, 4, 6]} justifyContent={"center"} width={"100%"}>
            {content?.map((content, key) => renderSection(content, key))}
          </Stack>
        </Content>
      </HeadingBlock>
      {mainMedia?.image && ["right", "bottom"].includes(imgPosition) && <Media {...mainMedia} sx={imgSx} />}
    </Section>
  );
};

export default ContentSection;