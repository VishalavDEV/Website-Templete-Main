import React, { useEffect, useState } from 'react';

export default function GridBackground() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`grid-drawing-layer ${loaded ? 'grid-active' : ''}`}>
      <div className="grid-line vertical line-v-1"></div>
      <div className="grid-line vertical line-v-2"></div>
      <div className="grid-line vertical line-v-3"></div>
      <div className="grid-line horizontal line-h-1"></div>
      <div className="grid-line horizontal line-h-2"></div>

      <style>{`
        .grid-drawing-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .grid-drawing-layer.grid-active {
          opacity: 1;
        }

        .grid-line {
          position: absolute;
          background-color: rgba(20, 20, 20, 0.035);
          transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .grid-line.vertical {
          width: 1px;
          top: 0;
          bottom: 0;
          transform: scaleY(0);
        }

        .grid-line.horizontal {
          height: 1px;
          left: 0;
          right: 0;
          transform: scaleX(0);
        }

        .grid-active .line-v-1 {
          left: 10%;
          transform: scaleY(1);
          transition-delay: 0.1s;
        }

        .grid-active .line-v-2 {
          left: 50%;
          transform: scaleY(1);
          transition-delay: 0.3s;
        }

        .grid-active .line-v-3 {
          left: 90%;
          transform: scaleY(1);
          transition-delay: 0.5s;
        }

        .grid-active .line-h-1 {
          top: 25%;
          transform: scaleX(1);
          transition-delay: 0.2s;
        }

        .grid-active .line-h-2 {
          top: 75%;
          transform: scaleX(1);
          transition-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
