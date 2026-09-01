import React, { useEffect, useState } from 'react';

const CHAPTERS = [
  { id: 'hero', num: '01 / 09' },
  { id: 'introduction', num: '01 / 09' },
  { id: 'the-house', num: '02 / 09' },
  { id: 'dishes', num: '03 / 09' },
  { id: 'fire-kitchen', num: '04 / 09' },
  { id: 'people', num: '05 / 09' },
  { id: 'experiences', num: '06 / 09' },
  { id: 'journal', num: '07 / 09' },
  { id: 'reservation', num: '08 / 09' },
  { id: 'contact', num: '09 / 09' },
];

export const ChapterCounter: React.FC = () => {
  const [chapterNum, setChapterNum] = useState('01 / 09');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = CHAPTERS.find((c) => c.id === entry.target.id);
            if (match) {
              setChapterNum(match.num);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="chapter-counter-fixed" id="chapterCounter">
      {chapterNum}
    </div>
  );
};

export default ChapterCounter;
