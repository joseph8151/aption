import { AreaKey } from "@/lib/types";

export interface SampleTable {
  headers: string[];
  rows: string[][];
}

export interface SpatialShape {
  cells: Array<[number, number]>;
}

export type SampleContent =
  | {
      kind: "mcq";
      passage?: string;
      table?: SampleTable;
      prompt: string;
      choices: string[];
      answerIndex: number;
      explanation: string;
    }
  | {
      kind: "spatial";
      prompt: string;
      base: SpatialShape;
      choices: SpatialShape[];
      answerIndex: number;
      explanation: string;
    }
  | {
      kind: "structure";
      title: string;
      table: SampleTable;
      note: string;
    };

// 문제집 상세페이지 "샘플 페이지" 영역에 노출되는 예시 문항입니다.
// 실제 문제집에 수록된 문항이 아닌, 유형을 소개하기 위한 자체 제작 예시입니다.
export const sampleQuestions: Partial<Record<AreaKey, SampleContent>> = {
  수리: {
    kind: "mcq",
    prompt:
      "은행 A는 원금 800만 원을 연이율 4%의 단리로 3년간 예치했다. 3년 후 받게 되는 총 금액은?",
    choices: ["824만 원", "872만 원", "896만 원", "912만 원", "936만 원"],
    answerIndex: 2,
    explanation:
      "단리 이자 = 원금 × 이율 × 기간 = 800 × 0.04 × 3 = 96만 원. 원금과 합하면 800 + 96 = 896만 원입니다.",
  },
  자료해석: {
    kind: "mcq",
    table: {
      headers: ["연도", "매출액(억 원)"],
      rows: [
        ["2021", "120"],
        ["2022", "150"],
        ["2023", "180"],
      ],
    },
    prompt: "위 표는 A기업의 연도별 매출액이다. 2022년 대비 2023년 매출 증가율은?",
    choices: ["10%", "15%", "20%", "25%", "30%"],
    answerIndex: 2,
    explanation: "(180 − 150) ÷ 150 × 100 = 20%입니다.",
  },
  의사소통: {
    kind: "mcq",
    passage:
      "최근 한 조사에 따르면, 신입사원 채용 시 기업이 가장 중요하게 평가하는 역량은 '문제해결능력'과 '의사소통능력'인 것으로 나타났다. 특히 문서를 통한 의사소통 능력은 실무 적응 속도와 밀접한 관련이 있는 것으로 조사되었다.",
    prompt: "위 글의 중심 내용으로 가장 적절한 것은?",
    choices: [
      "신입사원 채용 기준은 매년 달라진다.",
      "기업은 실무 경험이 많은 지원자를 선호한다.",
      "문제해결능력과 의사소통능력이 채용 평가에서 중요하게 다루어진다.",
      "문서 작성 능력은 승진과 직결된다.",
      "조사 대상 기업의 수는 제한적이었다.",
    ],
    answerIndex: 2,
    explanation:
      "글의 핵심은 기업이 신입사원 평가 시 문제해결능력과 의사소통능력을 중요하게 여긴다는 것입니다.",
  },
  문제해결: {
    kind: "mcq",
    passage:
      "A, B, C, D 네 사람이 한 줄로 서 있다. 다음 조건을 모두 만족한다.\n· A는 B보다 앞에 있다.\n· C는 맨 앞 또는 맨 뒤에 있다.\n· D는 B와 이웃해 있지 않다.",
    prompt: "다음 중 항상 참인 것은?",
    choices: [
      "A는 첫 번째에 서 있다.",
      "D는 항상 세 번째에 서 있다.",
      "B는 항상 세 번째에 서 있다.",
      "C는 두 번째 또는 세 번째에 서 있다.",
      "C는 맨 앞 또는 맨 뒤에 서 있다.",
    ],
    answerIndex: 4,
    explanation:
      "조건에서 C는 맨 앞 또는 맨 뒤에 위치한다고 명시되어 있으므로 이는 항상 참입니다. 나머지 선택지는 주어진 조건만으로 항상 확정할 수 없습니다.",
  },
  논리추리: {
    kind: "mcq",
    prompt:
      "다음과 같이 일정한 규칙으로 나열된 수열의 빈칸에 들어갈 수로 옳은 것은?\n2, 5, 11, 23, ( )",
    choices: ["35", "41", "47", "53", "59"],
    answerIndex: 2,
    explanation: "각 항은 '앞 항 × 2 + 1'의 규칙을 따릅니다. 23 × 2 + 1 = 47입니다.",
  },
  전공: {
    kind: "mcq",
    prompt: "다음 중 기업의 재무상태표(대차대조표)를 구성하는 항목이 아닌 것은?",
    choices: ["자산", "부채", "자본", "매출원가", "이익잉여금"],
    answerIndex: 3,
    explanation:
      "매출원가는 손익계산서 항목입니다. 자산·부채·자본·이익잉여금은 모두 재무상태표 항목입니다.",
  },
  공간지각: {
    kind: "spatial",
    prompt: "다음 도형을 시계 방향으로 90° 회전시켰을 때의 모양으로 옳은 것은?",
    base: {
      cells: [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
      ],
    },
    choices: [
      {
        cells: [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 0],
        ],
      },
      {
        cells: [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 2],
        ],
      },
      {
        cells: [
          [0, 2],
          [1, 2],
          [2, 2],
          [0, 1],
        ],
      },
      {
        cells: [
          [0, 0],
          [1, 0],
          [2, 0],
          [2, 1],
        ],
      },
    ],
    answerIndex: 0,
    explanation:
      "원래 도형의 각 칸 (r, c)를 시계 방향 90° 회전 규칙 (r, c) → (c, 2−r)에 대입하면 ①과 같은 모양이 됩니다. ④는 회전하지 않은 원래 도형입니다.",
  },
  상황판단: {
    kind: "mcq",
    prompt:
      "당신은 팀 프로젝트를 진행하던 중, 동료가 개인 사정으로 마감 기한을 지키지 못해 전체 일정에 차질이 생길 상황임을 알게 되었다. 가장 적절한 대응은?",
    choices: [
      "동료를 팀장에게 즉시 보고하고 책임을 묻는다.",
      "동료와 상황을 먼저 파악하고, 남은 일정 내에서 조정 가능한 대안을 함께 찾는다.",
      "동료의 몫까지 혼자 처리하고 아무에게도 알리지 않는다.",
      "프로젝트에서 손을 떼고 다른 업무에 집중한다.",
      "동료의 잘못이므로 특별한 조치를 취하지 않는다.",
    ],
    answerIndex: 1,
    explanation:
      "상황판단 문제는 팀워크와 문제해결을 함께 고려한 대응을 요구합니다. 동료와 상황을 파악하고 함께 대안을 모색하는 것이 가장 적절합니다.",
  },
  모의고사: {
    kind: "structure",
    title: "실전 모의고사 1교시 구성 예시",
    table: {
      headers: ["영역", "문항수", "제한시간"],
      rows: [
        ["의사소통능력", "20문항", "20분"],
        ["수리능력", "20문항", "25분"],
        ["문제해결능력", "20문항", "25분"],
        ["자료해석", "15문항", "20분"],
      ],
    },
    note: "실제 시험과 동일한 영역 구성·시간 배분으로 실전 감각을 훈련할 수 있습니다.",
  },
};

export function getSampleContent(area: AreaKey): SampleContent | undefined {
  return sampleQuestions[area];
}
