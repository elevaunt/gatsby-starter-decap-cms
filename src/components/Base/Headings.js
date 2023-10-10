import { Typography } from "@mui/joy";
import React, { createContext, useContext } from "react";

const HeadingLevelContext = createContext(0);

function useHeadingLevelContext() {
  return useContext(HeadingLevelContext);
}

export function Heading({ fontSize, as, children }) {
  const level = `h${useHeadingLevelContext()}`;
  return (
    <Typography level={level} fontSize={fontSize}>
      {children}
    </Typography>
  );
}

export function HeadingBlock({ level, children }) {
  const defaultLevel = useHeadingLevelContext();
  return (
    <HeadingLevelContext.Provider value={(level || defaultLevel) + 1} >
      {children}
    </HeadingLevelContext.Provider>
  );
}
