import React, { useEffect, useState } from 'react';
import { BookOpen, Lightbulb, GraduationCap, Pencil, Binary, Compass, Atom, Cpu } from 'lucide-react';

const FLOATING_ICONS = [
  BookOpen, Lightbulb, GraduationCap, Pencil, Binary, Compass, Atom, Cpu
];

const EQUATIONS = [
  'e = mc²', 'a² + b² = c²', 'f(x) = ∫ x dx', '∑ x_i', 'π ≈ 3.14', 'λ = h/p', 'E = hν', '∇ × E = -∂B/∂t', '∞', '½'
];

export default function AnimatedBackground() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate a fixed set of floating elements on mount to avoid hydration mismatch
    const newElements = [];
    
    // Add floating icons
    for (let i = 0; i < 15; i++) {
      const IconComponent = FLOATING_ICONS[i % FLOATING_ICONS.length];
      newElements.push({
        id: `icon-${i}`,
        type: 'icon',
        component: IconComponent,
        size: Math.floor(Math.random() * 20) + 16, // 16px to 36px
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * -20}s`, // Negative delay so they start immediately at different frames
        duration: `${Math.random() * 15 + 20}s`, // 20s to 35s
        opacity: Math.random() * 0.15 + 0.05, // 5% to 20% opacity
      });
    }

    // Add floating math text
    for (let i = 0; i < 12; i++) {
      const eqText = EQUATIONS[i % EQUATIONS.length];
      newElements.push({
        id: `eq-${i}`,
        type: 'text',
        text: eqText,
        fontSize: Math.floor(Math.random() * 6) + 12, // 12px to 18px
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * -20}s`,
        duration: `${Math.random() * 18 + 22}s`, // 22s to 40s
        opacity: Math.random() * 0.18 + 0.05,
      });
    }

    // Add glowing soft nodes/particles
    for (let i = 0; i < 20; i++) {
      newElements.push({
        id: `node-${i}`,
        type: 'node',
        size: Math.floor(Math.random() * 8) + 4, // 4px to 12px
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * -15}s`,
        duration: `${Math.random() * 10 + 15}s`, // 15s to 25s
        color: i % 2 === 0 ? 'bg-sky-200 shadow-sky-300' : 'bg-cyan-200 shadow-cyan-300',
        opacity: Math.random() * 0.25 + 0.1,
      });
    }

    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 bg-gradient-to-tr from-white via-sky-50/20 to-cyan-50/10">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sky-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-200/25 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-blue-100/15 blur-[100px] pointer-events-none" />

      {/* Render elements */}
      {elements.map((el) => {
        const style = {
          left: el.left,
          top: el.top,
          animationDelay: el.delay,
          animationDuration: el.duration,
          opacity: el.opacity,
        };

        if (el.type === 'icon') {
          const Icon = el.component;
          return (
            <div
              key={el.id}
              className="absolute animate-float-slow text-education-primary"
              style={style}
            >
              <Icon size={el.size} strokeWidth={1.5} />
            </div>
          );
        } else if (el.type === 'text') {
          return (
            <div
              key={el.id}
              className="absolute animate-float-medium font-mono text-education-navy/70 select-none whitespace-nowrap"
              style={{ ...style, fontSize: `${el.fontSize}px` }}
            >
              {el.text}
            </div>
          );
        } else {
          return (
            <div
              key={el.id}
              className={`absolute animate-pulse rounded-full shadow-lg ${el.color}`}
              style={{
                ...style,
                width: `${el.size}px`,
                height: `${el.size}px`,
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.4)',
              }}
            />
          );
        }
      })}
    </div>
  );
}
