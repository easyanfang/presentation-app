// This file contains the complete source code of the application as a constant.
// It is used by the "Download Project" feature in App.tsx to create a zip file
// for easy deployment to static hosting services like GitHub Pages.

export const PROJECT_FILES = [
  {
    path: 'index.html',
    content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="./" />
    <title>mydays Outdoor-Analyse für Exclusiva Sport GmbH</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
    <!-- Add Babel to transpile JSX/TSX in the browser -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      body {
        font-family: 'Poppins', sans-serif;
      }
      @keyframes subtle-scale {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .animate-subtle-scale {
        animation: subtle-scale 4s infinite ease-in-out;
      }
      .export-container-active {
        position: absolute;
        left: -9999px; /* Move off-screen instead of using opacity */
        top: 0;
        width: 1920px;
        height: 1080px;
      }
      .export-container-active .slide-wrapper {
        width: 1920px;
        height: 1080px;
        position: relative;
      }
      /* Override h-screen for export */
      .export-container-active .h-screen {
        height: 1080px !important;
      }
      @keyframes animated-gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animated-gradient-background {
        background: linear-gradient(-45deg, #0f172a, #1f2937, #991b1b, #1f2937);
        background-size: 400% 400%;
        animation: animated-gradient 15s ease infinite;
      }

      /* New Entrance Animations */
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fade-in-down {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes zoom-in {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      
      .animate-fade-in-up, .animate-fade-in-down, .animate-zoom-in {
        opacity: 0; /* Start hidden */
      }
      
      .slide-active .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
      }
      .slide-active .animate-fade-in-down {
        animation: fade-in-down 0.6s ease-out forwards;
      }
      .slide-active .animate-zoom-in, .z-40.animate-zoom-in {
        animation: zoom-in 0.5s ease-out forwards;
      }

    </style>
  <script type="importmap">
{
  "imports": {
    "react": "https://aistudiocdn.com/react@^19.2.0",
    "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
    "react/": "https://aistudiocdn.com/react@^19.2.0/"
  }
}
</script>
</head>
  <body class="bg-slate-900">
    <div id="root"></div>
    <!-- Update script type to "text/babel" for in-browser transpilation -->
    <script type="text/babel" data-type="module" src="./index.tsx"></script>
  </body>
</html>`
  },
  {
    path: 'index.tsx',
    content: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
  },
  {
    path: 'App.tsx',
    content: `

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
import { DownloadIcon } from './components/icons/DownloadIcon';
import { RecordIcon } from './components/icons/RecordIcon';
import { CompetitiveLandscapeSlide } from './components/slides/CompetitiveLandscapeSlide';
import { CompetitorProfileSlide } from './components/slides/CompetitorProfileSlide';
import { CompetitorStrategySlide } from './components/slides/CompetitorStrategySlide';
import { CompetitorMessagingSlide } from './components/slides/CompetitorMessagingSlide';
import { ActiveTravelIntroSlide } from './components/slides/ActiveTravelIntroSlide';
import { FocusCompetitorSlide } from './components/slides/FocusCompetitorSlide';
import { AssignmentBriefSlide } from './components/slides/AssignmentBriefSlide';
import { ImageIcon } from './components/icons/ImageIcon';
import { ShareIcon } from './components/icons/ShareIcon';
import { LinkIcon } from './components/icons/LinkIcon';
import { PROJECT_FILES } from './projectFiles';


const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isDownloadingImages, setIsDownloadingImages] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const [exportSlideIndex, setExportSlideIndex] = useState<number | null>(null);
  const [recordingProgress, setRecordingProgress] = useState({ current: 0, total: 0, time: 0 });
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isShareLinkModalOpen, setIsShareLinkModalOpen] = useState(false);


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

  const handleDownload = async () => {
    setIsDownloading(true);
    await new Promise(resolve => setTimeout(resolve, 100));

    // @ts-ignore
    const { jsPDF } = window.jspdf;
    // @ts-ignore
    const html2canvas = window.html2canvas;

    if (!jsPDF || !html2canvas) {
      alert("PDF generation libraries not loaded.");
      setIsDownloading(false);
      return;
    }

    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });

    try {
      for (let i = 0; i < SLIDES_DATA.length; i++) {
        setExportSlideIndex(i);
        await new Promise(resolve => setTimeout(resolve, 100)); 

        const container = document.querySelector('.export-container-active');
        if (!container) throw new Error('Export container not found');
        
        const images = Array.from(container.getElementsByTagName('img'));
        const imageLoadPromises = images.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => { img.onload = resolve; img.onerror = resolve; });
        });
        await Promise.all(imageLoadPromises);
        await new Promise(resolve => setTimeout(resolve, 500));

        const canvas = await html2canvas(container as HTMLElement, {
          scale: 1, useCORS: true, logging: false, width: 1920, height: 1080, allowTaint: true,
        });

        const imgData = canvas.toDataURL('image/png');
        if (i > 0) pdf.addPage([1920, 1080], 'landscape');
        pdf.addImage(imgData, 'PNG', 0, 0, 1920, 1080);
      }
      pdf.save('mydays-Outdoor-Analyse.pdf');
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Sorry, there was an error creating the PDF.");
    } finally {
      setExportSlideIndex(null);
      setIsDownloading(false);
    }
  };
  
  const handleRecordVideo = async () => {
    setIsRecording(true);
    const SLIDE_DURATION_MS = 5000; // 5 seconds per slide
    const recordedChunks: Blob[] = [];

    // @ts-ignore
    const html2canvas = window.html2canvas;
    if (!html2canvas) {
        alert("Recording library not loaded.");
        setIsRecording(false);
        return;
    }

    const recordingCanvas = document.createElement('canvas');
    recordingCanvas.width = 1920;
    recordingCanvas.height = 1080;
    const ctx = recordingCanvas.getContext('2d');
    if (!ctx) {
        alert("Could not create canvas context for recording.");
        setIsRecording(false);
        return;
    }

    const stream = recordingCanvas.captureStream(30); // 30 fps
    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mydays-Outdoor-Praesentation.webm';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    mediaRecorder.start();

    try {
        for (let i = 0; i < SLIDES_DATA.length; i++) {
            const timeLeft = (SLIDES_DATA.length - i) * (SLIDE_DURATION_MS / 1000);
            setRecordingProgress({ current: i + 1, total: SLIDES_DATA.length, time: Math.round(timeLeft) });
            setExportSlideIndex(i);

            await new Promise(resolve => setTimeout(resolve, 100)); // wait for render

            const container = document.querySelector('.export-container-active');
            if (!container) throw new Error('Export container not found');

            const canvas = await html2canvas(container as HTMLElement, {
                scale: 1, useCORS: true, logging: false, width: 1920, height: 1080, allowTaint: true,
            });

            ctx.drawImage(canvas, 0, 0, 1920, 1080);
            await new Promise(resolve => setTimeout(resolve, SLIDE_DURATION_MS));
        }
    } catch (error) {
        console.error("Failed to record video:", error);
        alert("Sorry, there was an error recording the video.");
    } finally {
        if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }
        setExportSlideIndex(null);
        setIsRecording(false);
        setRecordingProgress({ current: 0, total: 0, time: 0 });
    }
};

