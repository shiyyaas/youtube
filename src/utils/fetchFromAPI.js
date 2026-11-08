import axios from 'axios';
import { mockVideos, mockChannelDetail, mockVideoDetail } from './constants';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': rapidApiKey || '',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

/**
 * Filter and adapt mock data to match YouTube API endpoint queries
 * when rapidApiKey is empty or request encounters rate limit / network error.
 */
const getMockResponseForUrl = (url) => {
  if (url.includes('channels')) {
    return {
      kind: 'youtube#channelListResponse',
      items: [mockChannelDetail],
    };
  }

  if (url.includes('videos?part=snippet,statistics')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    const id = urlParams.get('id');
    const matched = mockVideos.find((v) => v?.id?.videoId === id);
    return {
      kind: 'youtube#videoListResponse',
      items: [
        matched
          ? {
              ...mockVideoDetail,
              id: matched.id.videoId,
              snippet: {
                ...mockVideoDetail.snippet,
                title: matched.snippet.title,
                channelTitle: matched.snippet.channelTitle,
                channelId: matched.snippet.channelId,
                description: matched.snippet.description,
              },
            }
          : mockVideoDetail,
      ],
    };
  }

  // Handle search or general video list endpoints
  const urlParams = new URLSearchParams(url.includes('?') ? url.split('?')[1] : '');
  const query = urlParams.get('q')?.toLowerCase() || '';

  if (query) {
    const filtered = mockVideos.filter((item) => {
      const title = item.snippet?.title?.toLowerCase() || '';
      const desc = item.snippet?.description?.toLowerCase() || '';
      const channel = item.snippet?.channelTitle?.toLowerCase() || '';
      return title.includes(query) || desc.includes(query) || channel.includes(query);
    });

    return {
      kind: 'youtube#searchListResponse',
      items: filtered.length > 0 ? filtered : mockVideos,
    };
  }

  return {
    kind: 'youtube#searchListResponse',
    items: mockVideos,
  };
};

/**
 * Centralized API fetch utility using Axios
 * Automatically falls back to mock responses if no API key is provided
 * or if RapidAPI returns error / rate-limiting (429/403).
 *
 * @param {string} url - Query endpoint path (e.g. `search?part=snippet&q=Coding`)
 * @returns {Promise<any>} API response data
 */
export const fetchFromAPI = async (url) => {
  // If no API key is supplied, immediately deliver mock response gracefully
  if (!rapidApiKey || rapidApiKey.trim() === '') {
    // Add small simulated delay for realistic skeleton UI feel
    await new Promise((resolve) => setTimeout(resolve, 250));
    return getMockResponseForUrl(url);
  }

  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.warn(
      `[RapidAPI YouTube] Request to "${url}" failed (${error?.message}). Falling back to cached mock data.`,
      error
    );
    // Graceful fallback prevents application crash
    return getMockResponseForUrl(url);
  }
};
