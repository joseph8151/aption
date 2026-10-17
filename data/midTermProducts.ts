export interface MidTermProduct {
  slug: string;
  title: string;
  promise: string;
  meta: string; // 구성 한 줄, 예: "4회 · 과목별 시간 맞춤 · PDF"
  price: number;
  badge?: string; // 예: "연중 상시" — 없으면 배지 미표시
}

export const militaryWrittenProducts: MidTermProduct[] = [
  {
    slug: "military-civilian-written-4",
    title: "군무원 필기 실전 4회",
    promise: "7·9급 공채 대비 실전 4회. 국어·한국사·행정학·행정법 빈출 유형 중심.",
    meta: "4회 · 과목별 시간 맞춤 · PDF",
    price: 43500,
    badge: "연중 상시",
  },
  {
    slug: "military-officer-written-3",
    title: "장교 필기 실전 3회",
    promise: "학사사관·군 가산복무 지원금 대비 실전 3회. 국어·영어·한국사 빈출.",
    meta: "3회 · 빈출 유형 정리 포함 · PDF",
    price: 43500,
    badge: "연중 상시",
  },
];

export const certWeaknessProducts: MidTermProduct[] = [
  {
    slug: "sqld-weakness-drill-200",
    title: "SQLD 약점 드릴 200제",
    promise: "데이터모델링·SQL 기본·SQL 활용 중 자주 틀리는 유형만 모은 드릴.",
    meta: "200제 · 오답 유형 정리 · PDF",
    price: 58000,
  },
  {
    slug: "information-processing-practical-drill",
    title: "정보처리기사 실기 약점 드릴",
    promise: "프로그래밍·데이터베이스·네트워크 실기 빈출 오류 유형 집중.",
    meta: "실기 회차 3회 + 약점 정리 · PDF",
    price: 58000,
  },
  {
    slug: "industrial-safety-law-drill",
    title: "산업안전기사 법규 약점 드릴",
    promise: "산업안전보건법·중대재해처벌법 조문 빈출 포인트만 정리.",
    meta: "법규 200제 · 조문 해설 · PDF",
    price: 58000,
  },
];

export interface MidTermProductGroup {
  label: string;
  products: MidTermProduct[];
}

