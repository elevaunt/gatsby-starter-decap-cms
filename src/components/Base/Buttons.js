/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Icon from "./Icon";
import { ModalContext } from "../Layout";

export const linkProps = (btn) => {
  if (!btn.url) return;
  return {
    component: 'a',
    href: btn.url
  }
}

const Buttons = ({ buttons, sx }) => {
  const { setOpenModal } = useContext(ModalContext);
  const [stackDirection, setStackDirection]= useState("row");

  const renderButton = (btn, setStackDirection) => {
    let ButtonComponent = Button;
    const iconOnly = btn.icon.position === "iconOnly";
    const icon = {};
    if (btn.icon.position === "before") icon.startDecorator = <Icon name={btn.icon.name} />
    if (btn.icon.position === "after") icon.endDecorator = <Icon name={btn.icon.name} />
    if (btn.type === "link") {
      ButtonComponent = Link;
      if (stackDirection !== "column") setStackDirection("column");
    }
    const handleButtonClick = (e) => {
      if (btn.action === "modal") {
        setOpenModal(btn.url.replace("#", ""));
      }
    }
    return (
      <ButtonComponent
        color={btn.color !== "default" && btn.color}
        size={btn.size}
        variant={btn.variant}
        {...icon}
        {...linkProps(btn)}
        sx={(theme) => ({
          fontSize: btn.type === "link" ? btn.size : undefined,
          p: iconOnly ? ".75em" : undefined,
          borderRadius: theme.radius.md,
        })}
        onClick={handleButtonClick}
      >
        {btn.text}
        {iconOnly && <Icon name={btn.icon.name} />}
      </ButtonComponent>
    );
  }
  return (
    <Stack
      direction={["column", null, stackDirection]}
      gap={stackDirection === "column" ? 1 : 2}
      sx={{
        flex: "0 1 15%",
        alignItems: "center",
        alignSelf: "center",
        ...sx,
      }}
    >
      {buttons.map(btn => renderButton(btn, setStackDirection))}
    </Stack>
  )
};

export default Buttons;