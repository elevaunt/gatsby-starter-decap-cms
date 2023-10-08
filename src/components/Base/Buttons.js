/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import ArrowForward from '@mui/icons-material/ArrowForward';

const Buttons = ({buttons}) => {

  const linkProps = (btn) => {
    if (!btn.url) return;
    return {
      component: 'a',
      href: btn.url
    }
  }

  return (
    <Stack
      direction={["column", null, "row"]}
      gap={2}
      sx={{
        flex: "0 1 15%",
        alignSelf: "center",
      }}
    >
      {buttons.map(btn => (
        <Button
          color={btn.color !== "default" && btn.color}
          size={btn.size}
          variant={btn.type !== "default" && btn.type}
          {...linkProps(btn)}
        >
          {btn.text}
          <ArrowForward />
        </Button>
      ))}
    </Stack>
  )
};

export default Buttons;