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
import { Dropdown, MenuButton } from "@mui/joy";

const pages = ['Products', 'Pricing', 'Blog'];
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
    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, ml: -2 }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )

  const Profile = () => (
    <Dropdown sx={{ flexGrow: 0 }}>
      {/* <Tooltip title="Open settings"> */}
      {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton> */}
      <MenuButton
        // onClick={handleOpenUserMenu}
        sx={{ p: 0 }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </MenuButton>
      {/* </Tooltip> */}
      <Menu
        sx={{ mt: '45px' }}
        id="appbar-profile"
        // anchorEl={anchorElUser}
        // anchorOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right',
        // }}
        // keepMounted
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right',
        // }}
        // open={Boolean(anchorElUser)}
        // onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
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