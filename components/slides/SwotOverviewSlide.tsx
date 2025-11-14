
import React from 'react';
import { Slide } from '../Slide';

interface Quadrant {
  title: string;
  points: string[];
  color: string;
  targetSlide: number;
}

interface SwotOverviewSlideProps {
  title: string;
  quadrants: Quadrant[];
  source: string;
  onQuadrantClick: (slideIndex: number) => void;
}

export const SwotOverviewSlide: React.FC<SwotOverviewSlideProps> = ({ title, quadrants, source, onQuadrantClick }) => {
  return (
    <Slide source={source}>
      <div className="text-center w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-8 animate-fade-in-down">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quadrants.map((quad, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-white/30 ${quad.color} animate-zoom-in`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
              onClick={() => onQuadrantClick(quad.targetSlide)}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{quad.title}</h3>
              <ul className="space-y-2 text-left">
                {quad.points.map((point, pIndex) => (
                  <li key={pIndex} className="text-slate-300">
                    <span className="font-semibold text-white/50 mr-2">•</span>{point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};