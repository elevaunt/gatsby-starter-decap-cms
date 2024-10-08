import React, { useContext } from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/joy/Container';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import MenuItem from '@mui/joy/MenuItem';
import logo from "../img/tpc-horizontal-green.png";
import { Dropdown, Link, List, ListItem, ListItemButton, ListSubheader, MenuButton, MenuList, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { ModalContext } from "./Layout";
import { useStaticQuery, graphql } from "gatsby";
import { linkProps } from "./Base/Buttons";

const pages = ['Programs', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AppBarJoy({ hideMenu }) {
  const { openModal, setOpenModal } = useContext(ModalContext);

  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      file(name: {eq: "main-menu"}) {
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
  // Save for when I need to put submenus back into the menu
  // line 34
  // submenu {
  //   label
  //   url
  // }

  const mainMenu = data.file.children[0].frontmatter.menuItems;

  const LogoDesktop = () => (
    <Box
      component={"img"}
      src={logo}
      alt="The Porters Coaching"
      sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: "240px" }}
    />
  );

  const LogoMobile = ({ center }) => (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        flexGrow: 0,
        mr: 1,
        ml: center && "0 !important",
        maxWidth: center? "120px" : "180px"
      }}
    >
      <Box
        component={"img"}
        src={logo}
        alt="The Porters Coaching"
        sx={{
          maxWidth: "100%",
        }}
      />
    </Box>
  )

  const renderMenuItem = (item) => {
    return (
      <Button
        key={item.label}
        variant="plain"
        color="primary"
        sx={{ display: 'flex' }}
        {...linkProps(item)}
      >
        {item.label}
      </Button>
    )
  }

  const MenuDesktop = () => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
        {mainMenu.map((item, i) => {
          if (item.submenu) {
            return (
              <Dropdown key={i}>
                <MenuButton
                  variant="plain"
                  color="primary"
                  size="md"
                  sx={{
                    alignSelf: "center",
                  }}
                >
                  {item.label}
                </MenuButton>
                <Menu
                  id={`${item.label}-menu`}
                  variant="plain"
                  color="primary"
                  size="sm"
                  // placement="bottom-start"
                  keepMounted
                  sx={{
                    boxShadow: "md",
                  }}
                >
                  {item.submenu.map((submenu) => <MenuItem key={submenu.label}>{submenu.label}</MenuItem>)}
                </Menu>
              </Dropdown>
            )
          } else {
            return renderMenuItem(item);
          }
        })}
      </Box>
    )
  }

  const MenuMobile = () => (
    <Box
      sx={{
        flexGrow: 0,
        display: {
          xs: 'flex', md: 'none', lg: "none"
        },
        ml: "0 !important",
      }}>

      <IconButton
        size="lg"
        aria-label="site menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="primary"
        onClick={() => { setOpenModal("mobile-menu") }}
      >
        <MenuIcon />
      </IconButton>
      <Modal
        id={"mobile-menu"}
        open={openModal === "mobile-menu"}
        onClose={() => setOpenModal(false)}
      >
        <ModalDialog
          layout="fullscreen"
          variant="plain"
          sx={{
            padding: 0,
            backgroundColor: "background.body",
          }}
        >
          <ModalClose color={"primary"} size="xl" sx={{ top: "20px", right: "15px" }} />
          <List
            id="menu-appbar-mobile"
            sx={{
              display: { xs: 'block', md: 'none' },
              padding: 2,
            }}
          >
            {mainMenu.map((item, i) => {
              if (item.submenu) {
                return (
                  <ListItem nested key={i}>
                    <ListSubheader></ListSubheader>
                    <List>
                      {item.submenu.map((submenu) => (
                        <ListItem key={item.label} >
                          <ListItemButton {...linkProps(item)} >{submenu.label}</ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </ListItem>
                )
              }
              return (
                <ListItem key={i} >
                  <ListItemButton {...linkProps(item)} >
                    <Typography textAlign={"left"}>{item.label}</Typography>
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </ModalDialog>
      </Modal>
    </Box>
  )

  const ProfileDesktop = () => (
    <Box
      sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}
    >
      <Dropdown>
        <Tooltip
          title="Open settings"
          size="sm"
          variant="soft"
          placement="bottom-end"
        >
          <MenuButton
            slots={{ root: IconButton }}
            slotProps={{
              root: {
                alt: "Remy Sharp",
                variant: "solid",
                color: "primary",
              }
            }}
            sx={{
              borderRadius: 40,
            }}
          >
            LP
          </MenuButton>
        </Tooltip>
        <Menu
          id="appbar-profile"
          keepMounted
          variant="plain"
          color="primary"
          size="sm"
          placement="bottom-end"
          sx={{
            boxShadow: "md",
          }}
        >
          {settings.map((setting) => <MenuItem key={setting}>{setting}</MenuItem>)}
        </Menu>
      </Dropdown>
    </Box>
  )

  const ProfileMobile = () => (
    <Box
      sx={{
        flexGrow: 0,
        display: {
          xs: 'flex', md: 'none', lg: "none"
        },
        ml: "0 !important",
      }}>

      <IconButton
        size="md"
        aria-label="appbar profile"
        aria-controls="appbar-profile"
        aria-haspopup="true"
        color="primary"
        variant="solid"
        onClick={() => { setOpenModal("mobile-profile") }}
        sx={{
          borderRadius: 40,
        }}
      >
        LP
      </IconButton>
      <Modal
        id={"mobile-profile"}
        open={openModal === "mobile-profile"}
        onClose={() => setOpenModal(false)}
      >
        <ModalDialog
          layout="fullscreen"
          variant="plain"
          sx={{
            padding: 0,
            backgroundColor: "background.body",
          }}
        >
          <ModalClose color={"primary"} />
          <List
            id="menu-appbar-mobile"
            sx={{
              display: { xs: 'block', md: 'none' },
              padding: 2,
            }}
          >
            {settings.map((setting) => (
              <ListItem key={setting}>
                <Typography textAlign="center">{setting}</Typography>
              </ListItem>
            ))}
          </List>
        </ModalDialog>
      </Modal>
    </Box>
  )

  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        py: hideMenu ? 1 : 2, 
        bgcolor: { xs: hideMenu && `background.colored`, md: "transparent"},
        mb: { xs: hideMenu && 2, md: 0},
      }}>
      <Stack
        direction={"row"}
        justifyContent={{ xs: hideMenu ? "center" : "space-between", md: "flex-start" }}
        alignItems="center"
        spacing={2}
      >
        {hideMenu ? (
          <>
            <LogoDesktop />
            <LogoMobile center />
          </>
        ) : (
          <>
            <Link href="/" sx={{ display: { xs: 'none', md: 'inline' } }}>
              <LogoDesktop />
            </Link>
            <Link href="/" sx={{ display: { xs: 'inline', md: 'none' }, ml: "0 !important" }}>
              <LogoMobile />
            </Link>
            <MenuMobile />
            <MenuDesktop />
            {/* <ProfileDesktop />
            <ProfileMobile /> */}
          </>
        )}
      </Stack>
    </Container>
  );
}
export default AppBarJoy;