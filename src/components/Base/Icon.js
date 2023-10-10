
import React from 'react';
import * as Icons from "@mui/icons-material";

const Icon = ({ name }) => {
  const NamedIcon = Icons[name];
  console.log("ICON", name, NamedIcon);
  return <NamedIcon />;
}

export default Icon