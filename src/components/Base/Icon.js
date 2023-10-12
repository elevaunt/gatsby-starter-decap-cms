
import React from 'react';
import * as Icons from "@mui/icons-material";

const Icon = ({ name, color }) => {
  const NamedIcon = Icons[name];
  return <NamedIcon color={color} />;
}

export default Icon