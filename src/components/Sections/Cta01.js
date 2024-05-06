/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from '../Base/Image';
import Section from '../Base/Section';
import Buttons from "../Base/Buttons";
import Content from "../Base/Content";
import { HeadingBlock } from "../Base/Headings";

// export function Cta01_old({
//   theme,
//   title,
//   subtitle,
//   blurb,
//   buttonText,
//   img,
// }) {
//   const imgRatio = img?.width ? img.width / img.height : 3 / 4;
//   return (
//     <Section theme={theme}>
//       <TwoSidedLayout
//         reversed
//         ratio={imgRatio}
//         maxHeight={750}
//         basis={"75%"}
//         img={img}
//         imgBasis={"25%"}
//         imgSx={{mt: -8}}
//         py={2}
//         maxWidth={"xl"}
//         theme={"light"}
//       >
//         <Stack direction={"row"} alignItems="center" gap={2} justifyContent={"space-between"} width={"100%"}>
//           <Stack direction={"column"}>
//             <Typography
//               level="h2"
//               fontSize="xl4"
//             >
//               {title}
//             </Typography>
//             <Typography
//               fontSize="lg"
//               fontWeight="lg"
//             >
//               {subtitle}
//             </Typography>
//           </Stack>
//           <Box>
//             <Button endDecorator={<ArrowForward />} size={"lg"}>
//               {buttonText || "Learn More"}
//             </Button>
//           </Box>
//         </Stack>
//       </TwoSidedLayout>
//     </Section>
//   );
// }


export default function Cta01({
  id,
  theme,
  contentStyles,
  mainImage,
  tagline,
  subheading,
  heading,
  description,
  buttons,
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

  const imgSx = {
    flex: "0 0 30%",
    mt: -8,
  }
  const contentProps = {
    tagline,
    contentStyles,
    subheading,
    heading,
    description,
    buttons,
  }

  return (
    <Section
      id={id}
      theme={theme}
      containerSx={{ mt: [8, 2, 2], py: 2 }}
      maxWidth={contentStyles.maxWidth}
      stackDirection={[mobileDirection, mobileDirection, direction]}
      stackGap={4}
    >
      {["top", "left"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
      <HeadingBlock level={1}>
        <Content {...contentProps} />
      </HeadingBlock>
      {["right", "bottom"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
      {buttons?.length && <Buttons buttons={buttons} />}
    </Section>
  );
}
