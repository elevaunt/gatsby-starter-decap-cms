/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Icon from "./Icon";
import { ArrowBack } from "@mui/icons-material";

const Buttons = ({ buttons, sx }) => {

  const linkProps = (btn) => {
    if (!btn.url) return;
    return {
      component: 'a',
      href: btn.url
    }
  }

  const renderButton = (btn) => {
    // console.log(btn);
    const iconOnly = btn.icon.position === "iconOnly";
    const icon = {};
    if (btn.icon.position === "before") icon.startDecorator = <Icon name={btn.icon.name} />
    if (btn.icon.position === "after") icon.endDecorator = <Icon name={btn.icon.name} />
    // console.log("renderButton", icon);
    return (
      <Button
        color={btn.color !== "default" && btn.color}
        size={btn.size}
        variant={btn.type !== "default" && btn.type}
        {...icon}
        {...linkProps(btn)}
      >
        {btn.text}
        {iconOnly && <Icon name={btn.icon.name} />}
      </Button>
    );
  }
  // console.log("BUTTONS", buttons);
  return (
    <Stack
      direction={["column", null, "row"]}
      gap={2}
      sx={{
        flex: "0 1 15%",
        alignSelf: "center",
        ...sx,
      }}
    >
      {buttons.map(btn => renderButton(btn))}
    </Stack>
  )
};

export default Buttons;