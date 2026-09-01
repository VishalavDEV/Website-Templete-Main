import React from 'react';
import { Avatar } from '../../ui/Avatar';

export function UserAvatar({ src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', name = 'Jane Doe' }) {
  return <Avatar src={src} name={name} isOnline size="md" />;
}
