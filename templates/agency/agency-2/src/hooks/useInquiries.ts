import { useState, useEffect } from 'react';
import { ProjectInquiry } from '../types';
import { getStoredInquiries } from '../services/storage';

export function useInquiries() {
  const [inquiries, setInquiries] = useState<ProjectInquiry[]>([]);

  useEffect(() => {
    setInquiries(getStoredInquiries());

    const handleUpdate = (e: Event) => {
      const custom = e as CustomEvent<ProjectInquiry[]>;
      if (custom.detail) {
        setInquiries(custom.detail);
      } else {
        setInquiries(getStoredInquiries());
      }
    };

    window.addEventListener('valence-inquiries-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('valence-inquiries-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return { inquiries };
}
