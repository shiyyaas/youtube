import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { formatCompactNumber } from '../utils/formatters';

/**
 * Modern Channel Card displayed in search results & recommendations
 */
const ChannelCard = ({ channelDetail, marginTop }) => {
  const channelId = channelDetail?.id?.channelId || channelDetail?.id;
  const snippet = channelDetail?.snippet;
  const statistics = channelDetail?.statistics;

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
        marginTop,
      }}
    >
      <Link
        to={channelId ? `/channel/${channelId}` : '/'}
        style={{ textDecoration: 'none', color: '#fff' }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            image={
              snippet?.thumbnails?.high?.url ||
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60'
            }
            alt={snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '140px',
              width: '140px',
              mb: 2,
              border: '2px solid #333333',
              objectFit: 'cover',
              mx: 'auto',
            }}
          />
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
            }}
          >
            {snippet?.title || 'Channel Title'}
            <CheckCircleIcon sx={{ fontSize: '15px', color: '#AAAAAA', ml: '5px' }} />
          </Typography>

          {statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#AAAAAA', mt: 0.5 }}>
              {formatCompactNumber(statistics.subscriberCount)} Subscribers
            </Typography>
          )}

          {snippet?.description && (
            <Typography
              variant="body2"
              sx={{
                color: '#888888',
                mt: 1,
                maxWidth: '300px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {snippet.description}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
