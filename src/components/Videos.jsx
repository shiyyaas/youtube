import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { VideoGridSkeleton } from './Skeletons';

/**
 * Videos container rendering responsive Grid or vertical column stack
 * Handles loading skeleton, video cards, and channel cards seamlessly.
 */
const Videos = ({ videos, direction = 'row', loading = false, skeletonCount = 8 }) => {
  if (loading) {
    return <VideoGridSkeleton count={skeletonCount} />;
  }

  if (!videos || !videos.length) {
    return (
      <Box sx={{ p: 4, textAlign: 'center', width: '100%' }}>
        <Typography variant="h6" color="text.secondary">
          No videos found. Try a different search or category.
        </Typography>
      </Box>
    );
  }

  // If direction is column (used in VideoDetail related videos sidebar)
  if (direction === 'column') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
        {videos.map((item, idx) => (
          <Box key={item?.id?.videoId || item?.id?.channelId || idx}>
            {item?.id?.videoId && <VideoCard video={item} />}
            {item?.id?.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Grid container spacing={2.5}>
      {videos.map((item, idx) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={item?.id?.videoId || item?.id?.channelId || idx}
        >
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
