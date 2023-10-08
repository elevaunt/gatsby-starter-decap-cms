/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Image from '../Base/Image';
import Section from '../Base/Section';
import Buttons from "../Base/Buttons";
import Content from "../Base/Content";

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
  theme,
  textAlign,
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
    flex: "0 1 25%",
    mt: -8,
  }
  const contentProps = {
    tagline,
    textAlign,
    subheading,
    heading,
    description,
    buttons,
  }

  return (
    <Section
      theme={theme}
      containerSx={{ py: 2 }}
      stackDirection={[mobileDirection, mobileDirection, direction]}
      stackGap={4}
    >
      {["top", "left"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
      <Content {...contentProps} />
      {["right", "bottom"].includes(imgPosition) && <Image {...mainImage} sx={imgSx} />}
      {buttons?.length && <Buttons buttons={buttons} />}
    </Section>
  );
}
