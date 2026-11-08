import React from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import { categories } from '../utils/constants';

/**
 * Sidebar navigation list of YouTube categories
 */
const SidebarContent = ({ selectedCategory, setSelectedCategory, onItemClick }) => (
  <Stack
    sx={{
      flexDirection: 'column',
      width: '100%',
      gap: 0.5,
      p: 1.5,
    }}
  >
    {categories.map((category) => {
      const isSelected = category.name === selectedCategory;
      return (
        <Button
          key={category.name}
          onClick={() => {
            setSelectedCategory(category.name);
            if (onItemClick) onItemClick();
          }}
          startIcon={
            <Box
              sx={{
                color: isSelected ? '#FFFFFF' : '#FF0000',
                display: 'flex',
                alignItems: 'center',
                mr: 1,
              }}
            >
              {category.icon}
            </Box>
          }
          sx={{
            justifyContent: 'flex-start',
            px: 2,
            py: 1,
            borderRadius: '10px',
            backgroundColor: isSelected ? '#272727' : 'transparent',
            color: '#FFFFFF',
            fontWeight: isSelected ? 600 : 400,
            textTransform: 'none',
            fontSize: '0.9rem',
            '&:hover': {
              backgroundColor: isSelected ? '#333333' : '#1A1A1A',
            },
          }}
        >
          {category.name}
        </Button>
      );
    })}

    <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #272727', px: 1 }}>
      <Typography variant="body2" sx={{ color: '#717171', fontSize: '0.75rem', lineHeight: 1.5 }}>
        © 2025 YouTube Clone LLC
        <br />
        Built with Vite, React & MUI v5
      </Typography>
    </Box>
  </Stack>
);

export default SidebarContent;
