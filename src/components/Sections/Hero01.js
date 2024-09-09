/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Media from '../Base/Media';
import Section from '../Base/Section';
import Content from "../Base/Content";
import Buttons from "../Base/Buttons";
import { HeadingBlock } from "../Base/Headings";


export default function Hero({
  id,
  theme,
  contentStyles,
  mainMedia,
  tagline,
  subheading,
  heading,
  description,
  buttons,
}) {
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
    contentStyles,
    tagline,
    subheading,
    heading,
    description,
    buttons,
  }

  const imgSx = {
    flex: "0 .5 50%",
  }

  return (
    <Section
      id={id}
      theme={theme}
      containerStyles={contentStyles}
      maxWidth="xl" // contentStyles.maxWidth
      stackDirection={[mobileDirection, mobileDirection, direction]}
      stackGap={4}
    >
      {["top", "left"].includes(imgPosition) && <Media {...mainMedia} sx={imgSx} />}
      <HeadingBlock>
        <Content {...contentProps} >
          {buttons?.length ? <Buttons buttons={buttons} sx={{ pt: 4 }} /> : null}
        </Content>
      </HeadingBlock>
      {["right", "bottom"].includes(imgPosition) && <Media {...mainMedia} sx={imgSx} />}
    </Section>
  );
}
