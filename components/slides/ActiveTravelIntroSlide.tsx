
import React from 'react';
import { Slide } from '../Slide';

interface StatPillProps {
  value: string;
  label: string;
  delay: number;
}

const StatPill: React.FC<StatPillProps> = ({ value, label, delay }) => (
  <div 
    className="bg-rose-500/20 border-2 border-rose-400 rounded-full px-8 py-4 text-center shadow-lg shadow-rose-500/20 animate-zoom-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-4xl font-bold text-white">{value}</div>
    <div className="text-lg text-rose-200">{label}</div>
  </div>
);

interface ActiveTravelIntroSlideProps {
  title: string;
  description:string;
  stats: {
    value: string;
    label: string;
  }[];
  source: string;
}

export const ActiveTravelIntroSlide: React.FC<ActiveTravelIntroSlideProps> = ({ title, description, stats, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-6 animate-fade-in-down">{title}</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>{description}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {stats.map((stat, index) => (
            <StatPill key={index} value={stat.value} label={stat.label} delay={400 + index * 200} />
          ))}
        </div>
      </div>
    </Slide>
  );
};