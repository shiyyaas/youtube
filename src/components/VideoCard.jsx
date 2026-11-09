import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { formatTimeAgo } from '../utils/formatters';

/**
 * Modern YouTube Video Card
 * Features:
 * - 16:9 thumbnail ratio with hover zoom effect
 * - Responsive typography
 * - Channel avatar and verified badge
 * - Upload time indicator
 */
const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId || video?.id;
  const snippet = video?.snippet;

  const thumbnail =
    snippet?.thumbnails?.high?.url ||
    snippet?.thumbnails?.medium?.url ||
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60';

  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : '/'} style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            overflow: 'hidden',
            borderRadius: 2.5,
            backgroundColor: '#1E1E1E',
          }}
        >
          <CardMedia
            component="img"
            image={thumbnail}
            alt={snippet?.title || 'Video Thumbnail'}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
        </Box>
      </Link>

      <CardContent sx={{ p: '12px 4px 8px 4px !important' }}>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Link
            to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '/'}
            style={{ textDecoration: 'none' }}
          >
            <Avatar
              alt={snippet?.channelTitle}
              src={`https://api.dicebear.com/7.x/identicon/svg?seed=${snippet?.channelTitle || 'channel'}`}
              sx={{ width: 36, height: 36 }}
            />
          </Link>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Link
              to={videoId ? `/video/${videoId}` : '/'}
              style={{ textDecoration: 'none', color: '#F1F1F1' }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  lineHeight: 1.3,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: '#F1F1F1',
                  mb: 0.5,
                  '&:hover': { color: '#3EA6FF' },
                }}
              >
                {snippet?.title || 'Video Title'}
              </Typography>
            </Link>

            <Link
              to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '/'}
              style={{
                textDecoration: 'none',
                color: '#AAAAAA',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.8rem',
                  color: '#AAAAAA',
                  '&:hover': { color: '#FFFFFF' },
                }}
              >
                {snippet?.channelTitle || 'Channel Name'}
              </Typography>
              <CheckCircleIcon sx={{ fontSize: '13px', color: '#AAAAAA', ml: '4px' }} />
            </Link>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mt: 0.2 }}>
              <Typography variant="body2" sx={{ fontSize: '0.78rem', color: '#AAAAAA' }}>
                {snippet?.publishedAt ? formatTimeAgo(snippet.publishedAt) : 'Recently uploaded'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
