/**
 * Format ISO 8601 published date into relative time (e.g., '2 days ago', '3 months ago')
 * @param {string} dateString
 * @returns {string}
 */
export const formatTimeAgo = (dateString) => {
  if (!dateString) return '';
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 60) return 'just now';
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}d ago`;
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths}mo ago`;
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}y ago`;
};

/**
 * Format large counts into compact notations (e.g. 1.2M, 450K)
 * @param {number|string} count
 * @returns {string}
 */
export const formatCompactNumber = (count) => {
  if (!count) return '0';
  const num = typeof count === 'string' ? parseInt(count, 10) : count;
  if (isNaN(num)) return '0';
  return Intl.NumberFormat('en', { notation: 'compact' }).format(num);
};
