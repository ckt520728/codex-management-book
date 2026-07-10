export type Phase = 'phase0' | 'phase1' | 'phase2' | 'phase3' | 'report';

export type ClaimType = 'fact' | 'hypothesis' | 'idea' | 'inference' | 'insufficient evidence';

export interface Question {
  id: string;
  phase: Phase;
  section: string;
  text: string;
  purpose: string;
  claims?: string[];
  inputType: 'text' | 'textarea' | 'score' | 'select';
  options?: string[];
  placeholder?: string;
}

export interface Answer {
  questionId: string;
  value: string;
}

export interface ReviewState {
  phase: Phase;
  currentIndex: number;
  answers: Map<string, string>;
  started: boolean;
}
