import React from 'react';
import { AnimatedCar } from './AnimatedCar';
import { AnimatedDoll } from './AnimatedDoll';
import { AnimatedRobot } from './AnimatedRobot';
import { AnimatedAirplane } from './AnimatedAirplane';
import { AnimatedTrain } from './AnimatedTrain';
import { AnimatedLego } from './AnimatedLego';
import { AnimatedDinosaur } from './AnimatedDinosaur';
import { AnimatedRocket } from './AnimatedRocket';
import { AnimatedBall } from './AnimatedBall';
import { AnimatedTeddy } from './AnimatedTeddy';

interface ToyRendererProps {
  type: string;
  state?: 'idle' | 'hover' | 'click' | 'cart';
  className?: string;
  style?: React.CSSProperties;
}

export const ToyRenderer: React.FC<ToyRendererProps> = ({ type, state = 'idle', className = '', style }) => {
  switch (type.toLowerCase()) {
    case 'car':
      return <AnimatedCar state={state} className={className} style={style} />;
    case 'doll':
      return <AnimatedDoll state={state} className={className} style={style} />;
    case 'robot':
      return <AnimatedRobot state={state} className={className} style={style} />;
    case 'airplane':
      return <AnimatedAirplane state={state} className={className} style={style} />;
    case 'train':
      return <AnimatedTrain state={state} className={className} style={style} />;
    case 'lego':
      return <AnimatedLego state={state} className={className} style={style} />;
    case 'dinosaur':
    case 'dino':
      return <AnimatedDinosaur state={state} className={className} style={style} />;
    case 'rocket':
      return <AnimatedRocket state={state} className={className} style={style} />;
    case 'ball':
      return <AnimatedBall state={state} className={className} style={style} />;
    case 'teddy':
      return <AnimatedTeddy state={state} className={className} style={style} />;
    default:
      // Fallback to teddy bear if unknown type
      return <AnimatedTeddy state={state} className={className} style={style} />;
  }
};
