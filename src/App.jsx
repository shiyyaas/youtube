import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';

import theme from './theme/theme';
import { Navbar, Sidebar } from './components';
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from './pages';

/**
 * Root Application Component
 * Sets up custom MUI theme provider, persistent responsive navigation, and React Router DOM v6
 */
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Top Navbar */}
          <Navbar onToggleMobileSidebar={handleDrawerToggle} />

          <Routes>
            {/* Feed View with Sidebar */}
            <Route
              path="/"
              element={
                <Box sx={{ display: 'flex', flex: 1 }}>
                  <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    mobileOpen={mobileOpen}
                    onMobileClose={() => setMobileOpen(false)}
                  />
                  <Feed
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </Box>
              }
            />

            {/* Video Detail View */}
            <Route path="/video/:id" element={<VideoDetail />} />

            {/* Channel Detail View */}
            <Route path="/channel/:id" element={<ChannelDetail />} />

            {/* Search Results View */}
            <Route
              path="/search/:searchTerm"
              element={
                <Box sx={{ display: 'flex', flex: 1 }}>
                  <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    mobileOpen={mobileOpen}
                    onMobileClose={() => setMobileOpen(false)}
                  />
                  <SearchFeed />
                </Box>
              }
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
