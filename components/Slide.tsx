
import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  source?: string;
}

export const Slide: React.FC<SlideProps> = ({ children, source }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8 md:p-16 relative animated-gradient-background">
      <div className="w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
      {source && (
        <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-500 italic">
          {source}
        </footer>
      )}
    </div>
  );
};