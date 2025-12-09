// src/components/PageHeader.jsx
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Avatar from "@mui/material/Avatar";
import logo from "../assets/youtubelogo.png"

/**
 * PageHeader
 * Props:
 *  - onSearch: function(searchText) => void   // optional callback when user submits search
 *  - className: string                        // optional extra classes
 */
export default function PageHeader({ onSearch, className = "" }) {
  const [query, setQuery] = useState("");

  function submitSearch(e) {
    e?.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    if (typeof onSearch === "function") onSearch(trimmed);
    // fallback: simple client-side navigation if you want (uncomment)
    // window.location.hash = `#/search/${encodeURIComponent(trimmed)}`;
  }

  return (
    <header
      className={`w-full flex items-center justify-between px-3 md:px-6 py-2 bg-[#0f0f0f] text-white border-b border-[#222] ${className}`}
    >
      {/* LEFT */}
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <button
          aria-label="menu"
          className="p-2 rounded hover:bg-white/5 transition"
          type="button"
        >
          <MenuIcon fontSize="small" />
        </button>

        <a href="/" className="flex items-center gap-2 shrink-0">
          {/* replace /logo.png with your logo path */}
          <img src={logo} alt="logo" className="w-20 md:w-24 h-auto" />
          <span className="hidden md:inline-block text-xs text-gray-400 -mt-1">IN</span>
        </a>
      </div>

      {/* CENTER - search */}
      <form
        onSubmit={submitSearch}
        className="flex items-center flex-1 max-w-2xl px-2 md:px-4 mx-4 md:mx-6"
        role="search"
      >
        <div className="flex items-center w-full bg-[#121212] border border-[#333] rounded-full overflow-hidden">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            aria-label="Search"
            className="flex-1 px-4 py-2 bg-transparent text-sm md:text-base placeholder:text-gray-400 focus:outline-none"
          />

          <button
            type="submit"
            aria-label="search"
            className="px-4 py-2 border-l border-[#333] hover:bg-white/5 transition shrink-0"
          >
            <SearchIcon />
          </button>
        </div>

        <button
          type="button"
          className="ml-3 p-2 rounded-full hover:bg-white/5 transition shrink-0"
          aria-label="voice search"
          onClick={() => {
            /* optional voice search hook */
            // console.log("voice search clicked");
          }}
        >
          <MicIcon />
        </button>
      </form>

      {/* RIGHT */}
      <div className="flex items-center gap-3 md:gap-4">
        <button
          type="button"
          className="hidden sm:inline-flex items-center gap-2 bg-[#272727] px-3 py-1 rounded-full text-sm hover:bg-[#2e2e2e] transition"
        >
          <VideoCallIcon fontSize="small" />
          <span className="font-medium">Create</span>
        </button>

        <button
          type="button"
          aria-label="notifications"
          className="p-2 rounded-full hover:bg-white/5 transition"
        >
          <NotificationsNoneIcon />
        </button>

        <Avatar
          alt="user"
          src="https://i.pravatar.cc/40"
          sx={{ width: 34, height: 34 }}
        />
      </div>
    </header>
  );
}
