/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Box, styled } from '@mui/joy';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = ({
  image,
  alt,
  radius,
  mt,
  mb,
  shadow,
  sx
}) => {
  const img = getImage(image)
  const Image = styled(GatsbyImage)(({theme}) => ({
    marginTop: mt,
    marginBottom: mb,
    borderRadius: theme.vars.radius[radius],
    boxShadow: theme.vars.shadow[shadow],
  }))
  return (
    <Box sx={{
      ...sx
    }}>
      <Image image={img} alt={alt} />
    </Box>
  )
};

export default Image;