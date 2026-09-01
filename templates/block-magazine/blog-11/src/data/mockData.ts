import { MOCK_POSTS, MOCK_AUTHORS, MOCK_CATEGORIES } from './mockPosts';
import { Comment } from '../types';

export { MOCK_POSTS, MOCK_AUTHORS, MOCK_CATEGORIES };

export const MOCK_COMMENTS: Comment[] = [
  {
    id: 'comm-1',
    postId: 'post-1',
    authorName: 'Dr. Harrison Wells',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    content: 'This piece captures precisely what modern urban planners overlook. Acoustic isolation is the ultimate luxury of the 21st century.',
    publishedDate: 'August 18, 2026',
    likes: 14
  },
  {
    id: 'comm-2',
    postId: 'post-1',
    authorName: 'Sophie Moreau',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'Remarkable read! I visited Soto’s Kyoto pavilion last autumn and the sensation of absolute quiet stays with you long after you leave.',
    publishedDate: 'August 19, 2026',
    likes: 8
  },
  {
    id: 'comm-3',
    postId: 'post-2',
    authorName: 'Klaus Becker',
    authorAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    content: 'Flat design was always a lazy compromise for low-resolution screens. Glad to see material depth and tactile metaphors making a thoughtful return.',
    publishedDate: 'August 16, 2026',
    likes: 22
  }
];

