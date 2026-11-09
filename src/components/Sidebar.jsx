import React from 'react';
import { Box, Drawer } from '@mui/material';
import SidebarContent from './SidebarContent';

const SIDEBAR_WIDTH = 220;

/**
 * Responsive Sidebar:
 * - Desktop (md+): Fixed left rail column
 * - Mobile/Tablet (xs-sm): Temporary slide-out drawer triggered via Navbar hamburger menu
 */
const Sidebar = ({ selectedCategory, setSelectedCategory, mobileOpen, onMobileClose }) => {
  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: SIDEBAR_WIDTH,
            backgroundColor: '#0F0F0F',
            borderRight: '1px solid #202020',
          },
        }}
      >
        <SidebarContent
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onItemClick={onMobileClose}
        />
      </Drawer>

      {/* Desktop Persistent Sidebar */}
      <Box
        component="nav"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: SIDEBAR_WIDTH,
          flexShrink: 0,
          borderRight: '1px solid #202020',
          height: 'calc(100vh - 65px)',
          position: 'sticky',
          top: 65,
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': { width: 5 },
          '&::-webkit-scrollbar-thumb': { backgroundColor: '#333', borderRadius: 4 },
        }}
      >
        <SidebarContent
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
    </>
  );
};

export default Sidebar;
