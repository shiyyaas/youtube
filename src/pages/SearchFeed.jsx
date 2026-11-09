import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from '../components/Videos';

/**
 * SearchFeed Page
 * Renders search query responses cleanly with responsive grid/list layout adapter.
 */
const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: '95vh', flex: 1 }}>
      <Typography
        variant="h5"
        fontWeight={700}
        mb={3}
        sx={{
          color: '#FFFFFF',
          fontSize: { xs: '1.25rem', sm: '1.5rem' },
        }}
      >
        Search Results for{' '}
        <span style={{ color: '#FF0000' }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} loading={loading} skeletonCount={8} />
    </Box>
  );
};

export default SearchFeed;
