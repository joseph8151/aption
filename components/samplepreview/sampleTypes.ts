export type SampleFigure =
  | {
      type: "bar";
      categories: string[];
      series: Array<{ label: string; color: string; values: number[] }>;
      unit: string;
      maxValue: number;
    }
  | {
      type: "line";
      categories: string[];
      series: Array<{ label: string; color: string; values: number[] }>;
      unit: string;
      maxValue: number;
      minValue?: number;
    }
  | { type: "cubenet"; highlightPairs?: boolean; labels?: string[] }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { type: "code"; code: string; language?: string };

export interface SampleQuestion {
  number: number;
  passage?: string;
  figure?: SampleFigure;
  prompt: string;
  choices: [string, string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
  solutionFigure?: SampleFigure;
}

export interface ProductSample {
  productSlug: string;
  sampleTitle: string;
  category: string;
  difficulty: string;
  questions: SampleQuestion[]; // 3~6문항
  page1Count: number; // 1페이지에 노출할 문항 수
  representativeIndex: number; // 2페이지에서 정답·해설을 전체 공개하는 대표 문항의 인덱스
  exampleNote: string;
  verificationStatus: "검증완료" | "검증대기";
  publicationStatus: "게시완료" | "비공개";
  updatedAt: string;
}
