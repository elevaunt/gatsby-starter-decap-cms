/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Image from '../Base/Image';
import Section from '../Base/Section';
import Content from "../Base/Content";
import Buttons from "../Base/Buttons";


export default function Hero({
  theme,
  textAlign,
  mainImage,
  tagline,
  subheading,
  heading,
  description,
  buttons,
  isNestedContent,
}) {
  // const imgRatio = img?.width ? img.width / img.height : 3 / 4;
  const imgPosition = mainImage.position;
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
    subheading,
    heading,
    description,
    buttons,
  }

  const imgSx = {
    flex: "0 1 50%",
  }

  console.log({heading: heading.text, mainImage, isNestedContent});
  const containerPadding = isNestedContent ? {px: [0, 0, 0, 0], pt: [4, 4, 6], pb: [0, 0, 0]} : {py: 20}
  return (
    <Section
      theme={theme}
      containerSx={{ ...containerPadding }}
      maxWidth="lg"
      stackDirection={[mobileDirection, mobileDirection, direction]}
      stackGap={4}
    >
      {["top", "left"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
      <Content {...contentProps} >
        {buttons?.length && <Buttons buttons={buttons} />}
      </Content>
      {["right", "bottom"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
    </Section>
  );
}
