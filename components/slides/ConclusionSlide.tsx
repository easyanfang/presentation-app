
import React from 'react';
import { Slide } from '../Slide';

interface ConclusionSlideProps {
  title: string;
  summaryPoints: string[];
  finalThought: string;
}

export const ConclusionSlide: React.FC<ConclusionSlideProps> = ({ title, summaryPoints, finalThought }) => {
  return (
    <Slide>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-rose-300 mb-12 animate-fade-in-down">{title}</h2>
        <div className="text-left space-y-6 mb-12">
          {summaryPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-start text-xl text-slate-200 animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <span className="text-rose-400 mr-4 mt-1 text-2xl">◆</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t-2 border-rose-400/50 pt-8 animate-zoom-in" style={{ animationDelay: '800ms' }}>
            <p className="text-2xl text-white italic">{finalThought}</p>
        </div>
      </div>
    </Slide>
  );
};