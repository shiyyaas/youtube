import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import CategoryBar from '../components/CategoryBar';
import Videos from '../components/Videos';

/**
 * Feed (Home Page)
 * Displays horizontal category selection chip bar and responsive video grid.
 */
const Feed = ({ selectedCategory, setSelectedCategory }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching videos in Feed:', error);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <Box sx={{ flex: 1, minWidth: 0, pb: 4 }}>
      {/* Category Pills Bar */}
      <CategoryBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Box sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2.5}
          sx={{
            color: '#FFFFFF',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          {selectedCategory}{' '}
          <span style={{ color: '#FF0000' }}>Videos</span>
        </Typography>

        <Videos videos={videos} loading={loading} skeletonCount={8} />
      </Box>
    </Box>
  );
};

export default Feed;
