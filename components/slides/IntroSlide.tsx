
import React from 'react';
import { Slide } from '../Slide';

interface IntroSlideProps {
  title: string;
  points: string[];
  stat: {
    value: string;
    label: string;
  };
  source: string;
}

export const IntroSlide: React.FC<IntroSlideProps> = ({ title, points, stat, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-6 animate-fade-in-down">{title}</h2>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${200 + index * 150}ms` }}>
                <span className="text-rose-400 mr-3 mt-1">✓</span>
                <span className="text-slate-200 text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-shrink-0 w-48 h-48 rounded-full bg-rose-500/20 flex flex-col items-center justify-center text-center p-4 border-4 border-rose-400 shadow-lg shadow-rose-500/20 animate-zoom-in" style={{ animationDelay: '500ms' }}>
          <span className="text-6xl font-bold text-white">{stat.value}</span>
          <span className="text-lg text-rose-200 leading-tight">{stat.label}</span>
        </div>
      </div>
    </Slide>
  );
};