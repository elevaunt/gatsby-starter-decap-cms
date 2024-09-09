/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from "./Image";
import Video from "./Video";

const Media = ({type, ...props}) => {
  return type = "Image" ? <Image {...props} /> : <Video {...props} />;
}

export default Media;