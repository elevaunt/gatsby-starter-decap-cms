/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Media from '../Base/Media';
import Section from '../Base/Section';
import Content from "../Base/Content";
import Buttons from "../Base/Buttons";
import renderSection from "../../configs/sectionsMap.config";


const ContentFullWidth = ({
  theme,
  textAlign,
  mainMedia,
  tagline,
  heading,
  subheading,
  description,
  buttons,
  content,
  isNestedContent,
}) => {
  // const imgRatio = img?.width ? img.width / img.height : 3 / 4;
  const imgPosition = mainMedia?.position;
  let direction = "row";
  let mobileDirection = "column";
  if (["top", "bottom"].includes(imgPosition)) {
    direction = "column"
  }
  if (["right", "bottom"].includes(imgPosition)) {
    mobileDirection = "column-reverse"
  }

  const contentProps = {
    tagline,
    textAlign,
    heading,
    subheading,
    description,
    buttons,
  }

  const imgSx = {
    flex: "0 1 40%",
  }

  return (
    <Section
      theme={theme}
      containerSx={{ py: 10 }}
      // maxWidth="lg"
      // stackDirection={[mobileDirection, mobileDirection, direction]}
      stackGap={4}
    >
      {["top", "left"].includes(imgPosition) && <Media {...mainMedia} sx={imgSx} />}
      <Content {...contentProps} >
        {buttons?.length && <Buttons buttons={buttons} />}
        {content?.map((content, key) => {
          content.isNestedContent = true;
          return renderSection(content, key);
        })}
      </Content>
      {["right", "bottom"].includes(imgPosition) && <Media {...mainMedia} sx={imgSx} />}
    </Section>
  );
};

export default ContentFullWidth;
