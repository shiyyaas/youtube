// src/components/Sidebar.jsx
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

/**
 * Sidebar
 * Props:
 *  - className: string (optional extra classes)
 *  - collapsed: boolean (optional, if true render narrow icons-only sidebar)
 */
export default function Sidebar({ className = "", collapsed = false }) {
  const items = [
    { key: "home", label: "Home", icon: <HomeIcon fontSize="small" /> },
    { key: "explore", label: "Explore", icon: <ExploreIcon fontSize="small" /> },
    { key: "trending", label: "Trending", icon: <WhatshotIcon fontSize="small" /> },
    { key: "subscriptions", label: "Subscriptions", icon: <SubscriptionsIcon fontSize="small" /> },
    { key: "library", label: "Library", icon: <VideoLibraryIcon fontSize="small" /> },
    { key: "history", label: "History", icon: <HistoryIcon fontSize="small" /> },
  ];

  const misc = [
    { key: "settings", label: "Settings", icon: <SettingsIcon fontSize="small" /> },
    { key: "help", label: "Help", icon: <HelpOutlineIcon fontSize="small" /> },
  ];

  return (
    <aside
      className={`bg-[#0b0b0b] text-white h-screen sticky top-0  border-r border-[#171717] ${className}`}
      style={{ minWidth: collapsed ? 72 : 240 }}
    >
      <nav className="flex flex-col py-3">
        {/* Primary items */}
        <ul className="flex flex-col gap-1 px-1">
          {items.map((it) => (
            <li key={it.key}>
              <button
                type="button"
                className={`w-full flex items-center gap-4 px-3 py-2 rounded hover:bg-white/5 transition text-sm ${
                  collapsed ? "justify-center" : ""
                }`}
              >
                <span className="flex-shrink-0 text-gray-300">{it.icon}</span>
                {!collapsed && <span className="truncate">{it.label}</span>}
              </button>
            </li>
          ))}
        </ul>

        <hr className="my-2 border-[#161616]" />

        {/* Library/Subscriptions block */}
        <div className="px-1">
          <h3 className={`px-3 mb-1 text-xs uppercase text-gray-400 ${collapsed ? "sr-only" : ""}`}>
            Your library
          </h3>

          <ul className="flex flex-col gap-1">
            <li>
              <button className={`w-full flex items-center gap-4 px-3 py-2 rounded hover:bg-white/5 transition ${collapsed ? "justify-center" : ""}`}>
                <VideoLibraryIcon fontSize="small" />
                {!collapsed && <span>Playlists</span>}
              </button>
            </li>

            <li>
              <button className={`w-full flex items-center gap-4 px-3 py-2 rounded hover:bg-white/5 transition ${collapsed ? "justify-center" : ""}`}>
                <HistoryIcon fontSize="small" />
                {!collapsed && <span>Watch later</span>}
              </button>
            </li>
          </ul>
        </div>

        <hr className="my-2 border-[#161616]" />

        {/* Misc */}
        <ul className="flex flex-col gap-1 px-1 mt-2">
          {misc.map((it) => (
            <li key={it.key}>
              <button
                type="button"
                className={`w-full flex items-center gap-4 px-3 py-2 rounded hover:bg-white/5 transition text-sm ${collapsed ? "justify-center" : ""}`}
              >
                <span className="flex-shrink-0 text-gray-300">{it.icon}</span>
                {!collapsed && <span className="truncate">{it.label}</span>}
              </button>
            </li>
          ))}
        </ul>

        <div className={`px-3 mt-4 text-xs text-gray-500 ${collapsed ? "sr-only" : ""}`}>
          <p className="mb-2">Made with ❤️ — YourTube clone</p>
        </div>
      </nav>
    </aside>
  );
}