const handleDownloadImages = async () => {
    setIsDownloadingImages(true);
    await new Promise(resolve => setTimeout(resolve, 100));

    // @ts-ignore
    const html2canvas = window.html2canvas;

    if (!html2canvas) {
      alert("Image generation library not loaded.");
      setIsDownloadingImages(false);
      return;
    }

    try {
      for (let i = 0; i < SLIDES_DATA.length; i++) {
        setExportSlideIndex(i);
        await new Promise(resolve => setTimeout(resolve, 100)); 

        const container = document.querySelector('.export-container-active');
        if (!container) throw new Error('Export container not found');
        
        const images = Array.from(container.getElementsByTagName('img'));
        const imageLoadPromises = images.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => { img.onload = resolve; img.onerror = resolve; });
        });
        await Promise.all(imageLoadPromises);
        await new Promise(resolve => setTimeout(resolve, 500));

        const canvas = await html2canvas(container as HTMLElement, {
          scale: 1, useCORS: true, logging: false, width: 1920, height: 1080, allowTaint: true,
        });

        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = \`slide-\${i + 1}.png\`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    } catch (error) {
      console.error("Failed to generate images:", error);
      alert("Sorry, there was an error creating the images.");
    } finally {
      setExportSlideIndex(null);
      setIsDownloadingImages(false);
    }
  };
  
  const handleDownloadProject = async () => {
    setIsZipping(true);
    try {
      // @ts-ignore
      const JSZip = window.JSZip;
      if (!JSZip) {
        alert("Zipping library not found. Please check your internet connection.");
        return;
      }

      const zip = new JSZip();
      PROJECT_FILES.forEach(file => {
        zip.file(file.path, file.content);
      });

      const blob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'presentation-project.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Failed to create zip file:", error);
      alert("Sorry, there was an error creating the project zip file.");
    } finally {
      setIsZipping(false);
    }
  };


  const renderSlide = (slide: SlideData, index: number, isActive: boolean) => {
    // FIX: The component map was causing type errors because it couldn't infer the correct props for each slide type.
    // Using a switch statement on the discriminated union \`slide.type\` ensures that each component receives the correct, type-safe props.
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

  const isBusy = isDownloading || isRecording || isDownloadingImages || isZipping;

  const handleSharePDF = () => {
    setIsShareModalOpen(false);
    setTimeout(handleDownload, 100);
  };

  const handleShareVideo = () => {
    setIsShareModalOpen(false);
    setTimeout(handleRecordVideo, 100);
  };

  const handleShareImages = () => {
    setIsShareModalOpen(false);
    setTimeout(handleDownloadImages, 100);
  };

  return (
    <main className="relative w-full h-screen bg-slate-900 text-white overflow-hidden flex items-center justify-center">
      {isDownloading && (
        <div className="absolute inset-0 bg-slate-900/80 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
          <div className="text-2xl font-bold text-white mb-4">Generating PDF...</div>
          <p className="text-slate-300">Capturing slide {exportSlideIndex !== null ? exportSlideIndex + 1 : 0} of {totalSlides}</p>
          <p className="text-slate-400 text-sm mt-2">Please wait, this may take a moment.</p>
        </div>
      )}

      {isRecording && (
        <div className="absolute inset-0 bg-slate-900/80 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-white mb-4">Recording Video...</div>
            <p className="text-slate-300">Processing slide {recordingProgress.current} of {recordingProgress.total}</p>
            <p className="text-slate-400 text-sm mt-2">
                Estimated time remaining: {recordingProgress.time} seconds.
            </p>
            <p className="text-slate-500 text-xs mt-4">Please keep this tab open. Download will start automatically.</p>
        </div>
      )}

      {isDownloadingImages && (
        <div className="absolute inset-0 bg-slate-900/80 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-white mb-4">Generating Images...</div>
            <p className="text-slate-300">Exporting slide {exportSlideIndex !== null ? exportSlideIndex + 1 : 0} of {totalSlides}</p>
            <p className="text-slate-400 text-sm mt-2">Downloads will begin automatically.</p>
        </div>
      )}

      {isZipping && (
        <div className="absolute inset-0 bg-slate-900/80 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-white mb-4">Packaging Project Files...</div>
            <p className="text-slate-400 text-sm mt-2">Your download will begin shortly.</p>
        </div>
      )}

      {isShareLinkModalOpen && (
        <div 
          className="absolute inset-0 bg-slate-900/80 z-40 flex items-center justify-center backdrop-blur-sm animate-zoom-in"
          style={{animationDuration: '200ms'}}
          onClick={() => setIsShareLinkModalOpen(false)}
        >
          <div 
            className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Share a Live Link</h2>
            <p className="text-slate-400 mb-8 text-center">To get a shareable link, host this project for free on GitHub Pages. Just follow these steps:</p>
            
            <ol className="space-y-4 text-left">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/80 text-white font-bold flex items-center justify-center">1</div>
                <div>
                  <h3 className="font-semibold text-white">Download the Project Files</h3>
                  <p className="text-slate-400 text-sm mb-3">This zip file contains everything needed to run the presentation.</p>
                  <button 
                    onClick={handleDownloadProject}
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-rose-500 hover:bg-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    Download Project.zip
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/80 text-white font-bold flex items-center justify-center">2</div>
                <div>
                  <h3 className="font-semibold text-white">Create a New GitHub Repository</h3>
                   <p className="text-slate-400 text-sm mb-3">Go to GitHub and create a new public repository to store the project files.</p>
                  <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-700 hover:bg-slate-600 transition-colors text-white text-sm font-medium">
                    Create Repository on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/80 text-white font-bold flex items-center justify-center">3</div>
                <div>
                  <h3 className="font-semibold text-white">Upload Files & Deploy</h3>
                  <p className="text-slate-400 text-sm">Upload the contents of the zip file to your new repository. Then, go to <code className="text-xs bg-slate-700 px-1 py-0.5 rounded">Settings &gt; Pages</code>, select the main branch, and click 'Save'. You'll get a public link to share!</p>
                </div>
              </li>
            </ol>

          </div>
        </div>
      )}


      {isShareModalOpen && (
        <div 
          className="absolute inset-0 bg-slate-900/80 z-40 flex items-center justify-center backdrop-blur-sm animate-zoom-in"
          style={{animationDuration: '200ms'}}
          onClick={() => setIsShareModalOpen(false)}
        >
          <div 
            className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl p-8 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Share Presentation</h2>
            <p className="text-slate-400 mb-8 text-center">Choose the best format to share your work with your teacher.</p>
            
            <div className="space-y-4">
               <button 
                  onClick={() => { setIsShareModalOpen(false); setIsShareLinkModalOpen(true); }}
                  className="w-full flex items-center justify-between p-6 bg-slate-700/80 hover:bg-slate-700 rounded-lg border border-rose-500/50 hover:border-rose-400 transition-all duration-300 group shadow-lg shadow-rose-500/10"
                >
                  <div className="flex items-center">
                    <LinkIcon className="w-10 h-10 text-rose-300 mr-5 transition-transform group-hover:scale-110" />
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-white">Share via Link (Recommended)</h3>
                      <p className="text-sm text-slate-400 mt-1">Get a link to the live, interactive presentation.</p>
                    </div>
                  </div>
                  <ArrowIcon className="w-6 h-6 text-slate-400 transform -rotate-45 group-hover:text-rose-300 transition-colors" />
                </button>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <button 
                  onClick={handleSharePDF}
                  className="flex flex-col items-center justify-center p-6 bg-slate-700/50 hover:bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-400 transition-all duration-300 group"
                >
                  <DownloadIcon className="w-10 h-10 text-slate-300 mb-3 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold text-white">PDF Document</h3>
                  <p className="text-sm text-slate-400 mt-1">For printing/reading.</p>
                </button>

                <button
                  onClick={handleShareVideo}
                  className="flex flex-col items-center justify-center p-6 bg-slate-700/50 hover:bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-400 transition-all duration-300 group"
                >
                  <RecordIcon className="w-10 h-10 text-slate-300 mb-3 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold text-white">Video File</h3>
                  <p className="text-sm text-slate-400 mt-1">A recorded playthrough.</p>
                </button>
                
                <button
                  onClick={handleShareImages}
                  className="flex flex-col items-center justify-center p-6 bg-slate-700/50 hover:bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-400 transition-all duration-300 group"
                >
                  <ImageIcon className="w-10 h-10 text-slate-300 mb-3 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold text-white">Image Files</h3>
                  <p className="text-sm text-slate-400 mt-1">Each slide as a PNG.</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      <div className={exportSlideIndex !== null ? 'export-container-active' : ''}>
        <div className="slide-wrapper">
          {exportSlideIndex !== null && renderSlide(SLIDES_DATA[exportSlideIndex], exportSlideIndex, true)}
        </div>
      </div>
      
      <div className="absolute top-4 left-6 z-20 flex items-center gap-4">
        <div className="text-sm font-bold text-rose-300">mydays Outdoor-Analyse</div>
        <button
          onClick={() => setIsShareModalOpen(true)}
          disabled={isBusy}
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Share or Export Presentation"
        >
          <ShareIcon className="w-5 h-5" />
          <span className="text-sm font-medium">Share</span>
        </button>
      </div>

      <div className="absolute top-4 right-6 text-sm font-semibold text-slate-400">
        Slide {currentSlide + 1} / {totalSlides}
      </div>

      <div className="w-full h-full">
        {SLIDES_DATA.map((slide, index) => (
          <div
            key={index}
            className={\`absolute inset-0 transition-opacity duration-700 ease-in-out \${
              index === currentSlide ? 'opacity-100 z-10 slide-active' : 'opacity-0 z-0'
            }\`}
          >
            {renderSlide(slide, index, index === currentSlide)}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevSlide}
        disabled={isBusy}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous Slide"
      >
        <ArrowIcon className="w-6 h-6 transform rotate-180" />
      </button>
      <button
        onClick={goToNextSlide}
        disabled={isBusy}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next Slide"
      >
        <ArrowIcon className="w-6 h-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-20">
        <div
          className="h-full bg-rose-400 transition-all duration-300 ease-in-out"
          style={{ width: \`\${((currentSlide + 1) / totalSlides) * 100}%\` }}
          aria-valuenow={currentSlide + 1}
          aria-valuemin={1}
          aria-valuemax={totalSlides}
          aria-label={\`Slide \${currentSlide + 1} of \${totalSlides}\`}
          role="progressbar"
        ></div>
      </div>
    </main>
  );
};

export default App;`
  },
  {
    path: 'constants.ts',
    content: `import type { SlideData } from './types';

export const SLIDES_DATA: SlideData[] = [
  // 1. Title
  {
    type: 'title',
    source: '',
    content: {
      title: "mydays Outdoor-Erlebnisse: Eine strategische Analyse",
      subtitle: "Entscheidungsgrundlage für den Markteintritt der Exclusiva Sport GmbH",
      author: "Präsentiert von Exclusiva Sport GmbH"
    },
  },
  // 2. Project Goal
  {
    type: 'assignment_brief',
    source: 'Quelle: Internes Strategie-Meeting, Exclusiva Sport GmbH',
    content: {
      title: "Unser Projektziel: Vom Verkauf zur Erlebniswelt",
      subtitle: "Analyse des mydays-Modells als Blaupause für Exclusiva Sport",
      workOrder: {
        title: "Der Auftrag",
        text: "Bewerten Sie das Geschäftsmodell von mydays im Segment 'Outdoor & Sport', um Synergien und eine Markteintrittsstrategie für Exclusiva Sport GmbH zu entwickeln."
      },
      guidingQuestions: {
        title: "Strategische Leitfragen",
        intro: "Unsere Analyse fokussiert sich auf folgende Kernpunkte:",
        points: [
          "Welche Synergien gibt es zwischen Ausrüstungsverkauf und Erlebnissen?",
          "Wie kann Exclusiva Sport seine Markenkompetenz nutzen?",
          "Was sind die Erfolgsfaktoren und Risiken im Erlebnismarkt?"
        ]
      },
      focusStatement: "mydays dient als Best-Practice-Beispiel für die erfolgreiche Vermarktung von Sport-Erlebnissen."
    },
  },
  // 3. Intro to Outdoor Market
  {
    type: 'active_travel_intro',
    source: 'Quelle: Branchenanalyse & Markttrends im Sport- und Freizeitsektor.',
    content: {
      title: 'Der Markt für Outdoor- & Sport-Erlebnisse',
      description: "Der Wunsch nach aktiver Freizeitgestaltung in der Natur wächst stetig. Dieser Trend schafft einen lukrativen Markt, der perfekt zur Kernkompetenz von Exclusiva Sport – der Bereitstellung von hochwertiger Sportausrüstung – passt.",
      stats: [
        { value: '25%+', label: 'Wachstum bei Outdoor-Aktivitäten' },
        { value: 'Synergie', label: 'Ausrüstung & Erlebnis' },
      ],
    }
  },
  // 4. Competitive Landscape
  {
    type: 'competitive_landscape',
    source: 'Quelle: Branchenanalyse aus verschiedenen Marktberichten.',
    content: {
      title: "Wer sind die Hauptakteure?",
      description: "Der Markt für Erlebnisgeschenke ist durch starke Marken und unterschiedliche Geschäftsmodelle geprägt. mydays konkurriert sowohl mit direkten Anbietern als auch mit größeren Reiseplattformen.",
      competitors: [
        {
          name: 'Jochen Schweizer',
          logoUrl: 'https://images.seeklogo.com/logo-png/49/1/jochen-schweizer-logo-png_seeklogo-496269.png',
          description: 'Historisch der größte Konkurrent mit einer extrem starken Marke für Abenteuer, Action und Outdoor-Sport.',
          brandColor: '#ff6600'
        },
        {
          name: 'mydays',
          logoUrl: 'https://images.seeklogo.com/logo-png/35/1/mydays-logo-png_seeklogo-357684.png',
          description: 'Fokus auf Geschenk-Charakter und breites, zugängliches Portfolio. Starke Positionierung bei Paaren und Familien.',
          brandColor: '#e4003a'
        },
        {
          name: 'GetYourGuide',
          logoUrl: 'https://images.seeklogo.com/logo-png/49/1/getyourguide-logo-png_seeklogo-499167.png',
          description: 'Konkurriert um das Freizeitbudget mit einem Fokus auf Touren und Aktivitäten, oft mit geringerer Anforderung an Spezialausrüstung.',
          brandColor: '#007fad'
        },
      ]
    }
  },
  // 5. Transition to mydays
  {
    type: 'focus_competitor',
    source: '',
    content: {
      title: 'Analysefokus: mydays Outdoor & Sport',
      description: "Wir analysieren gezielt, wie mydays sein Segment für Outdoor-Aktivitäten und Sporterlebnisse strukturiert, vermarktet und welche Lehren wir für Exclusiva Sport daraus ziehen können.",
      logoUrl: 'https://images.seeklogo.com/logo-png/35/1/mydays-logo-png_seeklogo-357684.png'
    }
  },
  // 6. Intro to mydays Outdoor
  {
    type: 'intro',
    source: 'Quelle: Unternehmensinformationen der Jochen Schweizer mydays Group.',
    content: {
      title: "mydays im Outdoor-Segment",
      points: [
        "Bietet hunderte Erlebnisse in Kategorien wie 'Action & Natur'.",
        "Fungiert als Vermittler zwischen Kunden und spezialisierten Outdoor-Partnern.",
        "Fokus liegt auf der einfachen Buchbarkeit und dem Geschenk-Charakter.",
        "Nutzt eine etablierte Plattform für breite Kundenansprache."
      ],
      stat: {
        value: "1.000+",
        label: "Outdoor-Erlebnisse"
      }
    },
  },
  // 7. Profile
  {
    type: 'competitor_profile',
    source: 'Quelle: Analyse basierend auf der mydays-Plattform und AGBs.',
    content: {
      title: "Zielgruppe & Angebotsstruktur",
      subtitle: "mydays adressiert Gelegenheits-Sportler und Erlebnis-Suchende.",
      comparisonPoints: [
        {
          icon: 'target',
          title: "Zielgruppe",
          text: "Personen, die ein besonderes Outdoor-Erlebnis suchen oder verschenken wollen, oft ohne eigene Spezialausrüstung. Geringere Einstiegshürde."
        },
        {
          icon: 'price',
          title: "Preisstrategie",
          text: "Paketpreise, die oft Guide und Leih-Ausrüstung beinhalten. Provision-basiertes Modell mit lokalen Partnern. Der Wert liegt in der einfachen Buchung."
        },
        {
          icon: 'terms',
          title: "Gutscheinbedingungen",
          text: "Hohe Flexibilität bei Umbuchung und Gutscheingültigkeit. Wichtig bei wetterabhängigen Outdoor-Aktivitäten."
        }
      ]
    }
  },
  // 8. Strategy
  {
    type: 'competitor_strategy',
    source: 'Quelle: Analyse des Marketings und der Plattform-UX/UI von mydays.',
    content: {
      title: "Vermarktung von Outdoor-Erlebnissen",
      strategyPoints: [
        {
          icon: 'distribution',
          title: 'Vertriebskanäle',
          text: "Starke Online-Präsenz mit gezieltem SEO/SEM für Keywords wie 'Kletterkurs' oder 'Kajak-Tour'. Physische Boxen im Handel als Geschenkartikel."
        },
        {
          icon: 'communication',
          title: 'Kundenkommunikation',
          text: "Emotionales Marketing, das Abenteuer und Naturerlebnis zeigt. Fokus auf 'unvergessliche Momente' statt auf technischer sportlicher Leistung."
        },
      ],
      checkout: {
        title: "Niedrigschwellige Buchung",
        description: "Der Prozess ist auf Einfachheit optimiert, um auch Kunden ohne Vorerfahrung anzusprechen. Die technische Komplexität des Sports wird abstrahiert."
      }
    }
  },
  // 9. Messaging
  {
    type: 'competitor_messaging',
    source: 'Quelle: mydays Unternehmenswebsite und Werbekampagnen.',
    content: {
      title: 'Markenbotschaft im Sport-Kontext',
      messagingPoints: [
        {
          icon: 'communication',
          title: 'Werbebotschaft',
          text: \`"Zeit für Abenteuer. Zeit für dich." Die Botschaft fokussiert auf die persönliche Auszeit und das Erlebnis, nicht auf die sportliche Höchstleistung.\`
        },
        {
          icon: 'mission',
          title: 'Leitbild',
          text: \`Die Mission, "außergewöhnliche Freizeit" zu gestalten, wird im Outdoor-Bereich durch zugängliche Abenteuer und Naturerlebnisse für jedermann umgesetzt.\`
        }
      ]
    }
  },
  // 10. SWOT Definition
  {
    type: 'definition',
    source: 'Quelle: Adaptiert für die strategische Analyse von Exclusiva Sport GmbH.',
    content: {
      title: "Was ist eine SWOT-Analyse?",
      description: "Ein strategisches Werkzeug, um die internen Stärken/Schwächen von mydays' Outdoor-Sparte und die externen Chancen/Risiken im Markt zu bewerten.",
      items: [
        { letter: 'S', name: 'Stärken', desc: 'Interne Eigenschaften, die einen Vorteil verschaffen.', color: 'text-green-300' },
        { letter: 'W', name: 'Schwächen', desc: 'Interne Eigenschaften, die einen Nachteil darstellen.', color: 'text-yellow-300' },
        { letter: 'O', name: 'Chancen', desc: 'Externe Faktoren, die genutzt werden können.', color: 'text-violet-300' },
        { letter: 'T', name: 'Risiken', desc: 'Externe Faktoren, die Probleme verursachen könnten.', color: 'text-rose-300' },
      ]
    },
  },
  // 11. SWOT Overview
  {
    type: 'overview',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      title: "mydays Outdoor-SWOT: Eine Übersicht",
      quadrants: [
        { title: "Stärken", points: ["Etablierte Plattform & Marke", "Erprobtes Partner-Netzwerk", "Expertise in Gutschein-Logistik"], color: "bg-green-500/10 hover:bg-green-500/20", targetSlide: 11 },
        { title: "Schwächen", points: ["Fehlende 'Sport-Experten'-Marke", "Abhängigkeit von Partner-Qualität", "Geringe Kundenbindung an Partner"], color: "bg-yellow-500/10 hover:bg-yellow-500/20", targetSlide: 12 },
        { title: "Chancen", points: ["Synergie: Ausrüstung & Erlebnis", "Wachsender Markt für Mikro-Abenteuer", "B2B-Events & Incentives"], color: "bg-violet-500/10 hover:bg-violet-500/20", targetSlide: 13 },
        { title: "Risiken", points: ["Haftungs- & Sicherheitsrisiken", "Wetterabhängigkeit", "Konkurrenz durch Spezialanbieter"], color: "bg-rose-500/10 hover:bg-rose-500/20", targetSlide: 14 },
      ]
    },
  },
  // 12. Strengths Mind Map
  {
    type: 'mindmap',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      mindMapData: {
        centerText: 'Stärken',
        color: 'border-green-400',
        branches: [
          { title: "Etablierte Plattform & Marke", description: "Hohe Reichweite und Vertrauen bei Kunden, die Erlebnisse suchen. Starke Online-Sichtbarkeit." },
          { title: "Erprobtes Partner-Netzwerk", description: "Bestehende Infrastruktur und Prozesse zur Anbindung und Verwaltung von hunderten kleinen Erlebnis-Partnern." },
          { title: "Expertise in Gutschein-Logistik", description: "Effiziente Abwicklung von Verkauf, Buchung und Abrechnung, was für Kunden und Partner attraktiv ist." },
          { title: "Hoher Bekanntheitsgrad", description: "Starke Positionierung im Geschenke-Markt, was eine breite, kaufkräftige Zielgruppe anspricht." },
        ]
      }
    },
  },
  // 13. Weaknesses Mind Map
  {
    type: 'mindmap',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      mindMapData: {
        centerText: 'Schwächen',
        color: 'border-yellow-400',
        branches: [
          { title: "Fehlende 'Sport-Experten'-Marke", description: "mydays wird als Generalist für 'nette Erlebnisse' wahrgenommen, nicht als Marke für ernsthaften Sport." },
          { title: "Qualität der Partner", description: "Die Qualität des Erlebnisses hängt von Dritten ab und ist schwer zu kontrollieren, was ein Reputationsrisiko darstellt." },
          { title: "Preisdruck", description: "Kunden können oft günstiger direkt beim Anbieter buchen, mydays muss seinen Mehrwert klar kommunizieren." },
          { title: "Geringe Kundenbindung", description: "Kunden buchen ein spezifisches Erlebnis, nicht die 'Marke' mydays. Die Loyalität gilt oft dem lokalen Anbieter." },
        ]
      }
    },
  },
  // 14. Opportunities Mind Map
  {
    type: 'mindmap',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      mindMapData: {
        centerText: 'Chancen',
        color: 'border-violet-400',
        branches: [
          { title: "Synergie: Ausrüstung & Erlebnis", description: "Perfekte Cross-Selling-Möglichkeiten: Verkauf von Ausrüstung an Erlebnis-Kunden und umgekehrt." },
          { title: "Markt für 'Mikro-Abenteuer'", description: "Wachsender Trend zu kurzen, lokalen Outdoor-Erlebnissen, die leicht zugänglich sind." },
          { title: "B2B-Markt für Outdoor-Events", description: "Steigende Nachfrage nach aktiven Team-Events und Mitarbeiter-Incentives in der Natur." },
          { title: "Positionierung als Kurator", description: "Eine starke Marke kann als vertrauenswürdiger Filter für qualitativ hochwertige und sichere Erlebnisse dienen." },
        ]
      }
    },
  },
  // 15. Threats Mind Map
  {
    type: 'mindmap',
    source: 'Quelle: Interne Analyse für Exclusiva Sport GmbH.',
    content: {
      mindMapData: {
        centerText: 'Risiken',
        color: 'border-rose-400',
        branches: [
          { title: "Haftungs- & Sicherheitsrisiken", description: "Bei Sportaktivitäten bestehen erhöhte Unfallrisiken. Klare Haftungsregeln und Versicherungen sind essenziell." },
          { title: "Starke Wetterabhängigkeit", description: "Outdoor-Events sind anfällig für Ausfälle oder Verschiebungen, was zu unzufriedenen Kunden führen kann." },
          { title: "Konkurrenz durch Spezialanbieter", description: "Lokale Guides oder Nischen-Plattformen können oft authentischere oder günstigere Erlebnisse anbieten." },
          { title: "Partner-Fehler", description: "Negative Bewertungen aufgrund von schlechtem Service eines Partners fallen direkt auf die Marke mydays zurück." },
        ]
      }
    },
  },
  // 16. Strategic Implications
  {
    type: 'implications',
    source: 'Quelle: Strategische Ableitung für Exclusiva Sport GmbH.',
    content: {
      title: "Strategische Imperative für Exclusiva Sport GmbH",
      description: "Ableitungen aus der mydays-Analyse für unseren erfolgreichen Markteintritt.",
      quadrants: {
        S: { title: "Stärken", color: "green", textColor: "text-green-300", borderColor: "border-green-400", shadowColor: "shadow-green-500/30" },
        W: { title: "Schwächen", color: "yellow", textColor: "text-yellow-300", borderColor: "border-yellow-400", shadowColor: "shadow-yellow-500/30" },
        O: { title: "Chancen", color: "violet", textColor: "text-violet-300", borderColor: "border-violet-400", shadowColor: "shadow-violet-500/30" },
        T: { title: "Risiken", color: "rose", textColor: "text-rose-300", borderColor: "border-rose-400", shadowColor: "shadow-rose-500/30" },
      },
      strategies: [
        { 
          title: "Synergien heben: Ausrüstung & Erlebnis-Pakete", 
          description: "Bieten Sie Kombi-Pakete aus Leih-/Kauf-Ausrüstung und geführten Touren an. Nutzen Sie die mydays-Plattform als Vorbild für die Vermarktung.",
          poweredBy: [
            { type: "S", text: "Etablierte Plattform & Marke" },
            { type: "O", text: "Synergie: Ausrüstung & Erlebnis" }
          ] 
        },
        { 
          title: "Marke als Qualitätsgarant etablieren", 
          description: "Positionieren Sie Exclusiva Sport als Experten-Marke, die nur geprüfte, hochwertige Touren mit zertifizierten Guides anbietet.",
          poweredBy: [
            { type: "W", text: "Fehlende 'Sport-Experten'-Marke" },
            { type: "O", text: "Positionierung als Kurator" }
          ] 
        },
        { 
          title: "Fokus auf ausrüstungsintensive Nischen", 
          description: "Konzentrieren Sie sich auf Sportarten (z.B. Klettern, Skitouren), bei denen die Ausrüstungs-Qualität entscheidend ist, um sich von Generalisten abzuheben.",
          poweredBy: [
            { type: "S", text: "Expertise in Gutschein-Logistik" },
            { type: "T", text: "Haftungs- & Sicherheitsrisiken" }
          ] 
        },
        { 
          title: "Community-Aufbau zur Kundenbindung", 
          description: "Schaffen Sie eine Community um Ihre Erlebnisse (z.B. durch Events im Store), um die Kundenbindung zu stärken und dem Preisvergleich zu entgehen.",
          poweredBy: [
            { type: "W", text: "Geringe Kundenbindung an Partner" },
            { type: "T", text: "Konkurrenz durch Spezialanbieter" }
          ] 
        }
      ]
    },
  },
  // 17. Conclusion
  {
    type: 'conclusion',
    source: '',
    content: {
      title: "Fazit: Ein strategischer Fit für Exclusiva Sport?",
      summaryPoints: [
        "Der Markt für Outdoor-Erlebnisse bietet enormes Wachstumspotenzial und passt perfekt zur Marke Exclusiva Sport.",
        "Ein reiner Vermittler-Ansatz wie bei mydays ist riskant; die Stärke liegt in der Kombination von Produkt- und Erlebnis-Kompetenz.",
        "Erfolgsentscheidend sind ein rigoroses Qualitätsmanagement der Partner und die Positionierung als vertrauenswürdige Experten-Marke.",
      ],
      finalThought: "Der Einstieg in den Erlebnismarkt ist eine logische und vielversprechende Expansion, wenn Exclusiva Sport seine Markenidentität als Qualitätsführer für Ausrüstung konsequent auf die Erlebniswelt überträgt."
    },
  },
];`
  },
  {
    path: 'types.ts',
    content: `

export interface MindMapNode {
  title: string;
  description: string;
}

export interface MindMapData {
  centerText: string;
  branches: MindMapNode[];
  color: string;
}

export type SlideType = 'title' | 'intro' | 'definition' | 'overview' | 'mindmap' | 'implications' | 'conclusion' | 'competitive_landscape' | 'competitor_profile' | 'competitor_strategy' | 'competitor_messaging' | 'active_travel_intro' | 'focus_competitor' | 'assignment_brief';

// FIX: Define specific content interfaces for each slide type to enable strong type checking.
export interface TitleSlideContent {
  title: string;
  subtitle: string;
  author: string;
}

export interface AssignmentBriefSlideContent {
  title: string;
  subtitle: string;
  workOrder: {
    title: string;
    text: string;
  };
  guidingQuestions: {
    title: string;
    intro: string;
    points: string[];
  };
  focusStatement: string;
}

export interface ActiveTravelIntroSlideContent {
  title: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface FocusCompetitorSlideContent {
  title:string;
  description: string;
  logoUrl: string;
}

export interface IntroSlideContent {
  title: string;
  points: string[];
  stat: {
    value: string;
    label: string;
  };
}

export interface SwotDefinitionSlideContent {
  title: string;
  description: string;
  items: {
    letter: string;
    name: string;
    desc: string;
    color: string;
  }[];
}

export interface SwotOverviewSlideContent {
  title: string;
  quadrants: {
    title: string;
    points: string[];
    color: string;
    targetSlide: number;
  }[];
}

export interface MindMapSlideContent {
  mindMapData: MindMapData;
}

export interface QuadrantData {
  title: string;
  color: string;
  textColor: string;
  borderColor: string;
  shadowColor: string;
}

export interface StrategyFactor {
  type: 'S' | 'W' | 'O' | 'T';
  text: string;
}

export interface StrategyCardData {
  title: string;
  description: string;
  poweredBy: StrategyFactor[];
}

export interface StrategicImplicationsSlideContent {
  title: string;
  description: string;
  strategies: StrategyCardData[];
  quadrants: {
    S: QuadrantData;
    W: QuadrantData;
    O: QuadrantData;
    T: QuadrantData;
  };
}

export interface ConclusionSlideContent {
  title: string;
  summaryPoints: string[];
  finalThought: string;
}

// New interfaces for competitor slides
export interface Competitor {
  name: string;
  logoUrl: string;
  description: string;
  brandColor: string;
}

export interface CompetitiveLandscapeSlideContent {
  title: string;
  description: string;
  competitors: Competitor[];
}

export interface ComparisonPoint {
  icon: 'target' | 'price' | 'terms';
  title: string;
  text: string;
}

export interface CompetitorProfileSlideContent {
  title: string;
  subtitle: string;
  comparisonPoints: ComparisonPoint[];
}

export interface StrategyPoint {
  icon: 'distribution' | 'communication';
  title: string;
  text: string;
}

export interface CompetitorStrategySlideContent {
  title: string;
  strategyPoints: StrategyPoint[];
  checkout: {
    title: string;
    description: string;
  };
}

export interface MessagingPoint {
  icon: 'communication' | 'mission';
  title: string;
  text: string;
}

export interface CompetitorMessagingSlideContent {
  title: string;
  messagingPoints: MessagingPoint[];
}


// FIX: Replace generic SlideData with a discriminated union for type safety.
// This ensures that slide.content is correctly typed based on slide.type.
export type SlideData = 
  | { type: 'title'; source: string; content: TitleSlideContent }
  | { type: 'assignment_brief'; source: string; content: AssignmentBriefSlideContent }
  | { type: 'active_travel_intro'; source: string; content: ActiveTravelIntroSlideContent }
  | { type: 'focus_competitor'; source: string; content: FocusCompetitorSlideContent }
  | { type: 'intro'; source: string; content: IntroSlideContent }
  | { type: 'definition'; source: string; content: SwotDefinitionSlideContent }
  | { type: 'overview'; source: string; content: SwotOverviewSlideContent }
  | { type: 'mindmap'; source: string; content: MindMapSlideContent }
  | { type: 'implications'; source: string; content: StrategicImplicationsSlideContent }
  | { type: 'conclusion'; source: string; content: ConclusionSlideContent }
  | { type: 'competitive_landscape', source: string, content: CompetitiveLandscapeSlideContent }
  | { type: 'competitor_profile', source: string, content: CompetitorProfileSlideContent }
  | { type: 'competitor_strategy', source: string, content: CompetitorStrategySlideContent }
  | { type: 'competitor_messaging', source: string, content: CompetitorMessagingSlideContent };`
  },
  {
    path: 'metadata.json',
    content: `{
  "name": "Copy of mydays Outdoor-Erlebnisse: Strategische Analyse für Exclusiva Sport GmbH",
  "description": "Eine Analyse von mydays' Outdoor-Aktivitäten als Entscheidungsgrundlage für den Markteintritt von Exclusiva Sport GmbH in den Erlebnismarkt.",
  "requestFramePermissions": []
}`
  },
  {
    path: 'components/Slide.tsx',
    content: `

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
};`
  },
  {
    path: 'components/icons/ArrowIcon.tsx',
    content: `

import React from 'react';

export const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);`
  },
  {
    path: 'components/icons/CommunicationIcon.tsx',
    content: `

import React from 'react';

export const CommunicationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
);`
  },
  {
    path: 'components/icons/DistributionIcon.tsx',
    content: `

import React from 'react';

export const DistributionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739a3.375 3.375 0 0 0-3.375-3.375h-1.5a3.375 3.375 0 0 0-3.375 3.375V15.5h-1.5a3.375 3.375 0 0 0-3.375 3.375v1.5a3.375 3.375 0 0 0 3.375 3.375h1.5a3.375 3.375 0 0 0 3.375-3.375V18.5h1.5a3.375 3.375 0 0 0 3.375-3.375v-1.5Zm-6.75-10.5a3.375 3.375 0 0 0-3.375-3.375h-1.5a3.375 3.375 0 0 0-3.375 3.375v1.5a3.375 3.375 0 0 0 3.375 3.375h1.5a3.375 3.375 0 0 0 3.375-3.375v-1.5Z" />
    </svg>
);`
  },
  {
    path: 'components/icons/DocumentIcon.tsx',
    content: `

import React from 'react';

export const DocumentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
  </svg>
);`
  },
  {
    path: 'components/icons/DownloadIcon.tsx',
    content: `import React from 'react';

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);`
  },
  {
    path: 'components/icons/ImageIcon.tsx',
    content: `

import React from 'react';

export const ImageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);`
  },
  {
    path: 'components/icons/ListIcon.tsx',
    content: `

import React from 'react';

export const ListIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);`
  },
  {
    path: 'components/icons/MissionIcon.tsx',
    content: `

import React from 'react';

export const MissionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
    </svg>
);`
  },
  {
    path: 'components/icons/OpportunityIcon.tsx',
    content: `import React from 'react';

export const OpportunityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);`
  },
  {
    path: 'components/icons/PriceIcon.tsx',
    content: `

import React from 'react';

export const PriceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.825-1.106-2.156 0-2.981.554-.413 1.282-.659 2.003-.659c.725 0 1.45.22 2.003.659m-4.506 8.622-1.545-1.159c-.873-.656-1.17-1.842-.87-2.848.3-.995 1.17-1.68 2.17-1.68h.253c.694 0 1.37.251 1.905.72l1.096.822c.39.293.855.437 1.32.437h.253c1 0 1.87-.685 2.17-1.68.3-1.006.003-2.192-.87-2.848l-1.544-1.159m-3.952 9.342a3.75 3.75 0 0 0-5.644-2.645 3.75 3.75 0 0 0-2.645 5.644 3.75 3.75 0 0 0 5.644 2.645 3.75 3.75 0 0 0 2.645-5.644Z" />
    </svg>
);`
  },
  {
    path: 'components/icons/RecordIcon.tsx',
    content: `

import React from 'react';

export const RecordIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
  </svg>
);`
  },
  {
    path: 'components/icons/StrengthIcon.tsx',
    content: `import React from 'react';

export const StrengthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
  </svg>
);`
  },
  {
    path: 'components/icons/TargetIcon.tsx',
    content: `

import React from 'react';

export const TargetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);`
  },
  {
    path: 'components/icons/TermsIcon.tsx',
    content: `

import React from 'react';

export const TermsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);`
  },
  {
    path: 'components/icons/ThreatIcon.tsx',
    content: `import React from 'react';

export const ThreatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);`
  },
  {
    path: 'components/icons/WeaknessIcon.tsx',
    content: `import React from 'react';

export const WeaknessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);`
  },
  {
    path: 'components/slides/ActiveTravelIntroSlide.tsx',
    content: `

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
    style={{ animationDelay: \`\${delay}ms\` }}
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
};`
  },
  {
    path: 'components/slides/AssignmentBriefSlide.tsx',
    content: `

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
};`
  },
  {
    path: 'components/slides/CompetitiveLandscapeSlide.tsx',
    content: `

import React, { useState } from 'react';
import { Slide } from '../Slide';
import type { CompetitiveLandscapeSlideContent } from '../../types';

export const CompetitiveLandscapeSlide: React.FC<CompetitiveLandscapeSlideContent & { source: string }> = ({ title, description, competitors, source }) => {
  const [focusedIndex, setFocusedIndex] = useState(1); // Default focus on mydays

  return (
    <Slide source={source}>
      <div className="w-full max-w-7xl mx-auto text-center flex flex-col h-full justify-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-4 animate-fade-in-down">{title}</h2>
          <p className="text-lg text-slate-300 mb-16 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>{description}</p>
        </div>
        <div className="flex-grow flex items-center justify-center gap-4 md:gap-8">
          {competitors.map((competitor, index) => {
            const isFocused = focusedIndex === index;
            const isMydays = competitor.name === 'mydays';
            return (
              <div
                key={index}
                onClick={() => setFocusedIndex(index)}
                className={\`
                  relative p-6 rounded-2xl border transition-all duration-500 ease-in-out cursor-pointer
                  flex flex-col items-center h-[350px] animate-zoom-in
                  \${isFocused
                    ? \`w-1/3 max-w-sm bg-slate-800/80 \${isMydays ? 'border-rose-400' : 'border-slate-500'} scale-105 z-10\`
                    : 'w-1/4 max-w-xs bg-slate-800/40 border-slate-700 scale-90 opacity-70 hover:opacity-100 hover:border-slate-500'
                  }
                \`}
                style={{
                  animationDelay: \`\${400 + index * 100}ms\`,
                  boxShadow: isFocused ? \`0 0 35px -5px \${competitor.brandColor}\` : 'none',
                  minHeight: '320px'
                }}
              >
                <div className={\`
                  w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 overflow-hidden flex-shrink-0
                  transition-all duration-500 ease-in-out
                  \${isFocused ? 'scale-100' : 'scale-90'}
                \`}>
                  <img src={competitor.logoUrl} alt={\`\${competitor.name} logo\`} className="w-20 h-20 object-contain p-1" />
                </div>
                <h3 className={\`
                  text-2xl font-semibold text-white mb-3
                \`}>
                  {competitor.name}
                </h3>
                <div className={\`
                  text-slate-400 text-center transition-all duration-300 ease-in-out overflow-hidden
                  \${isFocused ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                \`}>
                  {competitor.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  );
};`
  },
  {
    path: 'components/slides/CompetitorMessagingSlide.tsx',
    content: `

import React from 'react';
import { Slide } from '../Slide';
import type { CompetitorMessagingSlideContent } from '../../types';
import { CommunicationIcon } from '../icons/CommunicationIcon';
import { MissionIcon } from '../icons/MissionIcon';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    communication: CommunicationIcon,
    mission: MissionIcon,
};

export const CompetitorMessagingSlide: React.FC<CompetitorMessagingSlideContent & { source: string }> = ({ title, messagingPoints, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-12 animate-fade-in-down">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {messagingPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon];
            return (
              <div 
                key={index} 
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 flex flex-col items-center animate-zoom-in"
                style={{ animationDelay: \`\${200 + index * 150}ms\` }}
              >
                {IconComponent && <IconComponent className="w-16 h-16 mb-5 text-rose-300" />}
                <h3 className="text-2xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-slate-300 text-lg italic text-center">"{point.text}"</p>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};`
  },
  {
    path: 'components/slides/CompetitorProfileSlide.tsx',
    content: `

import React from 'react';
import { Slide } from '../Slide';
import type { CompetitorProfileSlideContent } from '../../types';
import { TargetIcon } from '../icons/TargetIcon';
import { PriceIcon } from '../icons/PriceIcon';
import { TermsIcon } from '../icons/TermsIcon';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  target: TargetIcon,
  price: PriceIcon,
  terms: TermsIcon,
};

export const CompetitorProfileSlide: React.FC<CompetitorProfileSlideContent & { source: string }> = ({ title, subtitle, comparisonPoints, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-rose-300 animate-fade-in-down">{title}</h2>
            <p className="text-lg text-slate-300 mt-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>{subtitle}</p>
        </div>
        <div className="space-y-6">
          {comparisonPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon];
            return (
              <div 
                key={index} 
                className="flex items-start bg-slate-800/50 p-6 rounded-lg border border-slate-700 animate-fade-in-up"
                style={{ animationDelay: \`\${400 + index * 150}ms\` }}
              >
                {IconComponent && <IconComponent className="w-10 h-10 text-rose-400 mr-5 flex-shrink-0 mt-1" />}
                <div>
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                  <p className="text-slate-300 mt-1">{point.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};`
  },
  {
    path: 'components/slides/CompetitorStrategySlide.tsx',
    content: `

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
                          style={{ animationDelay: \`\${200 + index * 200}ms\` }}
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
};`
  },
  {
    path: 'components/slides/ConclusionSlide.tsx',
    content: `

import React from 'react';
import { Slide } from '../Slide';

interface ConclusionSlideProps {
  title: string;
  summaryPoints: string[];
  finalThought: string;
}

export const ConclusionSlide: React.FC<ConclusionSlideProps> = ({ title, summaryPoints, finalThought }) => {
  return (
    <Slide>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-rose-300 mb-12 animate-fade-in-down">{title}</h2>
        <div className="text-left space-y-6 mb-12">
          {summaryPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-start text-xl text-slate-200 animate-fade-in-up"
              style={{ animationDelay: \`\${200 + index * 150}ms\` }}
            >
              <span className="text-rose-400 mr-4 mt-1 text-2xl">◆</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t-2 border-rose-400/50 pt-8 animate-zoom-in" style={{ animationDelay: '800ms' }}>
            <p className="text-2xl text-white italic">{finalThought}</p>
        </div>
      </div>
    </Slide>
  );
};`
  },
  {
    path: 'components/slides/FocusCompetitorSlide.tsx',
    content: `

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
};`
  },
  {
    path: 'components/slides/IntroSlide.tsx',
    content: `

import React from 'react';
import { Slide } from '../Slide';

interface IntroSlideProps {
  title: string;
  points: string[];
  stat: {
    value: string;
    label: string;
  };
  source: string;
}

export const IntroSlide: React.FC<IntroSlideProps> = ({ title, points, stat, source }) => {
  return (
    <Slide source={source}>
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-6 animate-fade-in-down">{title}</h2>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: \`\${200 + index * 150}ms\` }}>
                <span className="text-rose-400 mr-3 mt-1">✓</span>
                <span className="text-slate-200 text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-shrink-0 w-48 h-48 rounded-full bg-rose-500/20 flex flex-col items-center justify-center text-center p-4 border-4 border-rose-400 shadow-lg shadow-rose-500/20 animate-zoom-in" style={{ animationDelay: '500ms' }}>
          <span className="text-6xl font-bold text-white">{stat.value}</span>
          <span className="text-lg text-rose-200 leading-tight">{stat.label}</span>
        </div>
      </div>
    </Slide>
  );
};`
  },
  {
    path: 'components/slides/MindMapSlide.tsx',
    content: `import React, { useState, useEffect } from 'react';
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
      style={{ animationDelay: \`\${200 + index * 150}ms\` }}
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
        
        <div className={\`relative mb-10 w-48 h-48 rounded-full flex items-center justify-center text-center p-4 border-4 shadow-xl bg-slate-800 animate-subtle-scale animate-zoom-in \${color}\`}>
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
};`
  },
  {
    path: 'components/slides/StrategicImplicationsSlide.tsx',
    content: `

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
                style={{ animationDelay: \`\${400 + index * 150}ms\` }}
              >
                <div 
                  className="relative rounded-xl p-6 -m-6 mb-6 overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/40"
                >
                  <div className={\`absolute -top-1/2 -left-1/2 w-full h-full opacity-20 \${borderColorS} rounded-full animate-spin [animation-duration:10s]\`}></div>
                  <div className={\`absolute -bottom-1/2 -right-1/2 w-full h-full opacity-20 \${borderColorO} rounded-full animate-spin [animation-duration:12s] [animation-direction:reverse]\`}></div>
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
                          <span className={\`w-3 h-3 rounded-full mr-3 mt-1.5 flex-shrink-0 \${getBgColor(quadrantInfo.textColor)}\`}></span>
                          <div>
                            <span className={\`font-semibold \${quadrantInfo.textColor}\`}>{quadrantInfo.title}:</span>
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
};`
  },
  {
    path: 'components/slides/SwotDefinitionSlide.tsx',
    content: `import React from 'react';
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
                className={\`bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-500 hover:scale-105 transition-all duration-300 group hover:shadow-lg \${shadowClass} animate-zoom-in\`}
                style={{ animationDelay: \`\${300 + index * 150}ms\` }}
              >
                {IconComponent && <IconComponent className={\`w-12 h-12 mx-auto mb-4 \${item.color} transition-transform group-hover:scale-110\`} />}
                <h3 className={\`text-2xl font-semibold \${item.color}\`}>{item.name}</h3>
                <p className="text-slate-400 mt-2">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  );
};`
  },
  {
    path: 'components/slides/SwotOverviewSlide.tsx',
    content: `

import React from 'react';
import { Slide } from '../Slide';

interface Quadrant {
  title: string;
  points: string[];
  color: string;
  targetSlide: number;
}

interface SwotOverviewSlideProps {
  title: string;
  quadrants: Quadrant[];
  source: string;
  onQuadrantClick: (slideIndex: number) => void;
}

export const SwotOverviewSlide: React.FC<SwotOverviewSlideProps> = ({ title, quadrants, source, onQuadrantClick }) => {
  return (
    <Slide source={source}>
      <div className="text-center w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-300 mb-8 animate-fade-in-down">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quadrants.map((quad, index) => (
            <div
              key={index}
              className={\`p-6 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-white/30 \${quad.color} animate-zoom-in\`}
              style={{ animationDelay: \`\${200 + index * 100}ms\` }}
              onClick={() => onQuadrantClick(quad.targetSlide)}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{quad.title}</h3>
              <ul className="space-y-2 text-left">
                {quad.points.map((point, pIndex) => (
                  <li key={pIndex} className="text-slate-300">
                    <span className="font-semibold text-white/50 mr-2">•</span>{point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};`
  },
  {
    path: 'components/slides/TitleSlide.tsx',
    content: `

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
};`
  },
];