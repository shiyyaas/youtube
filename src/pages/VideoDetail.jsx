import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {
  Box,
  Typography,
  Stack,
  Button,
  Avatar,
  Divider,
  Paper,
  Chip,
  Skeleton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from '../components/Videos';
import { formatCompactNumber, formatTimeAgo } from '../utils/formatters';

/**
 * VideoDetail (Watch Page)
 * Two-column responsive desktop layout:
 * - Left column: ReactPlayer video player, title, channel info, expandable description
 * - Right column: Vertical list of related/recommended videos
 */
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setIsDescExpanded(false);
    window.scrollTo(0, 0);

    // Fetch video details (part=snippet,statistics)
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data?.items?.[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching video detail:', err);
        setLoading(false);
      });

    // Fetch related/recommended videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setRelatedVideos(data.items || []);
      })
      .catch((err) => {
        console.error('Error fetching related videos:', err);
      });
  }, [id]);

  const snippet = videoDetail?.snippet;
  const statistics = videoDetail?.statistics;

  return (
    <Box sx={{ minHeight: '95vh', p: { xs: 1.5, sm: 3 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        {/* Left Column: Video Player & Details */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* ReactPlayer Container */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%', // 16:9 aspect ratio
              borderRadius: 3,
              overflow: 'hidden',
              backgroundColor: '#000000',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              playing
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </Box>

          {/* Video Title */}
          {loading ? (
            <Skeleton variant="text" width="75%" height={40} sx={{ mt: 2 }} />
          ) : (
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: '#F1F1F1', mt: 2, fontSize: { xs: '1.1rem', sm: '1.4rem' } }}
            >
              {snippet?.title || 'Video Title'}
            </Typography>
          )}

          {/* Channel Row & Engagement Actions */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            gap={2}
            py={1.5}
          >
            {/* Channel info */}
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Link
                to={snippet?.channelId ? `/channel/${snippet.channelId}` : '/'}
                style={{ textDecoration: 'none' }}
              >
                <Avatar
                  alt={snippet?.channelTitle}
                  src={`https://api.dicebear.com/7.x/identicon/svg?seed=${snippet?.channelTitle || 'channel'}`}
                  sx={{ width: 44, height: 44 }}
                />
              </Link>
              <Box>
                <Link
                  to={snippet?.channelId ? `/channel/${snippet.channelId}` : '/'}
                  style={{
                    textDecoration: 'none',
                    color: '#F1F1F1',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    {snippet?.channelTitle}
                  </Typography>
                  <CheckCircleIcon sx={{ fontSize: '14px', color: '#AAAAAA', ml: 0.5 }} />
                </Link>
                <Typography variant="body2" sx={{ color: '#AAAAAA', fontSize: '0.8rem' }}>
                  1.2M subscribers
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: '20px',
                  fontWeight: 600,
                  px: 2.2,
                  ml: { xs: 0, sm: 2 },
                  '&:hover': { backgroundColor: '#E5E5E5' },
                }}
              >
                Subscribe
              </Button>
            </Stack>

            {/* Actions: Likes, Share, Save */}
            <Stack direction="row" alignItems="center" spacing={1} sx={{ flexWrap: 'wrap' }}>
              <Chip
                icon={<ThumbUpOutlinedIcon sx={{ fontSize: '18px !important' }} />}
                label={statistics?.likeCount ? formatCompactNumber(statistics.likeCount) : 'Like'}
                clickable
                sx={{ backgroundColor: '#272727', color: '#fff', '&:hover': { backgroundColor: '#383838' } }}
              />
              <Chip
                icon={<ShareOutlinedIcon sx={{ fontSize: '18px !important' }} />}
                label="Share"
                clickable
                sx={{ backgroundColor: '#272727', color: '#fff', '&:hover': { backgroundColor: '#383838' } }}
              />
              <Chip
                icon={<ContentCutOutlinedIcon sx={{ fontSize: '18px !important' }} />}
                label="Clip"
                clickable
                sx={{ display: { xs: 'none', sm: 'inline-flex' }, backgroundColor: '#272727', color: '#fff' }}
              />
              <Chip
                icon={<BookmarkBorderOutlinedIcon sx={{ fontSize: '18px !important' }} />}
                label="Save"
                clickable
                sx={{ backgroundColor: '#272727', color: '#fff' }}
              />
            </Stack>
          </Stack>

          {/* Expandable Description Box */}
          <Paper
            onClick={() => setIsDescExpanded(!isDescExpanded)}
            sx={{
              p: 2,
              mt: 1.5,
              borderRadius: 3,
              backgroundColor: '#272727',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              '&:hover': { backgroundColor: '#333333' },
            }}
          >
            <Stack direction="row" spacing={1.5} mb={1}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#FFFFFF' }}>
                {statistics?.viewCount ? `${parseInt(statistics.viewCount, 10).toLocaleString()} views` : '1,234,567 views'}
              </Typography>
              <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#AAAAAA' }}>
                {snippet?.publishedAt ? formatTimeAgo(snippet.publishedAt) : 'Recently'}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: '#E0E0E0',
                whiteSpace: 'pre-line',
                lineHeight: 1.6,
                display: isDescExpanded ? 'block' : '-webkit-box',
                WebkitLineClamp: isDescExpanded ? 'none' : 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {snippet?.description || 'No description provided.'}
            </Typography>

            <Typography
              variant="caption"
              fontWeight={600}
              sx={{ color: '#3EA6FF', mt: 1, display: 'inline-block' }}
            >
              {isDescExpanded ? 'Show less' : '...more'}
            </Typography>
          </Paper>
        </Box>

        {/* Right Column: Related Videos */}
        <Box
          sx={{
            width: { xs: '100%', md: '360px', lg: '400px' },
            flexShrink: 0,
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: '#fff' }}>
            Related Videos
          </Typography>
          <Videos videos={relatedVideos} direction="column" loading={false} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
