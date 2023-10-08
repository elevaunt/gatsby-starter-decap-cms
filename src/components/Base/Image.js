/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Box } from '@mui/joy';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = ({
  image,
  alt,
  sx
}) => {
  const img = getImage(image)
  console.log(alt, image, img);
  return (
    <Box sx={sx}>
      <GatsbyImage image={img} alt={alt} />
    </Box>
  )
};

export default Image;