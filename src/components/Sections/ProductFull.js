/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Media from '../Base/Media';
import Section from '../Base/Section';
import Content from "../Base/Content";
import Buttons from "../Base/Buttons";


const ProductFull =({
  theme,
  textAlign,
  mainMedia,
  tagline,
  subheading,
  heading,
  description,
  buttons,
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
    subheading,
    heading,
    description,
    buttons,
  }

  const imgSx = {
    flex: "0 1 40%",
  }


  // creataw a Product list and loop through them here

  return (
    <Section
      theme={theme}
      containerSx={{ py: 10 }}
      maxWidth="lg"
      stackDirection={[mobileDirection, mobileDirection, direction]}
      stackGap={4}
    >
      {["top", "left"].includes(imgPosition) && <Media {...mainMedia} sx={imgSx} />}
      <Content {...contentProps} >
        {buttons?.length && <Buttons buttons={buttons} />}
      </Content>
      {["right", "bottom"].includes(imgPosition) && <Media {...mainMedia} sx={imgSx} />}
    </Section>
  );
};

export default ProductFull;
