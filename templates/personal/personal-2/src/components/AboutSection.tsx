import { PROFILE_DATA, ABOUT_CARDS } from '../data/portfolioData';
import { Brain, Code2, Cpu, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5 text-blue-600" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-rose-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-600" />;
      default: return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  const getIconBg = (index: number) => {
    switch (index) {
      case 0: return 'bg-blue-50 text-blue-600 border-blue-200/60';
      case 1: return 'bg-indigo-50 text-indigo-600 border-indigo-200/60';
      case 2: return 'bg-rose-50 text-rose-600 border-rose-200/60';
      case 3: return 'bg-teal-50 text-teal-600 border-teal-200/60';
      default: return 'bg-blue-50 text-blue-600 border-blue-200/60';
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Intro & Stats */}
          <div className="lg:col-span-5 space-y-6">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>ABOUT ME</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              MORE THAN A DEVELOPER
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {PROFILE_DATA.aboutDetailed}
            </p>

            {/* Stats Row */}
            <div className="pt-4 grid grid-cols-4 gap-2 sm:gap-4 border-t border-slate-100">
              {PROFILE_DATA.stats.map((stat, idx) => (
                <div key={stat.label} id={`about-stat-${idx}`} className="flex flex-col">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-blue-600 tracking-tight">
                    {stat.value}{stat.suffix}
                  </div>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 2x2 Focus Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {ABOUT_CARDS.map((card, idx) => (
              <div
                key={card.id}
                id={`about-card-${card.id}`}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${getIconBg(idx)} shadow-2xs group-hover:scale-105 transition-transform`}>
                    {getIcon(card.icon)}
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 tracking-tight uppercase">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

