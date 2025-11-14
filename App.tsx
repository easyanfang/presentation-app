

import React, { useState, useCallback } from 'react';
import { SLIDES_DATA } from './constants';
import type { SlideData } from './types';
import { TitleSlide } from './components/slides/TitleSlide';
import { IntroSlide } from './components/slides/IntroSlide';
import { SwotDefinitionSlide } from './components/slides/SwotDefinitionSlide';
import { SwotOverviewSlide } from './components/slides/SwotOverviewSlide';
import { MindMapSlide } from './components/slides/MindMapSlide';
import { StrategicImplicationsSlide } from './components/slides/StrategicImplicationsSlide';
import { ConclusionSlide } from './components/slides/ConclusionSlide';
import { ArrowIcon } from './components/icons/ArrowIcon';
import { CompetitiveLandscapeSlide } from './components/slides/CompetitiveLandscapeSlide';
import { CompetitorProfileSlide } from './components/slides/CompetitorProfileSlide';
import { CompetitorStrategySlide } from './components/slides/CompetitorStrategySlide';
import { CompetitorMessagingSlide } from './components/slides/CompetitorMessagingSlide';
import { ActiveTravelIntroSlide } from './components/slides/ActiveTravelIntroSlide';
import { FocusCompetitorSlide } from './components/slides/FocusCompetitorSlide';
import { AssignmentBriefSlide } from './components/slides/AssignmentBriefSlide';


const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SLIDES_DATA.length;

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
    }
  }, [totalSlides]);

  const renderSlide = (slide: SlideData, index: number, isActive: boolean) => {
    // FIX: The component map was causing type errors because it couldn't infer the correct props for each slide type.
    // Using a switch statement on the discriminated union `slide.type` ensures that each component receives the correct, type-safe props.
    switch (slide.type) {
      case 'title':
        return <TitleSlide {...slide.content} />;
      case 'assignment_brief':
        return <AssignmentBriefSlide {...slide.content} source={slide.source} />;
      case 'active_travel_intro':
        return <ActiveTravelIntroSlide {...slide.content} source={slide.source} />;
      case 'focus_competitor':
        return <FocusCompetitorSlide {...slide.content} source={slide.source} />;
      case 'intro':
        return <IntroSlide {...slide.content} source={slide.source} />;
      case 'definition':
        return <SwotDefinitionSlide {...slide.content} source={slide.source} />;
      case 'overview':
        return <SwotOverviewSlide {...slide.content} source={slide.source} onQuadrantClick={goToSlide} />;
      case 'mindmap':
        return <MindMapSlide {...slide.content} source={slide.source} />;
      case 'implications':
        return <StrategicImplicationsSlide {...slide.content} source={slide.source} />;
      case 'conclusion':
        return <ConclusionSlide {...slide.content} />;
      case 'competitive_landscape':
        return <CompetitiveLandscapeSlide {...slide.content} source={slide.source} />;
      case 'competitor_profile':
        return <CompetitorProfileSlide {...slide.content} source={slide.source} />;
      case 'competitor_strategy':
        return <CompetitorStrategySlide {...slide.content} source={slide.source} />;
      case 'competitor_messaging':
        return <CompetitorMessagingSlide {...slide.content} source={slide.source} />;
      default:
        return null;
    }
  };

  return (
    <main className="relative w-full h-screen bg-slate-900 text-white overflow-hidden flex items-center justify-center">
      <div className="absolute top-4 left-6 z-20 flex items-center gap-4">
        <div className="text-sm font-bold text-rose-300">mydays Outdoor-Analyse</div>
      </div>

      <div className="absolute top-4 right-6 text-sm font-semibold text-slate-400">
        Slide {currentSlide + 1} / {totalSlides}
      </div>

      <div className="w-full h-full">
        {SLIDES_DATA.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10 slide-active' : 'opacity-0 z-0'
            }`}
          >
            {renderSlide(slide, index, index === currentSlide)}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400"
        aria-label="Previous Slide"
      >
        <ArrowIcon className="w-6 h-6 transform rotate-180" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400"
        aria-label="Next Slide"
      >
        <ArrowIcon className="w-6 h-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-20">
        <div
          className="h-full bg-rose-400 transition-all duration-300 ease-in-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          aria-valuenow={currentSlide + 1}
          aria-valuemin={1}
          aria-valuemax={totalSlides}
          aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
          role="progressbar"
        ></div>
      </div>
    </main>
  );
};

export default App;