import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ScienceIcon from '@mui/icons-material/Science';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categories = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'Trending', icon: <WhatshotIcon /> },
  { name: 'Coding', icon: <CodeIcon /> },
  { name: 'ReactJS', icon: <DeveloperModeIcon /> },
  { name: 'NextJS', icon: <CodeIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon /> },
  { name: 'Movie', icon: <OndemandVideoIcon /> },
  { name: 'Gaming', icon: <SportsEsportsIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> },
  { name: 'Sport', icon: <FitnessCenterIcon /> },
  { name: 'Science', icon: <ScienceIcon /> },
  { name: 'Comedy', icon: <TheaterComedyIcon /> },
  { name: 'Crypto', icon: <DeveloperModeIcon /> },
];

/**
 * High-quality fallback mock data in YouTube v3 API format
 * Ensures rich, realistic, zero-breakage rendering even when offline,
 * when no RapidAPI key is set, or if API quota limit is reached.
 */
export const mockVideos = [
  {
    id: { kind: 'youtube#video', videoId: 'kJQP7kiw5Fk' },
    snippet: {
      publishedAt: '2023-11-15T12:00:00Z',
      channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
      title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
      description: '“Despacito” disponible ya en todas las plataformas digitales: https://UMLE.lnk.to/DespacitoFp',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 450,
        },
      },
      channelTitle: 'Luis Fonsi',
      liveBroadcastContent: 'none',
    },
  },
  {
    id: { kind: 'youtube#video', videoId: 'dQw4w9WgXcQ' },
    snippet: {
      publishedAt: '2023-10-24T15:30:00Z',
      channelId: 'UC38IQsAvIsxx3j24GNP23Ag',
      title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      description: 'The official video for “Never Gonna Give You Up” by Rick Astley. Remastered in 4K.',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 450,
        },
      },
      channelTitle: 'Rick Astley',
      liveBroadcastContent: 'none',
    },
  },
  {
    id: { kind: 'youtube#video', videoId: 'bMknfKXIFA8' },
    snippet: {
      publishedAt: '2024-01-10T10:00:00Z',
      channelId: 'UCWv7vMbMWH4-V0ZXdm8mkDQ',
      title: 'Full Stack React & Node.js Application Tutorial - Modern Web Development',
      description: 'Learn how to build a full stack production-ready web application using React, Vite, Node.js, and Material UI.',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 450,
        },
      },
      channelTitle: 'JavaScript Mastery',
      liveBroadcastContent: 'none',
    },
  },
  {
    id: { kind: 'youtube#video', videoId: 'f02mOEt11OQ' },
    snippet: {
      publishedAt: '2024-02-14T08:15:00Z',
      channelId: 'UCfbNksTJMcGgQeys30at-vg',
      title: 'Next.js 14 Complete Course - App Router, Server Actions & Tailwind CSS',
      description: 'Master Next.js 14 from zero to production. Deep dive into React Server Components, server actions, caching, and deployment.',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 450,
        },
      },
      channelTitle: 'Code With Antonio',
      liveBroadcastContent: 'none',
    },
  },
  {
    id: { kind: 'youtube#channel', channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw' },
    snippet: {
      publishedAt: '2012-05-18T10:00:00Z',
      channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
      title: 'Luis Fonsi Official Channel',
      description: 'Welcome to the official Luis Fonsi YouTube Channel. Subscribe for music videos, live performances, and behind the scenes.',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 800,
        },
      },
      channelTitle: 'Luis Fonsi',
    },
  },
  {
    id: { kind: 'youtube#video', videoId: '7wtfhZwyrcc' },
    snippet: {
      publishedAt: '2024-03-01T14:00:00Z',
      channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
      title: 'Building Modern Responsive Web Apps with MUI v5 & Material Design 3',
      description: 'A comprehensive guide on styling React applications with Material UI v5, responsive breakpoints, theme overrides, and sx props.',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 450,
        },
      },
      channelTitle: 'FreeCodeCamp.org',
      liveBroadcastContent: 'none',
    },
  },
  {
    id: { kind: 'youtube#video', videoId: 'PkZNo7MFNFg' },
    snippet: {
      publishedAt: '2024-03-18T18:20:00Z',
      channelId: 'UCsBjURrPoezykLs9EqgamOA',
      title: 'Unreal Engine 5.4 - Next-Gen Graphics & Photorealism Showcase',
      description: 'Explore the newest features in Unreal Engine 5.4 including Nanite Tessellation, Lumen enhancements, and Neural Rendering.',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 450,
        },
      },
      channelTitle: 'Unreal Engine Gaming',
      liveBroadcastContent: 'none',
    },
  },
  {
    id: { kind: 'youtube#video', videoId: 'e-ORhEE9VVg' },
    snippet: {
      publishedAt: '2024-03-22T19:00:00Z',
      channelId: 'UCzoVCacndDCfGD74IfGzFtw',
      title: 'Chill Lofi Beats To Study / Work / Relax To - 24/7 Radio',
      description: 'Relaxing ambient beats for coding, studying, deep work, and relaxation. Continuous peaceful melodies.',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 450,
        },
      },
      channelTitle: 'Lofi Girl Live',
      liveBroadcastContent: 'none',
    },
  },
  {
    id: { kind: 'youtube#video', videoId: 'G3e-cpL7ofc' },
    snippet: {
      publishedAt: '2024-04-02T11:45:00Z',
      channelId: 'UC29ju8bIPH5as8OGnQzwJyA',
      title: 'Cybersecurity Masterclass: How Web Attacks Work and How to Prevent Them',
      description: 'Explore penetration testing, JWT security, SQL injection defenses, and cross-site scripting (XSS) mitigation tactics.',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 450,
        },
      },
      channelTitle: 'NetworkChuck',
      liveBroadcastContent: 'none',
    },
  },
  {
    id: { kind: 'youtube#video', videoId: 'tO01J-M3g0U' },
    snippet: {
      publishedAt: '2024-04-10T16:10:00Z',
      channelId: 'UCvjgXvBlbQiydffZU7m1_aw',
      title: 'Top 10 Quantum Computing Breakthroughs in 2024',
      description: 'From quantum coherence time records to topological qubits and quantum error correction, here are the year’s top milestones.',
      thumbnails: {
        high: {
          url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
          width: 800,
          height: 450,
        },
      },
      channelTitle: 'The Coding Train',
      liveBroadcastContent: 'none',
    },
  },
];

