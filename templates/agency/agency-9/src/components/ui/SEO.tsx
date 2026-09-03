import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'OFFGRID® — We Make Brands Impossible To Ignore',
  description = 'OFFGRID is an independent creative agency building brands, digital experiences, and ideas that move culture forward.'
}) => {
  useEffect(() => {
    document.title = title.includes('OFFGRID') ? title : `${title} | OFFGRID®`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
