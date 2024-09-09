/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AspectRatio, Box, styled } from '@mui/joy';

const Video = ({
  url,
  alt,
  aspectRatio,
  radius,
  mt,
  mb,
  shadow,
  sx
}) => {
  const Video = styled("iframe")(({ theme }) => ({
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
        <Video src={url} alt={alt} />
      </AspectRatio>
    </Box>
  )
};

export default Video;