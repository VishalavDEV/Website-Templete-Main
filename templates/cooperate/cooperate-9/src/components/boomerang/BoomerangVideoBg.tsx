import React, { useEffect, useRef, useState } from 'react';

const VIDEO_SRC = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4";
const MAX_CAPTURE_WIDTH = 960;
const FPS = 30;
const FRAME_INTERVAL_MS = 1000 / FPS;

export const BoomerangVideoBg: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [framesReady, setFramesReady] = useState(false);
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const lastCapturedTimeRef = useRef<number>(-1);
  const isCapturingRef = useRef<boolean>(true);
  const playbackIntervalRef = useRef<number | null>(null);
  const frameCallbackIdRef = useRef<number | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    framesRef.current = [];
    lastCapturedTimeRef.current = -1;
    isCapturingRef.current = true;

    const captureCurrentFrame = () => {
      if (!isCapturingRef.current || !video || video.paused || video.ended) return;

      const currentTime = video.currentTime;
      if (currentTime !== lastCapturedTimeRef.current && video.videoWidth > 0 && video.videoHeight > 0) {
        lastCapturedTimeRef.current = currentTime;

        // Calculate proportional scale
        const scale = Math.min(1, MAX_CAPTURE_WIDTH / video.videoWidth);
        const targetWidth = Math.round(video.videoWidth * scale);
        const targetHeight = Math.round(video.videoHeight * scale);

        const offscreen = document.createElement('canvas');
        offscreen.width = targetWidth;
        offscreen.height = targetHeight;
        const ctx = offscreen.getContext('2d', { alpha: false });
        if (ctx) {
          ctx.drawImage(video, 0, 0, targetWidth, targetHeight);
          framesRef.current.push(offscreen);
        }
      }

      // Schedule next frame capture
      if ('requestVideoFrameCallback' in HTMLVideoElement.prototype && (video as any).requestVideoFrameCallback) {
        frameCallbackIdRef.current = (video as any).requestVideoFrameCallback(() => {
          captureCurrentFrame();
        });
      } else {
        animFrameIdRef.current = requestAnimationFrame(() => {
          captureCurrentFrame();
        });
      }
    };

    const handlePlay = () => {
      captureCurrentFrame();
    };

    const handleEnded = () => {
      isCapturingRef.current = false;
      if (frameCallbackIdRef.current !== null && (video as any).cancelVideoFrameCallback) {
        (video as any).cancelVideoFrameCallback(frameCallbackIdRef.current);
      }
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }

      const totalFrames = framesRef.current.length;
      if (totalFrames > 3) {
        // Start canvas boomerang playback
        setFramesReady(true);
        startBoomerangPlayback();
      } else {
        // Fallback: If capture was blocked by CORS or too short, restart video once
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    const startBoomerangPlayback = () => {
      const frames = framesRef.current;
      const total = frames.length;
      if (total === 0) return;

      const mainCtx = canvas.getContext('2d', { alpha: false });
      if (!mainCtx) return;

      // Set main canvas dimensions matching frames
      canvas.width = frames[0].width;
      canvas.height = frames[0].height;

      let currentIndex = 0;
      let direction = 1; // 1 for forward, -1 for reverse

      playbackIntervalRef.current = window.setInterval(() => {
        const currentFrame = frames[currentIndex];
        if (currentFrame) {
          mainCtx.drawImage(currentFrame, 0, 0);
        }

        currentIndex += direction;

        if (currentIndex >= total) {
          direction = -1;
          currentIndex = total - 2 >= 0 ? total - 2 : 0;
        } else if (currentIndex < 0) {
          direction = 1;
          currentIndex = 1 < total ? 1 : 0;
        }
      }, FRAME_INTERVAL_MS);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    // Trigger video playback on load
    video.play().catch(() => {
      // Autoplay with muted is allowed, if error ignore
    });

    return () => {
      isCapturingRef.current = false;
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);

      if (playbackIntervalRef.current !== null) {
        clearInterval(playbackIntervalRef.current);
      }
      if (frameCallbackIdRef.current !== null && (video as any).cancelVideoFrameCallback) {
        (video as any).cancelVideoFrameCallback(frameCallbackIdRef.current);
      }
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 scale-[1.15] origin-top overflow-hidden pointer-events-none select-none">
      {/* Live Video (Active during initial capture or fallback) */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
          framesReady ? 'opacity-0 hidden' : 'opacity-100 block'
        }`}
      />

      {/* Canvas Boomerang Playback (Active once frames are captured) */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
          framesReady ? 'opacity-100 block' : 'opacity-0 hidden'
        }`}
      />

      {/* Subtle top/bottom luminance balancing overlay to ensure pristine contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/60 pointer-events-none" />
    </div>
  );
};
