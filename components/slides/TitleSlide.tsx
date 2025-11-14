
import React from 'react';
import { Slide } from '../Slide';

interface TitleSlideProps {
  title: string;
  subtitle: string;
  author: string;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ title, subtitle, author }) => {
  return (
    <Slide>
      <div className="text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{backgroundImage: "url('https://picsum.photos/seed/travel/1920/1080')"}}
        ></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-red-500 mb-4 animate-fade-in-down">{title}</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>{subtitle}</p>
          <p className="text-lg text-slate-400 italic animate-fade-in-up" style={{ animationDelay: '500ms' }}>{author}</p>
        </div>
      </div>
    </Slide>
  );
};