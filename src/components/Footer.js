import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import tpcLogoStacked from "../img/tpc-vertical-dark-green.png";
import Section from './Base/Section';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Section theme="darkest" sx={{flexShrink: 1}}>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "sm",
            px: 2,
            py: 4,
            mx: "auto",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={tpcLogoStacked}
              alt="The Porters Coaching"
              style={{ maxWidth: "300px" }}
            />
            <Typography variant="body1" mt={6}>
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Stack>
        </Box>
      </Box>
    </Section>
  );
}