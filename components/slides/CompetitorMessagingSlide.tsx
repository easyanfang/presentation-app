
import React from 'react';
import { Slide } from '../Slide';
import type { CompetitorMessagingSlideContent } from '../../types';
import { CommunicationIcon } from '../icons/CommunicationIcon';
import { MissionIcon } from '../icons/MissionIcon';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    communication: CommunicationIcon,
    mission: MissionIcon,
};

export const CompetitorMessagingSlide: React.FC<CompetitorMessagingSlideContent & { source: string }> = ({ title, messagingPoints, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-12 animate-fade-in-down">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {messagingPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon];
            return (
              <div 
                key={index} 
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 flex flex-col items-center animate-zoom-in"
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                {IconComponent && <IconComponent className="w-16 h-16 mb-5 text-rose-300" />}
                <h3 className="text-2xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-slate-300 text-lg italic text-center">"{point.text}"</p>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};