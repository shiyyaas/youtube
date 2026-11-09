import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

/**
 * SearchBar component with controlled state and intuitive keyboard submission
 */
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      role="search"
      sx={{
        borderRadius: '40px',
        border: '1px solid #303030',
        backgroundColor: '#121212',
        display: 'flex',
        alignItems: 'center',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 2, xs: 1 },
        width: { xs: '180px', sm: '320px', md: '480px' },
        transition: 'border-color 0.2s ease',
        '&:hover, &:focus-within': {
          borderColor: '#1c62b9',
        },
      }}
    >
      <InputBase
        className="search-bar"
        placeholder="Search videos, channels..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        inputProps={{ 'aria-label': 'search videos' }}
        sx={{
          flex: 1,
          color: '#fff',
          fontSize: '0.95rem',
        }}
      />
      <IconButton
        type="submit"
        aria-label="search"
        sx={{
          p: '8px 16px',
          color: '#AAAAAA',
          borderLeft: '1px solid #303030',
          borderRadius: '0 40px 40px 0',
          backgroundColor: '#222222',
          '&:hover': {
            backgroundColor: '#303030',
            color: '#FFFFFF',
          },
        }}
      >
        <SearchIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