export const interviewDocsGroups: MidTermProductGroup[] = [
  {
    label: "공공기관",
    products: [
      {
        slug: "nonghyup-shinhyup-interview-questions",
        title: "농축협·신협 면접 예상질문",
        promise: "필기 이후 바로 보는 질문과 답변 구조",
        meta: "PDF",
        price: 39800,
      },
      {
        slug: "ncs-experience-statement-guide",
        title: "NCS 경험기술서 작성 가이드",
        promise: "공공기관 서류에서 자주 막히는 부분을 정리",
        meta: "PDF",
        price: 29800,
      },
      {
        slug: "calculation-data-interpretation-weakness-drill",
        title: "계산·자료해석 약점 드릴",
        promise: "전체 모의고사 말고 이 두 유형만 반복",
        meta: "PDF",
        price: 29800,
      },
      {
        slug: "public-agency-situational-interview-questions",
        title: "공공기관 면접 상황형 질문",
        promise: "상황·경험 면접 질문 30개 + 답변 구조",
        meta: "28~32p · 30문항 · PDF",
        price: 39800,
      },
      {
        slug: "ncs-resource-interpersonal-weakness-drill",
        title: "NCS 자원관리·대인관계 약점 드릴",
        promise: "해당 영역만 120문항 + 짧은 해설",
        meta: "40~45p · 120문항 · PDF",
        price: 29800,
      },
      {
        slug: "public-agency-motivation-statement",
        title: "공공기관 지원동기 작성",
        promise: "작성 구조 + 좋은/나쁜 예시",
        meta: "18~22p · PDF",
        price: 19900,
      },
      {
        slug: "excel-function-weakness-drill",
        title: "Excel·함수 약점 드릴",
        promise: "자주 틀리는 함수·피벗만 80문항",
        meta: "32~36p · 80문항 · PDF",
        price: 29800,
      },
      {
        slug: "public-agency-recent-issues-summary",
        title: "공공기관 최근 이슈 정리",
        promise: "기관별 최근 이슈 짧게 요약 (면접용)",
        meta: "16~20p · PDF",
        price: 19900,
      },
      {
        slug: "ncs-problem-solving-weakness-drill",
        title: "NCS 문제해결 약점 드릴",
        promise: "문제해결 영역만 100문항 + 짧은 해설",
        meta: "36~40p · 100문항 · PDF",
        price: 29800,
      },
      {
        slug: "public-agency-experience-statement-bad-examples",
        title: "공공기관 경험기술서 나쁜 예시 모음",
        promise: "자주 떨어지는 패턴만 정리",
        meta: "18~22p · PDF",
        price: 19900,
      },
    ],
  },
  {
    label: "금융권",
    products: [
      {
        slug: "finance-interview-questions",
        title: "금융권 면접 예상질문",
        promise: "예상질문 35개 + 답변 구조",
        meta: "28~32p · 35문항 · PDF",
        price: 39800,
      },
      {
        slug: "finance-cover-letter-structure",
        title: "금융권 자기소개서 구조",
        promise: "작성 구조 + 예시",
        meta: "22~26p · PDF",
        price: 29800,
      },
      {
        slug: "banking-credit-loan-basics-summary",
        title: "은행권 신용·여신 기초 요약",
        promise: "신용분석·여신 핵심만 정리",
        meta: "24~28p · PDF",
        price: 29800,
      },
      {
        slug: "banking-interview-unexpected-questions",
        title: "은행권 면접 돌발질문",
        promise: "압박·돌발 질문 25개 + 대응 포인트",
        meta: "22~26p · 25문항 · PDF",
        price: 29800,
      },
    ],
  },
  {
    label: "IT·개발",
    products: [
      {
        slug: "it-portfolio-guide",
        title: "포트폴리오 구성 가이드",
        promise: "구성 예시 포함",
        meta: "20~24p · PDF",
        price: 29800,
      },
      {
        slug: "it-technical-interview-questions",
        title: "기술 면접 예상질문",
        promise: "CS 기초 + 프로젝트 질문 40개",
        meta: "32~36p · 40문항 · PDF",
        price: 39800,
      },
      {
        slug: "sql-weakness-drill",
        title: "SQL 약점 드릴",
        promise: "유형별 100문항",
        meta: "40~45p · 100문항 · PDF",
        price: 29800,
      },
      {
        slug: "developer-resume-career-statement-structure",
        title: "개발자 이력서·경력기술서 구조",
        promise: "넣을 것·빼야 할 것 + 예시 2개",
        meta: "22~26p · PDF",
        price: 29800,
      },
      {
        slug: "developer-project-explanation-structure",
        title: "개발자 프로젝트 설명 구조",
        promise: "프로젝트 어떻게 설명하는지 구조 + 예시",
        meta: "16~20p · PDF",
        price: 19900,
      },
    ],
  },
  {
    label: "군",
    products: [
      {
        slug: "military-officer-interview-advanced",
        title: "장교·군무원 면접 심화",
        promise: "예상질문 45개 + 답변 구조",
        meta: "36~40p · 45문항 · PDF",
        price: 49800,
      },
      {
        slug: "military-fitness-test-prep",
        title: "체력 검정 준비",
        promise: "종목별 기준 + 체크리스트",
        meta: "16~20p · PDF",
        price: 19900,
      },
      {
        slug: "military-motivation-cover-letter",
        title: "군 지원동기·자기소개서",
        promise: "작성 구조 + 예시",
        meta: "22~26p · PDF",
        price: 29800,
      },
      {
        slug: "military-interview-unexpected-questions",
        title: "군 면접 돌발질문 대응",
        promise: "돌발·압박 질문 25개 + 대응 포인트",
        meta: "24~28p · 25문항 · PDF",
        price: 29800,
      },
    ],
  },
];
