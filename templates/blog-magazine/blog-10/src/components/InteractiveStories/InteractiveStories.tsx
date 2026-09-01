import React, { useState } from 'react';
import { Sparkles, ChevronRight, ChevronLeft, Volume2, VolumeX, X, Layers, Play, CheckCircle2 } from 'lucide-react';
import { InteractiveStory, InteractiveStage } from '../../types';

interface InteractiveStoriesProps {
  stories: InteractiveStory[];
}

export const InteractiveStories: React.FC<InteractiveStoriesProps> = ({ stories }) => {
  const [selectedStory, setSelectedStory] = useState<InteractiveStory | null>(null);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleOpenStory = (story: InteractiveStory) => {
    setSelectedStory(story);
    setCurrentStageIndex(0);
  };

  const handleClose = () => {
    setSelectedStory(null);
    setCurrentStageIndex(0);
    setIsPlayingAudio(false);
  };

  const nextStage = () => {
    if (!selectedStory) return;
    if (currentStageIndex < selectedStory.stages.length - 1) {
      setCurrentStageIndex((prev) => prev + 1);
    }
  };

  const prevStage = () => {
    if (currentStageIndex > 0) {
      setCurrentStageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full">
      {/* Grid of Interactive Story Teaser Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => handleOpenStory(story)}
            className="group relative rounded-2xl overflow-hidden bg-[#121214] border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all duration-500 shadow-2xl flex flex-col justify-between"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <img
                src={story.heroImage}
                alt={story.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-black/20" />

              {/* Interactive Experience Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-[#F27D26] text-[9px] font-mono font-bold tracking-widest uppercase">
                <Layers className="w-3 h-3 text-[#F27D26]" />
                <span>{story.totalStages}-STAGE EXPEDITION</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-14 h-14 rounded-full bg-[#F27D26] text-black flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-5 h-5 ml-1 fill-black" />
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#F27D26] uppercase font-bold block mb-1">
                  INTERACTIVE IMMERSION
                </span>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#F27D26] transition-colors leading-tight">
                  {story.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-2 leading-relaxed font-light">
                  {story.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {story.totalStages} INTERACTIVE CHAPTERS
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[#F27D26] font-black uppercase group-hover:translate-x-1 transition-transform">
                  <span>ENTER</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Interactive Experience Modal / Stage Viewer */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 overflow-y-auto animate-in fade-in duration-300">
          
          {/* Header Bar */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#F27D26] text-black text-[10px] font-mono font-black tracking-widest uppercase">
                INTERACTIVE DEEP DIVE
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight hidden sm:block">
                {selectedStory.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {/* Sound Ambience Toggle */}
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                aria-label={isPlayingAudio ? 'Mute ambient sound' : 'Play ambient sound'}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121214] border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white"
              >
                {isPlayingAudio ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span className="text-[10px] font-bold text-[#F27D26]">AMBIENCE ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-[10px] font-bold text-zinc-500">AMBIENCE OFF</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close story"
                className="p-2 rounded-full bg-[#121214] hover:bg-zinc-800 border border-zinc-800 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="max-w-5xl mx-auto w-full my-4">
            <div className="flex items-center justify-between gap-2 overflow-x-auto py-2">
              {selectedStory.stages.map((stage, idx) => (
                <button
                  key={stage.step}
                  onClick={() => setCurrentStageIndex(idx)}
                  className={`flex-1 min-w-[120px] p-2.5 rounded-xl border text-left transition-all ${
                    idx === currentStageIndex
                      ? 'bg-[#F27D26]/10 border-[#F27D26] text-white'
                      : idx < currentStageIndex
                      ? 'bg-[#121214] border-zinc-800 text-zinc-300'
                      : 'bg-transparent border-zinc-900 text-zinc-600'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider mb-1">
                    {idx < currentStageIndex ? (
                      <CheckCircle2 className="w-3 h-3 text-[#F27D26]" />
                    ) : (
                      <span className="text-[#F27D26] font-bold">0{idx + 1}</span>
                    )}
                    <span className="truncate">{stage.subtitle}</span>
                  </div>
                  <div className="font-bold uppercase tracking-tight text-xs truncate">
                    {stage.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Stage Presentation Canvas */}
          {(() => {
            const activeStage = selectedStory.stages[currentStageIndex];
            if (!activeStage) return null;

            return (
              <div className="max-w-6xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
                
                {/* Visual Imagery */}
                <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                  <img
                    src={activeStage.image}
                    alt={activeStage.title}
                    className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-500 brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Scientific Metric Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-700 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                      {activeStage.metricLabel}
                    </span>
                    <span className="text-sm sm:text-base font-mono font-black text-[#F27D26]">
                      {activeStage.metricValue}
                    </span>
                  </div>
                </div>

                {/* Stage Editorial Content */}
                <div className="lg:col-span-5 space-y-6 text-left">
                  <div>
                    <div className="text-xs font-mono tracking-[0.3em] text-[#F27D26] font-bold uppercase mb-1">
                      STAGE 0{activeStage.step} OF 0{selectedStory.stages.length}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                      {activeStage.title}
                    </h3>
                    <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1">
                      {activeStage.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                    {activeStage.description}
                  </p>

                  <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#F27D26] uppercase block font-bold">
                      SCIENTIFIC TELEMETRY:
                    </span>
                    <p className="text-xs text-zinc-400 italic font-light">
                      "{activeStage.scientificInsight}"
                    </p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={prevStage}
                      disabled={currentStageIndex === 0}
                      className="flex-1 py-3 rounded-full border border-zinc-800 text-white font-mono uppercase tracking-wider text-xs disabled:opacity-30 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>PREVIOUS</span>
                    </button>

                    <button
                      onClick={nextStage}
                      disabled={currentStageIndex === selectedStory.stages.length - 1}
                      className="flex-1 py-3 rounded-full bg-[#F27D26] hover:bg-[#ff9345] text-black font-black font-mono uppercase tracking-widest text-xs disabled:opacity-30 transition-all flex items-center justify-center gap-1 shadow-lg shadow-[#F27D26]/20 cursor-pointer"
                    >
                      <span>NEXT STAGE</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Footer Controls */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-t border-zinc-800 pt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <span>EXPLORATION TIMELINE ENGINE</span>
            <span>DISCOVERY PROTOCOL ACTIVE</span>
          </div>
        </div>
      )}
    </div>
  );
};
