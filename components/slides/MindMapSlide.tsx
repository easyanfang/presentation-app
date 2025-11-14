import React, { useState, useEffect } from 'react';
import { Slide } from '../Slide';
import type { MindMapData } from '../../types';

interface MindMapSlideProps {
  mindMapData: MindMapData;
  source: string;
}

const ConceptCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => {
  return (
    <div 
      className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-white/30 hover:scale-105 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${200 + index * 150}ms` }}
    >
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
};


export const MindMapSlide: React.FC<MindMapSlideProps> = ({ mindMapData, source }) => {
  const { centerText, branches, color } = mindMapData;

  return (
    <Slide source={source}>
      <div className="w-full max-w-5xl flex flex-col items-center justify-center">
        
        <div className={`relative mb-10 w-48 h-48 rounded-full flex items-center justify-center text-center p-4 border-4 shadow-xl bg-slate-800 animate-subtle-scale animate-zoom-in ${color}`}>
          <h2 className="text-4xl font-bold">{centerText}</h2>
        </div>
        
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
           {branches.map((branch, index) => (
             <ConceptCard key={index} {...branch} index={index} />
           ))}
        </div>

      </div>
    </Slide>
  );
};