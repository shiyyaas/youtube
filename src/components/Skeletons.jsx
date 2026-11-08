import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Skeleton, Grid } from '@mui/material';

/**
 * Skeleton placeholder for video card during API loading states
 */
export const VideoSkeleton = () => (
  <Card
    sx={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderRadius: 3,
      width: '100%',
    }}
  >
    <Skeleton
      variant="rounded"
      sx={{
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: '#202020',
        borderRadius: 2.5,
      }}
    />
    <Box sx={{ display: 'flex', mt: 1.5, gap: 1.5 }}>
      <Skeleton
        variant="circular"
        width={36}
        height={36}
        sx={{ backgroundColor: '#202020', flexShrink: 0 }}
      />
      <Box sx={{ width: '100%' }}>
        <Skeleton variant="text" width="85%" height={24} sx={{ backgroundColor: '#202020' }} />
        <Skeleton variant="text" width="60%" height={20} sx={{ backgroundColor: '#202020' }} />
        <Skeleton variant="text" width="40%" height={16} sx={{ backgroundColor: '#202020' }} />
      </Box>
    </Box>
  </Card>
);

/**
 * Skeleton placeholder for channel cards
 */
export const ChannelSkeleton = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      p: 3,
    }}
  >
    <Skeleton
      variant="circular"
      width={120}
      height={120}
      sx={{ backgroundColor: '#202020', mb: 2 }}
    />
    <Skeleton variant="text" width={160} height={28} sx={{ backgroundColor: '#202020' }} />
    <Skeleton variant="text" width={100} height={20} sx={{ backgroundColor: '#202020' }} />
  </Box>
);

/**
 * Grid wrapper for rendering multiple video skeletons
 */
export const VideoGridSkeleton = ({ count = 8 }) => (
  <Grid container spacing={2.5}>
    {Array.from({ length: count }).map((_, idx) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
        <VideoSkeleton />
      </Grid>
    ))}
  </Grid>
);
