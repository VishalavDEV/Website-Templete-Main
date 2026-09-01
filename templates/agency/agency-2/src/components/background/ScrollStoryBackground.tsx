import React, { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { ProceduralVisualEngine } from './ProceduralVisualEngine';

type VideoState =
  | 'LOADING'
  | 'POSTER'
  | 'VIDEO_READY'
  | 'FRAME_CACHE_LOADING'
  | 'FRAME_CACHE_READY'
  | 'ERROR_FALLBACK';

export const ScrollStoryBackground: React.FC = () => {
  const { progress } = useScrollProgress();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const engineRef = useRef<ProceduralVisualEngine | null>(null);

  const [state, setState] = useState<VideoState>('POSTER');
  const cachedFrames = useRef<(ImageBitmap | HTMLCanvasElement)[]>([]);
  const isVideoLoaded = useRef(false);

  // Initialize Canvas Visual Engine
  useEffect(() => {
    if (!canvasRef.current) return;
    try {
      const engine = new ProceduralVisualEngine(canvasRef.current);
      engineRef.current = engine;

      const handleResize = () => {
        engine.resize();
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } catch (e) {
      console.warn('Canvas visual engine initialization notice', e);
      setState('ERROR_FALLBACK');
    }
  }, []);

  // RAF Animation Loop for Canvas Scrubber
  useEffect(() => {
    let animId: number;
    const renderLoop = (time: number) => {
      if (engineRef.current && canvasRef.current) {
        // If frames are cached from video, draw frame, else render procedural visuals
        if (cachedFrames.current.length > 0) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            const frameIndex = Math.min(
              Math.floor(progress * (cachedFrames.current.length - 1)),
              cachedFrames.current.length - 1
            );
            const frame = cachedFrames.current[frameIndex];
            if (frame) {
              const cw = canvasRef.current.width;
              const ch = canvasRef.current.height;
              ctx.clearRect(0, 0, cw, ch);
              // Draw cover math
              ctx.drawImage(frame as CanvasImageSource, 0, 0, cw, ch);
            }
          }
        } else {
          engineRef.current.render(progress, time);
        }
      }

      // If video element exists and not using frame cache, smooth seek visible video
      if (videoRef.current && isVideoLoaded.current && cachedFrames.current.length === 0) {
        const vid = videoRef.current;
        if (vid.duration) {
          const targetTime = progress * Math.max(vid.duration - 0.05, 0.1);
          if (Math.abs(vid.currentTime - targetTime) > 0.04) {
            vid.currentTime = targetTime;
          }
        }
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animId);
  }, [progress]);

  // Video Frame Extraction Engine
  const handleVideoLoaded = async () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    isVideoLoaded.current = true;
    setState('VIDEO_READY');

    try {
      setState('FRAME_CACHE_LOADING');
      const duration = video.duration || 4;
      const targetFrames = Math.min(Math.max(Math.floor(duration * 12), 24), 90);
      const offscreenCanvas = document.createElement('canvas');
      const offscreenCtx = offscreenCanvas.getContext('2d');
      const width = Math.min(video.videoWidth || 960, 960);
      const height = Math.floor((width * (video.videoHeight || 540)) / (video.videoWidth || 960));
      offscreenCanvas.width = width;
      offscreenCanvas.height = height;

      if (!offscreenCtx) return;

      const extracted: (ImageBitmap | HTMLCanvasElement)[] = [];
      const interval = duration / targetFrames;

      for (let i = 0; i < targetFrames; i++) {
        video.currentTime = i * interval;
        await new Promise((res) => {
          const onSeeked = () => {
            video.removeEventListener('seeked', onSeeked);
            res(true);
          };
          video.addEventListener('seeked', onSeeked);
        });

        offscreenCtx.drawImage(video, 0, 0, width, height);

        if ('createImageBitmap' in window) {
          try {
            const bitmap = await createImageBitmap(offscreenCanvas);
            extracted.push(bitmap);
          } catch {
            const clone = document.createElement('canvas');
            clone.width = width;
            clone.height = height;
            clone.getContext('2d')?.drawImage(offscreenCanvas, 0, 0);
            extracted.push(clone);
          }
        } else {
          const clone = document.createElement('canvas');
          clone.width = width;
          clone.height = height;
          clone.getContext('2d')?.drawImage(offscreenCanvas, 0, 0);
          extracted.push(clone);
        }
      }

      if (extracted.length >= 24) {
        cachedFrames.current = extracted;
        setState('FRAME_CACHE_READY');
      }
    } catch (err) {
      console.warn('Frame cache extraction notice (using canvas fallback)', err);
      setState('VIDEO_READY');
    }
  };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-paper transition-opacity duration-1000"
    >
      {/* 1. Poster / Ambient Mesh Layer */}
      <div
        className={`absolute inset-0 bg-mesh-editorial transition-opacity duration-1000 ${
          state === 'FRAME_CACHE_READY' ? 'opacity-40' : 'opacity-80'
        }`}
      />

      {/* 2. Hidden HTML5 Video for Frame Extraction / Direct Seek */}
      <video
        ref={videoRef}
        src="/hero.mp4"
        preload="auto"
        muted
        playsInline
        crossOrigin="anonymous"
        onLoadedMetadata={handleVideoLoaded}
        onError={() => setState('POSTER')}
        className="hidden"
      />

      {/* 3. Primary Kinetic Canvas Scrubber Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-95"
      />

      {/* 4. Fine Editorial Grain / Atmosphere Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #181818 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};
