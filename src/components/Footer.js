import React from 'react';
import tpcLogoStacked from "../img/tpc-vertical-dark-green.png";
import { Box, Link, Stack, Typography } from "@mui/joy";
import Section from './Base/Section';
import { useStaticQuery, graphql } from "gatsby";
import { brandShades } from "../configs/themes.mui.config";

const footerTextColor = brandShades.joyNeutral[100];

const Copyright = ()=> {
  return (
    <Typography fontSize={"xs"} mt={8} sx={{ color: footerTextColor }}>
      {'Copyright © '} The Porters Coaching {new Date().getFullYear()}
    </Typography>
  );
}

const FooterLinks = () => {
  const data = useStaticQuery(graphql`
    query FooterMenuQuery {
      file(name: {eq: "footer-menu"}) {
        name
        children {
          ... on MarkdownRemark {
            frontmatter {
              menuItems {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  const footerMenu = data.file.children[0].frontmatter.menuItems;

  return (
    <Typography className="footer-menu" fontSize={"xs"} mt={1} sx={{ color: footerTextColor }}>
      {footerMenu.map((item, i) => {
        const separator = () => {
          if (i < footerMenu.length - 1) {
            return <span key={"divider-"+i}> | </span>
          }
        }
        return (
          <>
            <Link href={item.url} key={i} sx={{ color: footerTextColor }}>{item.label}</Link>{separator()}
          </>
        )
      })}
    </Typography>
  )
}

export default function Footer() {

  return (
    <Section id="footer" theme="darkest" sx={{ flexShrink: 1 }}>
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
            <Copyright />
            <FooterLinks />
          </Stack>
        </Box>
      </Box>
    </Section>
  );
}