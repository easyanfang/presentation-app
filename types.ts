
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
  | { type: 'competitor_messaging', source: string, content: CompetitorMessagingSlideContent };