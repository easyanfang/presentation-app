
import React from 'react';
import { Slide } from '../Slide';
import type { StrategicImplicationsSlideContent } from '../../types';

const getBgColor = (textColor: string) => {
  const color = textColor.replace('text-', '').replace('-300', '');
  const colorMap: { [key: string]: string } = {
    'green': 'bg-green-400',
    'yellow': 'bg-yellow-400',
    'violet': 'bg-violet-400',
    'rose': 'bg-rose-400',
  }
  return colorMap[color] || 'bg-slate-400';
};

export const StrategicImplicationsSlide: React.FC<StrategicImplicationsSlideContent & { source: string }> = ({ title, description, strategies, quadrants, source }) => {

  return (
    <Slide source={source}>
      <div className="text-center w-full max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-2 animate-fade-in-down">{title}</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-3xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>{description}</p>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => {
            const quadrantTypeS = strategy.poweredBy[0].type;
            const quadrantTypeO = strategy.poweredBy[1].type;
            const borderColorS = quadrants[quadrantTypeS].borderColor;
            const borderColorO = quadrants[quadrantTypeO].borderColor;
            
            return (
              <div 
                key={index} 
                className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700 hover:border-rose-400/50 flex flex-col text-left h-full animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                <div 
                  className="relative rounded-xl p-6 -m-6 mb-6 overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/40"
                >
                  <div className={`absolute -top-1/2 -left-1/2 w-full h-full opacity-20 ${borderColorS} rounded-full animate-spin [animation-duration:10s]`}></div>
                  <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full opacity-20 ${borderColorO} rounded-full animate-spin [animation-duration:12s] [animation-direction:reverse]`}></div>
                  <h3 className="text-2xl font-bold text-white relative z-10">{strategy.title}</h3>
                </div>
                
                <p className="text-slate-300 mb-4 flex-grow relative z-10">{strategy.description}</p>
                <hr className="border-slate-600 my-4 relative z-10" />
                <div className="relative z-10">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">POWERED BY:</h4>
                  <ul className="space-y-3">
                    {strategy.poweredBy.map((factor, factorIndex) => {
                      const quadrantInfo = quadrants[factor.type];
                      return (
                        <li key={factorIndex} className="flex items-start">
                          <span className={`w-3 h-3 rounded-full mr-3 mt-1.5 flex-shrink-0 ${getBgColor(quadrantInfo.textColor)}`}></span>
                          <div>
                            <span className={`font-semibold ${quadrantInfo.textColor}`}>{quadrantInfo.title}:</span>
                            <span className="text-slate-300 ml-1.5">{factor.text}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  );
};