
import React from 'react';
import { Slide } from '../Slide';

interface FocusCompetitorSlideProps {
  title: string;
  description: string;
  logoUrl: string;
  source: string;
}

export const FocusCompetitorSlide: React.FC<FocusCompetitorSlideProps> = ({ title, description, logoUrl, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-rose-300 mb-12 animate-fade-in-down">{title}</h2>
        
        <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-8 mx-auto shadow-2xl shadow-rose-500/30 animate-subtle-scale animate-zoom-in" style={{ animationDelay: '200ms' }}>
            <img src={logoUrl} alt="Competitor Logo" className="w-36 h-36 object-contain" />
        </div>
        
        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>{description}</p>
      </div>
    </Slide>
  );
};