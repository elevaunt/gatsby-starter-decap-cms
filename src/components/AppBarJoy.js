import React from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/joy/Container';
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import MenuItem from '@mui/joy/MenuItem';
import logo from "../img/tpc-horizontal-green.png";
import avatar from "../../static/img/apple-touch-icon.png";
import { Dropdown, MenuButton } from "@mui/joy";

const pages = ['Programs', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AppBarJoy() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const LogoDesktop = () => (
    <Box
      component={"img"}
      src={logo}
      alt="The Porters Coaching"
      sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: "240px" }}
    />
  );

  const LogoMobile = () => (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        flexGrow: 0,
        mr: 1,
        maxWidth: "180px"
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

  const MenuDesktop = () => (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
      {pages.map((page) => (
        <Button
          key={page}
          variant="plain"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'inherit', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  )

  const MenuMobile = () => (
    <Box
      sx={{
        flexGrow: 0,
        display: {
          xs: 'flex', md: 'none', lg: "none"
        },
        ml: "0 !important",
      }}>
      <Dropdown >
        <MenuButton
          size="lg"
          aria-label="site menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="primary"
          slots={{ root: IconButton }}
        >
          <MenuIcon />
        </MenuButton>
        <Menu
          id="menu-appbar-mobile"
          variant="plain"
          color="primary"
          keepMounted
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Dropdown>
    </Box>
  )

  const Profile = () => (
    <Dropdown sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
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
        sx={(theme) => ({
          boxShadow: theme.vars.shadow.md,
        })}
      >
        {settings.map((setting) => (
          <MenuItem key={setting}>
            <Typography textAlign="left">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  )

  return (
    <Container maxWidth="xl" sx={{ py: 1 }}>
      <Stack
        direction={"row"}
        justifyContent={{ xs: "space-between", md: "flex-start" }}
        alignItems="center"
        spacing={2}
      >
        <LogoDesktop />
        <MenuMobile />
        <LogoMobile />
        <MenuDesktop />
        <Profile />
      </Stack>
    </Container>
  );
}
export default AppBarJoy;