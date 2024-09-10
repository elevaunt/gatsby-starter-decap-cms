/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AspectRatio, Box, styled } from '@mui/joy';

const Image = ({
  image,
  alt,
  aspectRatio,
  radius,
  mt,
  mb,
  shadow,
  sx
}) => {
  const img = image?.childImageSharp.fluid || {}
  const Image = styled("img")(({ theme }) => ({
    borderRadius: theme.vars.radius[radius],
    boxShadow: theme.vars.shadow[shadow],
  }))

  return (
    <Box sx={{
      mt,
      mb: [mb < 0 && (-mb / 2), null, mb],
      ...sx
    }}>
      <AspectRatio objectFit="cover" ratio={aspectRatio || 16/9} variant="plain">
        <Image src={img.src} srcSet={img.srcSet} alt={alt} />
      </AspectRatio>
    </Box>
  )
};

export default Image;