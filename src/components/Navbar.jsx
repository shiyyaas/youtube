import React from 'react';
import { Stack, Box, Typography, IconButton, Avatar, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchBar from './SearchBar';

/**
 * Top persistent Navbar matching modern YouTube styling
 */
const Navbar = ({ onToggleMobileSidebar }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={1.5}
      sx={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#0F0F0F',
        zIndex: 1100,
        borderBottom: '1px solid #202020',
        px: { xs: 1.5, sm: 3 },
      }}
    >
      {/* Brand & Drawer Toggle */}
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onToggleMobileSidebar}
          sx={{
            color: '#fff',
            display: { md: 'none', xs: 'inline-flex' },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <YouTubeIcon sx={{ color: '#FF0000', fontSize: 34, mr: 0.5 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: '-1px',
              fontFamily: 'Roboto, sans-serif',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            YouTube
            <Box
              component="span"
              sx={{
                fontSize: '0.65rem',
                color: '#AAAAAA',
                verticalAlign: 'super',
                ml: 0.5,
              }}
            >
              CLONE
            </Box>
          </Typography>
        </Link>
      </Stack>

      {/* Central Search Bar */}
      <SearchBar />

      {/* Action Icons */}
      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        <Tooltip title="Create">
          <IconButton sx={{ color: '#FFFFFF', display: { xs: 'none', sm: 'inline-flex' } }}>
            <VideoCallOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton sx={{ color: '#FFFFFF' }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Profile">
          <Avatar
            alt="User Avatar"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
            sx={{ width: 34, height: 34, cursor: 'pointer' }}
          />
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default Navbar;
