/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AspectRatio, Box, styled } from '@mui/joy';
import { NoEncryption } from "@mui/icons-material";

const Video = ({
  video,
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
    border: "none",
  }))

  return (
    <Box sx={{
      mt,
      mb: [mb < 0 && (-mb / 2), null, mb],
      ...sx
    }}>
      <AspectRatio objectFit="cover" ratio={aspectRatio || 16/9} variant="plain">
        <Video src={video} title={alt} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
      </AspectRatio>
    </Box>
  )
};

export default Video;
