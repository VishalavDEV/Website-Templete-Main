import React from 'react';

export function TwitterIcon({ size = 16, color = 'currentColor', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, color = 'currentColor', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GithubIcon({ size = 16, color = 'currentColor', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function DiscordIcon({ size = 16, color = 'currentColor', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M18.5 5.5A16.5 16.5 0 0 0 14.5 4.2a.5.5 0 0 0-.5.2c-.2.4-.4.8-.6 1.3a15.4 15.4 0 0 0-4.8 0c-.2-.5-.4-.9-.6-1.3a.5.5 0 0 0-.5-.2 16.5 16.5 0 0 0-4 1.3.5.5 0 0 0-.2.4c-2.4 8.7-.3 15.3-.2 15.5a.5.5 0 0 0 .3.4 16.5 16.5 0 0 0 5 2.5.5.5 0 0 0 .5-.2c.4-.6.8-1.2 1.1-1.9a.5.5 0 0 0-.3-.7 10.8 10.8 0 0 1-1.7-.8.5.5 0 0 1 0-.8c.1-.1.3-.2.4-.3a11.8 11.8 0 0 0 10.4 0c.1.1.3.2.4.3a.5.5 0 0 1 0 .8c-.5.3-1.1.6-1.7.8a.5.5 0 0 0-.3.7c.3.7.7 1.3 1.1 1.9a.5.5 0 0 0 .5.2 16.5 16.5 0 0 0 5-2.5.5.5 0 0 0 .3-.4c.5-3.8.3-9.5-.2-15.5a.5.5 0 0 0-.2-.4z" />
      <circle cx="8.5" cy="13.5" r="1.5" fill={color} />
      <circle cx="15.5" cy="13.5" r="1.5" fill={color} />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, color = 'currentColor', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" fill={color} />
    </svg>
  );
}
