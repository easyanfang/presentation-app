
import React from 'react';
import { Slide } from '../Slide';
import type { CompetitorProfileSlideContent } from '../../types';
import { TargetIcon } from '../icons/TargetIcon';
import { PriceIcon } from '../icons/PriceIcon';
import { TermsIcon } from '../icons/TermsIcon';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  target: TargetIcon,
  price: PriceIcon,
  terms: TermsIcon,
};

export const CompetitorProfileSlide: React.FC<CompetitorProfileSlideContent & { source: string }> = ({ title, subtitle, comparisonPoints, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-rose-300 animate-fade-in-down">{title}</h2>
            <p className="text-lg text-slate-300 mt-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>{subtitle}</p>
        </div>
        <div className="space-y-6">
          {comparisonPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon];
            return (
              <div 
                key={index} 
                className="flex items-start bg-slate-800/50 p-6 rounded-lg border border-slate-700 animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                {IconComponent && <IconComponent className="w-10 h-10 text-rose-400 mr-5 flex-shrink-0 mt-1" />}
                <div>
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                  <p className="text-slate-300 mt-1">{point.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};