export const mockChannelDetail = {
  id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  snippet: {
    title: 'Luis Fonsi Official',
    description: 'Welcome to the official Luis Fonsi YouTube Channel. Stream multi-platinum hits, concert footage, and official music videos.',
    customUrl: '@luisfonsiofficial',
    publishedAt: '2012-05-18T10:00:00Z',
    thumbnails: {
      high: {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60',
      },
    },
  },
  brandingSettings: {
    image: {
      bannerExternalUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1600&auto=format&fit=crop&q=80',
    },
  },
  statistics: {
    viewCount: '15400234190',
    subscriberCount: '31500000',
    videoCount: '184',
  },
};

export const mockVideoDetail = {
  id: 'kJQP7kiw5Fk',
  snippet: {
    publishedAt: '2023-11-15T12:00:00Z',
    channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
    title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
    description: `“Despacito” disponible ya en todas las plataformas digitales: https://UMLE.lnk.to/DespacitoFp

Produced by Andrés Torres and Mauricio Rengifo
Directed by Carlos Perez (Elastic People)
Featuring Daddy Yankee
Starring Zuleyka Rivera

Subscribe to Luis Fonsi for new music releases and tour dates.`,
    channelTitle: 'Luis Fonsi',
    tags: ['Luis Fonsi', 'Despacito', 'Daddy Yankee', 'Latin Pop', 'Reggaeton'],
  },
  statistics: {
    viewCount: '8490300120',
    likeCount: '52400192',
    commentCount: '4231908',
  },
};
