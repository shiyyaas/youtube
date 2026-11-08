import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography, Avatar, Button, Stack, Tabs, Tab } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from '../components/Videos';
import { formatCompactNumber } from '../utils/formatters';

/**
 * ChannelDetail Page
 * Displays channel banner, avatar, subscriber count, verification badge, and channel uploads grid.
 */
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);

    // Fetch channel profile & statistics
    fetchFromAPI(`channels?part=snippet,statistics,brandingSettings&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items?.[0] || null);
      })
      .catch((err) => {
        console.error('Error fetching channel details:', err);
      });

    // Fetch videos uploaded by channel
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching channel videos:', err);
        setLoading(false);
      });
  }, [id]);

  const snippet = channelDetail?.snippet;
  const statistics = channelDetail?.statistics;
  const banner =
    channelDetail?.brandingSettings?.image?.bannerExternalUrl ||
    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';

  return (
    <Box sx={{ minHeight: '95vh', pb: 5 }}>
      {/* Channel Banner */}
      <Box
        sx={{
          background: banner.startsWith('http') ? `url(${banner}) center/cover no-repeat` : banner,
          zIndex: 10,
          height: { xs: '140px', sm: '200px', md: '280px' },
          width: '100%',
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        {/* Channel Header Information */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          sx={{ mt: { xs: -4, sm: -5 }, mb: 3 }}
        >
          <Avatar
            src={
              snippet?.thumbnails?.high?.url ||
              `https://api.dicebear.com/7.x/identicon/svg?seed=${snippet?.title || 'channel'}`
            }
            alt={snippet?.title}
            sx={{
              width: { xs: 100, sm: 140, md: 160 },
              height: { xs: 100, sm: 140, md: 160 },
              border: '4px solid #0F0F0F',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            }}
          />

          <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, flex: 1 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: '#fff',
                fontSize: { xs: '1.4rem', sm: '2rem' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'flex-start' },
              }}
            >
              {snippet?.title || 'Channel Name'}
              <CheckCircleIcon sx={{ fontSize: '20px', color: '#AAAAAA', ml: 1 }} />
            </Typography>

            <Typography variant="body2" sx={{ color: '#AAAAAA', mt: 0.5, fontSize: '0.9rem' }}>
              {snippet?.customUrl || '@channel'} •{' '}
              {statistics?.subscriberCount ? formatCompactNumber(statistics.subscriberCount) : '1.5M'}{' '}
              subscribers •{' '}
              {statistics?.videoCount ? statistics.videoCount : '120'} videos
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#BBBBBB',
                mt: 1,
                maxWidth: '650px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {snippet?.description || 'Welcome to our official YouTube channel.'}
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{ mt: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}
            >
              <Button
                variant="contained"
                startIcon={<NotificationsActiveOutlinedIcon />}
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: '24px',
                  fontWeight: 600,
                  px: 3,
                  '&:hover': { backgroundColor: '#E5E5E5' },
                }}
              >
                Subscribed
              </Button>
            </Stack>
          </Box>
        </Stack>

        {/* Channel Navigation Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: '#272727', mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={(e, newVal) => setTabValue(newVal)}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab label="Home" sx={{ textTransform: 'none', fontWeight: 600, fontSize: '0.95rem' }} />
            <Tab label="Videos" sx={{ textTransform: 'none', fontWeight: 600, fontSize: '0.95rem' }} />
            <Tab label="Playlists" sx={{ textTransform: 'none', fontWeight: 600, fontSize: '0.95rem' }} />
            <Tab label="Community" sx={{ textTransform: 'none', fontWeight: 600, fontSize: '0.95rem' }} />
          </Tabs>
        </Box>

        {/* Uploaded Videos Grid */}
        <Box>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#FFFFFF', mb: 2 }}>
            Uploads
          </Typography>
          <Videos videos={videos} loading={loading} skeletonCount={8} />
        </Box>
      </Container>
    </Box>
  );
};

export default ChannelDetail;
