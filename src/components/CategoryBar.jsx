import React, { useRef } from 'react';
import { Box, Chip, IconButton, Stack } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { categories } from '../utils/constants';

/**
 * Modern YouTube Horizontal Category Bar with smooth scrolling and chip filters
 */
const CategoryBar = ({ selectedCategory, setSelectedCategory }) => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 65,
        zIndex: 999,
        backgroundColor: '#0F0F0F',
        display: 'flex',
        alignItems: 'center',
        py: 1.2,
        px: { xs: 1, sm: 2 },
        borderBottom: '1px solid #1c1c1c',
      }}
    >
      <IconButton
        onClick={() => handleScroll('left')}
        size="small"
        sx={{
          color: '#FFFFFF',
          mr: 1,
          display: { xs: 'none', sm: 'inline-flex' },
          backgroundColor: '#212121',
          '&:hover': { backgroundColor: '#383838' },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Stack
        ref={scrollRef}
        direction="row"
        spacing={1.2}
        sx={{
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          width: '100%',
        }}
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <Chip
              key={cat.name}
              label={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              clickable
              sx={{
                borderRadius: '8px',
                height: 32,
                px: 1,
                fontSize: '0.875rem',
                backgroundColor: isSelected ? '#FFFFFF' : '#272727',
                color: isSelected ? '#000000' : '#FFFFFF',
                fontWeight: isSelected ? 600 : 400,
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: isSelected ? '#F1F1F1' : '#3D3D3D',
                },
              }}
            />
          );
        })}
      </Stack>

      <IconButton
        onClick={() => handleScroll('right')}
        size="small"
        sx={{
          color: '#FFFFFF',
          ml: 1,
          display: { xs: 'none', sm: 'inline-flex' },
          backgroundColor: '#212121',
          '&:hover': { backgroundColor: '#383838' },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default CategoryBar;
