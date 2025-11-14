
import React from 'react';
import { Slide } from '../Slide';
import type { CompetitorStrategySlideContent } from '../../types';
import { DistributionIcon } from '../icons/DistributionIcon';
import { CommunicationIcon } from '../icons/CommunicationIcon';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  distribution: DistributionIcon,
  communication: CommunicationIcon,
};

const CheckoutProcess: React.FC = () => (
    <div className="flex items-center justify-center space-x-2 text-sm">
        <div className="bg-rose-600/80 text-white p-2 rounded-md">Select</div>
        <div className="text-slate-500">→</div>
        <div className="bg-slate-700 p-2 rounded-md">Details</div>
        <div className="text-slate-500">→</div>
        <div className="bg-slate-700 p-2 rounded-md">Pay</div>
    </div>
);

export const CompetitorStrategySlide: React.FC<CompetitorStrategySlideContent & { source: string }> = ({ title, strategyPoints, checkout, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-10 text-center animate-fade-in-down">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
                {strategyPoints.map((point, index) => {
                    const IconComponent = iconMap[point.icon];
                    return (
                        <div 
                          key={index} 
                          className="flex items-start animate-fade-in-up"
                          style={{ animationDelay: `${200 + index * 200}ms` }}
                        >
                            {IconComponent && <IconComponent className="w-12 h-12 text-rose-400 mr-5 flex-shrink-0" />}
                            <div>
                                <h3 className="text-2xl font-semibold text-white">{point.title}</h3>
                                <p className="text-slate-300 mt-1 text-lg">{point.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div 
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mt-6 md:mt-0 animate-fade-in-up"
              style={{ animationDelay: '600ms' }}
            >
                <h3 className="text-2xl font-semibold text-white text-center mb-4">{checkout.title}</h3>
                <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <CheckoutProcess />
                </div>
                <p className="text-slate-300 text-center text-lg">{checkout.description}</p>
            </div>
        </div>
      </div>
    </Slide>
  );
};