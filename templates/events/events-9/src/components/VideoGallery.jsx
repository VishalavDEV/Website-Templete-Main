import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div>
      <div className="video-grid">
        {weddingData.videoGallery.map((video) => (
          <div 
            key={video.id} 
            className="video-card"
            onClick={() => setActiveVideo(video)}
          >
            <div className="video-thumb-wrap">
              <img src={video.thumbnail} alt={video.title} className="video-thumb" />
              <div className="video-play-btn">
                <Play size={22} fill="var(--cream)" />
              </div>
            </div>
            <div className="video-info">
              <h4 className="video-title">{video.title}</h4>
              <span className="video-duration">{video.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {/* VIDEO PREVIEW MODAL */}
      {activeVideo && (
        <div className="lightbox-modal" onClick={() => setActiveVideo(null)}>
          <button className="lightbox-close" onClick={() => setActiveVideo(null)}>
            <X size={32} />
          </button>
          <div className="lightbox-content" style={{ width: '90%', maxWidth: '900px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#000' }}>
              <video
                controls
                autoPlay
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                poster={activeVideo.thumbnail}
              >
                <source src="/videos/wedding-celebration.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
            <h3 className="serif-title" style={{ color: 'var(--cream)', marginTop: '1.2rem', textAlign: 'center' }}>
              {activeVideo.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
