import React from 'react';
import { ReadingToolbar } from './ReadingToolbar';

export function ShareBar({ article, onScrollToComments }) {
  return <ReadingToolbar article={article} onScrollToComments={onScrollToComments} />;
}
