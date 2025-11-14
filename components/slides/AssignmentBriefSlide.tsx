
import React from 'react';
import { Slide } from '../Slide';
import { DocumentIcon } from '../icons/DocumentIcon';
import { ListIcon } from '../icons/ListIcon';
import type { AssignmentBriefSlideContent } from '../../types';

export const AssignmentBriefSlide: React.FC<AssignmentBriefSlideContent & { source: string }> = ({ title, subtitle, workOrder, guidingQuestions, focusStatement, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-300 animate-fade-in-down">{title}</h2>
        <p className="text-lg text-slate-300 mt-2 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Work Order Section */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center mb-4">
              <DocumentIcon className="w-8 h-8 text-rose-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">{workOrder.title}</h3>
            </div>
            <p className="text-slate-300 italic">{workOrder.text}</p>
          </div>

          {/* Guiding Questions Section */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 animate-fade-in-up" style={{ animationDelay: '550ms' }}>
            <div className="flex items-center mb-4">
              <ListIcon className="w-8 h-8 text-rose-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">{guidingQuestions.title}</h3>
            </div>
            <p className="text-slate-300 mb-4">{guidingQuestions.intro}</p>
            <ul className="space-y-2">
              {guidingQuestions.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-rose-500 mr-3 mt-1 font-bold">›</span>
                  <span className="text-slate-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-rose-400/30 pt-6 animate-zoom-in" style={{ animationDelay: '800ms' }}>
          <p className="text-xl text-rose-300 font-semibold">{focusStatement}</p>
        </div>
      </div>
    </Slide>
  );
};