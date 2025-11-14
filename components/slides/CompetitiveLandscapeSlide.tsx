
import React, { useState } from 'react';
import { Slide } from '../Slide';
import type { CompetitiveLandscapeSlideContent } from '../../types';

export const CompetitiveLandscapeSlide: React.FC<CompetitiveLandscapeSlideContent & { source: string }> = ({ title, description, competitors, source }) => {
  const [focusedIndex, setFocusedIndex] = useState(1); // Default focus on mydays

  return (
    <Slide source={source}>
      <div className="w-full max-w-7xl mx-auto text-center flex flex-col h-full justify-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-4 animate-fade-in-down">{title}</h2>
          <p className="text-lg text-slate-300 mb-16 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>{description}</p>
        </div>
        <div className="flex-grow flex items-center justify-center gap-4 md:gap-8">
          {competitors.map((competitor, index) => {
            const isFocused = focusedIndex === index;
            const isMydays = competitor.name === 'mydays';
            return (
              <div
                key={index}
                onClick={() => setFocusedIndex(index)}
                className={`
                  relative p-6 rounded-2xl border transition-all duration-500 ease-in-out cursor-pointer
                  flex flex-col items-center h-[350px] animate-zoom-in
                  ${isFocused
                    ? `w-1/3 max-w-sm bg-slate-800/80 ${isMydays ? 'border-rose-400' : 'border-slate-500'} scale-105 z-10`
                    : 'w-1/4 max-w-xs bg-slate-800/40 border-slate-700 scale-90 opacity-70 hover:opacity-100 hover:border-slate-500'
                  }
                `}
                style={{
                  animationDelay: `${400 + index * 100}ms`,
                  boxShadow: isFocused ? `0 0 35px -5px ${competitor.brandColor}` : 'none',
                  minHeight: '320px'
                }}
              >
                <div className={`
                  w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 overflow-hidden flex-shrink-0
                  transition-all duration-500 ease-in-out
                  ${isFocused ? 'scale-100' : 'scale-90'}
                `}>
                  <img src={competitor.logoUrl} alt={`${competitor.name} logo`} className="w-20 h-20 object-contain p-1" />
                </div>
                <h3 className={`
                  text-2xl font-semibold text-white mb-3
                `}>
                  {competitor.name}
                </h3>
                <div className={`
                  text-slate-400 text-center transition-all duration-300 ease-in-out overflow-hidden
                  ${isFocused ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  {competitor.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  );
};