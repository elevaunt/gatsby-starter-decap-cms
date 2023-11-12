
import React from 'react';
import * as Icons from "@mui/icons-material";

const Icon = ({ name, color, size }) => {
  const NamedIcon = Icons[name];
  return <NamedIcon color={color} sx={{fontSize: size}} />;
}

export default Icon