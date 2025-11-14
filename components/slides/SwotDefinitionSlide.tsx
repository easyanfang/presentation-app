import React from 'react';
import { Slide } from '../Slide';
import { StrengthIcon } from '../icons/StrengthIcon';
import { WeaknessIcon } from '../icons/WeaknessIcon';
import { OpportunityIcon } from '../icons/OpportunityIcon';
import { ThreatIcon } from '../icons/ThreatIcon';


interface SwotDefinitionSlideProps {
  title: string;
  description: string;
  items: {
    letter: string;
    name: string;
    desc: string;
    color: string;
  }[];
  source: string;
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  S: StrengthIcon,
  W: WeaknessIcon,
  O: OpportunityIcon,
  T: ThreatIcon,
};

const colorMap: { [key: string]: string } = {
    'text-green-300': 'hover:shadow-green-500/30',
    'text-yellow-300': 'hover:shadow-yellow-500/30',
    'text-violet-300': 'hover:shadow-violet-500/30',
    'text-rose-300': 'hover:shadow-rose-500/30',
}

export const SwotDefinitionSlide: React.FC<SwotDefinitionSlideProps> = ({ title, description, items, source }) => {
  return (
    <Slide source={source}>
      <div className="text-center w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-4 animate-fade-in-down">{title}</h2>
        <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.letter];
            const shadowClass = colorMap[item.color] || '';
            return (
              <div 
                key={index} 
                className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-500 hover:scale-105 transition-all duration-300 group hover:shadow-lg ${shadowClass} animate-zoom-in`}
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                {IconComponent && <IconComponent className={`w-12 h-12 mx-auto mb-4 ${item.color} transition-transform group-hover:scale-110`} />}
                <h3 className={`text-2xl font-semibold ${item.color}`}>{item.name}</h3>
                <p className="text-slate-400 mt-2">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  );
};