import { ProductSample } from "@/components/samplepreview/sampleTypes";

// 상품별 샘플 미리보기 데이터.
// 모든 문항은 상품 구성에 맞춰 새로 제작한 예시 문항이며, 실제 교재 수록 문항이 아닙니다.
// publicationStatus가 "게시완료"인 상품만 카드/상세페이지에 "샘플 보기" 버튼이 노출됩니다.
const EXAMPLE_NOTE = "상품 구성에 맞춰 제작한 예시 문항입니다. 실제 교재 수록 문항이 아닙니다.";

export const productSamples: ProductSample[] = [
  {
    productSlug: "ncs-arithmetic-300",
    sampleTitle: "NCS 수리능력 기초연산 210제",
    category: "NCS · 수리",
    difficulty: "초급 → 중급",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        prompt: "3/5 + 1/4 을 계산한 값으로 옳은 것은?",
        choices: ["13/20", "15/20", "17/20", "19/20", "7/9"],
        answerIndex: 2,
        explanation: "통분하면 3/5=12/20, 1/4=5/20이므로 12/20+5/20=17/20입니다.",
      },
      {
        number: 2,
        prompt:
          "원가 8,000원인 물건에 25% 이익을 붙여 정가를 정한 후, 정가에서 20% 할인하여 판매했다. 판매 가격은?",
        choices: ["7,200원", "7,600원", "8,000원", "8,400원", "9,000원"],
        answerIndex: 2,
        explanation: "정가=8,000×1.25=10,000원. 판매가=10,000×(1−0.2)=8,000원입니다.",
      },
      {
        number: 3,
        prompt: "A반 20명의 평균 점수는 72점, B반 30명의 평균 점수는 82점이다. 두 반을 합친 전체 50명의 평균 점수는?",
        choices: ["76점", "77점", "78점", "79점", "80점"],
        answerIndex: 2,
        explanation:
          "전체 합계 점수=20×72+30×82=1,440+2,460=3,900점. 전체 평균=3,900÷50=78점입니다. 단순히 (72+82)÷2=77점으로 계산하면 인원수 차이가 반영되지 않아 오답이 됩니다.",
        figure: {
          type: "table",
          headers: ["구분", "인원", "평균", "합계"],
          rows: [
            ["A반", "20명", "72점", "1,440점"],
            ["B반", "30명", "82점", "2,460점"],
            ["전체", "50명", "78점", "3,900점"],
          ],
        },
        solutionFigure: {
          type: "table",
          headers: ["구분", "인원", "평균", "합계"],
          rows: [
            ["A반", "20명", "72점", "1,440점"],
            ["B반", "30명", "82점", "2,460점"],
            ["전체", "50명", "78점", "3,900점"],
          ],
          caption: "가중평균=전체 합계÷전체 인원",
        },
      },
      {
        number: 4,
        prompt: "하루 평균 350건의 민원을 처리하는 부서에서 직원 1인당 하루 14건을 처리한다고 할 때, 필요한 최소 직원 수는?",
        choices: ["20명", "22명", "23명", "25명", "28명"],
        answerIndex: 3,
        explanation: "350÷14=25명이 필요합니다.",
      },
    ],
  },
  {
    productSlug: "ncs-data-interpretation-300",
    sampleTitle: "NCS 자료해석 210제",
    category: "NCS · 자료해석",
    difficulty: "기본 → 실전",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        prompt: "위 자료는 B공공기관의 연도별 민원 접수 건수이다. 2022년 대비 2023년 온라인 민원 증가율은?",
        figure: {
          type: "bar",
          unit: "건",
          maxValue: 140,
          categories: ["2022", "2023", "2024"],
          series: [
            { label: "온라인 민원", color: "#122240", values: [80, 100, 130] },
            { label: "방문 민원", color: "#7A2331", values: [120, 90, 60] },
          ],
        },
        choices: ["15%", "20%", "25%", "30%", "35%"],
        answerIndex: 2,
        explanation: "(100−80)÷80×100=25%입니다.",
      },
      {
        number: 2,
        prompt: "위 그래프는 B공공기관의 연도별 민원 만족도 점수(100점 만점)이다. 2022년과 2024년의 점수 차이는?",
        figure: {
          type: "line",
          unit: "점",
          maxValue: 90,
          minValue: 60,
          categories: ["2022", "2023", "2024"],
          series: [{ label: "만족도 점수", color: "#122240", values: [72, 78, 84] }],
        },
        choices: ["8점", "10점", "12점", "14점", "16점"],
        answerIndex: 2,
        explanation: "84−72=12점입니다.",
      },
      {
        number: 3,
        prompt: "같은 자료를 기준으로, 2022년 대비 2024년 방문 민원 감소율은?",
        figure: {
          type: "bar",
          unit: "건",
          maxValue: 140,
          categories: ["2022", "2023", "2024"],
          series: [
            { label: "온라인 민원", color: "#122240", values: [80, 100, 130] },
            { label: "방문 민원", color: "#7A2331", values: [120, 90, 60] },
          ],
        },
        choices: ["30%", "40%", "50%", "60%", "70%"],
        answerIndex: 2,
        explanation:
          "감소율=(120−60)÷120×100=50%입니다. 온라인 민원은 80건→130건으로 62.5% 증가한 반면, 방문 민원은 절반으로 줄어 민원 접수 방식이 온라인 중심으로 빠르게 전환되고 있음을 알 수 있습니다.",
      },
      {
        number: 4,
        prompt: "위 표에서 2023년과 2024년의 전체 민원 건수(온라인+방문)를 비교한 것으로 옳은 것은?",
        figure: {
          type: "table",
          headers: ["구분", "2022", "2023", "2024"],
          rows: [
            ["온라인(건)", "80", "100", "130"],
            ["방문(건)", "120", "90", "60"],
            ["합계(건)", "200", "190", "190"],
          ],
        },
        choices: ["2023년이 더 많다", "2024년이 더 많다", "두 해가 같다", "2022년이 가장 적다", "알 수 없다"],
        answerIndex: 2,
        explanation:
          "2023년 합계=100+90=190건, 2024년 합계=130+60=190건으로 서로 같습니다. 2022년 합계는 80+120=200건으로 오히려 가장 많습니다.",
      },
    ],
  },
  {
    productSlug: "ncs-data-interpretation-advanced-200",
    sampleTitle: "NCS 고난도 자료해석 140제",
    category: "NCS · 자료해석(고난도)",
    difficulty: "실전 → 고난도",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        prompt: "위 표는 두 지역본부의 예산 배정액과 집행액이다. 예산 집행률이 더 높은 지역과 그 값으로 옳은 것은?",
        figure: {
          type: "table",
          headers: ["구분", "배정 예산(억 원)", "집행액(억 원)"],
          rows: [
            ["동부", "240", "180"],
            ["서부", "200", "170"],
          ],
        },
        choices: ["동부, 70%", "동부, 75%", "서부, 80%", "서부, 85%", "서부, 90%"],
        answerIndex: 3,
        explanation: "동부 집행률=180÷240×100=75%, 서부 집행률=170÷200×100=85%로 서부가 더 높습니다.",
      },
      {
        number: 2,
        prompt: "같은 자료에서 두 지역의 미집행 예산(배정 예산−집행액)의 합은?",
        figure: {
          type: "table",
          headers: ["구분", "배정 예산(억 원)", "집행액(억 원)"],
          rows: [
            ["동부", "240", "180"],
            ["서부", "200", "170"],
          ],
        },
        choices: ["70억 원", "80억 원", "90억 원", "100억 원", "110억 원"],
        answerIndex: 2,
        explanation: "동부 미집행=240−180=60억 원, 서부 미집행=200−170=30억 원. 합계=60+30=90억 원입니다.",
      },
      {
        number: 3,
        prompt: "담당 인력 1인당 예산 집행액이 더 큰 지역과 그 값으로 옳은 것은?",
        figure: {
          type: "table",
          headers: ["구분", "배정 예산(억 원)", "집행액(억 원)", "담당 인력(명)"],
          rows: [
            ["동부", "240", "180", "12"],
            ["서부", "200", "170", "17"],
          ],
        },
        choices: ["동부, 10억 원", "동부, 15억 원", "서부, 10억 원", "서부, 15억 원", "서부, 17억 원"],
        answerIndex: 1,
        explanation:
          "동부 1인당 집행액=180÷12=15억 원, 서부 1인당 집행액=170÷17=10억 원입니다. 집행률은 서부가 높지만 인력 1인당 집행액은 동부가 더 큽니다. 두 자료(예산, 인력)를 함께 연계해서 봐야 정확한 비교가 가능한 고난도 문항입니다.",
        solutionFigure: {
          type: "table",
          headers: ["구분", "집행률", "1인당 집행액"],
          rows: [
            ["동부", "75%", "15억 원"],
            ["서부", "85%", "10억 원"],
          ],
        },
      },
    ],
  },
  {
    productSlug: "ncs-problem-solving-300",
    sampleTitle: "NCS 문제해결능력 210제",
    category: "NCS · 문제해결",
    difficulty: "기본 → 실전",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        passage:
          "4개 팀(기획, 인사, 재무, 총무)이 회의실 A~D 중 서로 다른 곳을 하나씩 사용한다.\n· 재무팀은 D를 사용한다.\n· 총무팀은 기획팀과 같은 줄(A, B)을 사용하지 않는다.\n· 기획팀은 B를 사용하지 않는다.",
        prompt: "위 조건을 모두 만족할 때, 각 팀이 사용하는 회의실로 옳은 것은?",
        choices: [
          "기획-A, 인사-B, 재무-C, 총무-D",
          "기획-A, 인사-B, 재무-D, 총무-C",
          "기획-B, 인사-A, 재무-D, 총무-C",
          "기획-A, 인사-C, 재무-D, 총무-B",
          "기획-B, 인사-C, 재무-D, 총무-A",
        ],
        answerIndex: 1,
        explanation:
          "재무팀은 D로 고정됩니다. 총무팀은 A·B를 쓸 수 없으므로 남은 C를 사용합니다. 기획팀은 B를 사용하지 않는다는 조건에 따라 A를 사용하고, 남은 인사팀이 B를 사용합니다.",
      },
      {
        number: 2,
        prompt: "위 회의실 A~D의 요일별 예약 현황에서, 수요일에 비어 있는(예약되지 않은) 회의실을 모두 고른 것은?",
        figure: {
          type: "table",
          headers: ["회의실", "월", "화", "수", "목"],
          rows: [
            ["A", "○", "-", "○", "-"],
            ["B", "-", "○", "-", "○"],
            ["C", "○", "○", "-", "-"],
            ["D", "-", "-", "○", "○"],
          ],
          caption: "○ = 예약됨, - = 비어 있음",
        },
        choices: ["A, B", "A, C", "B, C", "B, D", "C, D"],
        answerIndex: 2,
        explanation: "수요일 열을 보면 A와 D는 예약(○) 표시가 있어 사용 중이고, B와 C는 표시가 없어 비어 있습니다.",
      },
      {
        number: 3,
        prompt: "위 표는 3개 팀의 요일별 작업 가능 시간(시간)이다. 작업 가능 시간이 가장 적은 요일·팀 조합으로 옳은 것은?",
        figure: {
          type: "table",
          headers: ["팀", "월", "화", "수", "목", "금"],
          rows: [
            ["제품팀", "8", "8", "4", "8", "8"],
            ["마케팅팀", "6", "6", "6", "6", "6"],
            ["개발팀", "8", "5", "8", "8", "5"],
          ],
        },
        choices: ["화요일 - 개발팀", "수요일 - 제품팀", "금요일 - 개발팀", "화요일 - 마케팅팀", "수요일 - 마케팅팀"],
        answerIndex: 1,
        explanation:
          "표의 모든 값 중 가장 작은 값은 제품팀의 수요일 4시간입니다. 개발팀은 화·금요일에 5시간으로 그다음으로 작지만 4시간보다는 큽니다.",
        solutionFigure: {
          type: "table",
          headers: ["팀", "월", "화", "수", "목", "금"],
          rows: [
            ["제품팀", "8", "8", "4", "8", "8"],
            ["마케팅팀", "6", "6", "6", "6", "6"],
            ["개발팀", "8", "5", "8", "8", "5"],
          ],
          caption: "최솟값: 제품팀 수요일 4시간",
        },
      },
    ],
  },
  {
    productSlug: "ncs-communication-300",
    sampleTitle: "NCS 의사소통능력 210제",
    category: "NCS · 의사소통",
    difficulty: "기본 → 실전",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        passage:
          "보낸사람: 기획팀 김도윤 주임\n받는사람: 전 부서\n제목: 3분기 예산 집행 현황 제출 안내\n\n안녕하십니까. 3분기 예산 집행 현황 보고서를 10월 24일(금)까지 기획팀으로 제출해 주시기 바랍니다. 제출 양식은 사내 게시판 공지사항에서 내려받으실 수 있으며, 기한 내 미제출 시 익월 예산 편성에 반영되지 않을 수 있습니다. 문의사항은 기획팀(내선 1234)으로 연락 주시기 바랍니다.",
        prompt: "위 이메일의 내용과 일치하지 않는 것은?",
        choices: [
          "제출 기한은 10월 24일이다.",
          "제출 양식은 사내 게시판에서 받을 수 있다.",
          "기한을 넘기면 익월 예산 편성에 불이익이 있을 수 있다.",
          "문의는 전화로 할 수 있다.",
          "보고서는 부서장 전결로 제출이 면제될 수 있다.",
        ],
        answerIndex: 4,
        explanation: "이메일에 부서장 전결로 제출이 면제된다는 내용은 없습니다. 나머지는 모두 본문에 명시된 내용과 일치합니다.",
      },
      {
        number: 2,
        passage:
          "수신: 각 부서장\n제목: 사무실 전기 점검에 따른 임시 단전 안내\n\n1. 관련: 시설관리팀-2024-118\n2. 오는 10월 25일(토) 09:00~12:00 본관 전체 전기 점검이 예정되어 있어 해당 시간 동안 임시 단전이 실시됩니다.\n3. 단전 시간 중에는 사내 서버 및 출입 시스템 이용이 제한되오니 사전에 필요한 자료를 백업해 주시기 바랍니다.\n4. 붙임: 점검 일정표 1부. 끝.",
        prompt: "위 공문에 따라 담당자가 취해야 할 조치로 가장 적절한 것은?",
        choices: [
          "10월 25일 오전 업무를 평소보다 일찍 시작한다.",
          "단전 전에 필요한 자료를 미리 백업해 둔다.",
          "출입 시스템 점검을 직접 수행한다.",
          "점검 일정표를 시설관리팀에 제출한다.",
          "단전 시간을 연장해 달라고 요청한다.",
        ],
        answerIndex: 1,
        explanation:
          "공문 3항에서 단전 시간 중 서버·출입 시스템 이용이 제한되므로 사전에 자료를 백업하라고 안내하고 있습니다. 나머지는 공문 내용과 무관하거나 반대되는 조치입니다.",
      },
      {
        number: 3,
        prompt:
          "다음 문장을 논리적 순서에 맞게 배열한 것은?\n(가) 따라서 기업은 신입사원 교육에 실무 시뮬레이션을 적극 도입하고 있다.\n(나) 최근 채용 시장에서는 실무 적응력이 빠른 인재에 대한 수요가 커지고 있다.\n(다) 이는 단순 지식 전달 방식보다 실제 업무 상황을 경험하게 하는 교육이 더 효과적이기 때문이다.\n(라) 그러나 이론 중심의 신입 교육만으로는 이러한 수요를 충족하기 어렵다는 지적이 많다.",
        choices: ["나-라-다-가", "나-다-라-가", "라-나-다-가", "나-라-가-다", "다-나-라-가"],
        answerIndex: 0,
        explanation:
          "(나)에서 실무 적응력 수요 증가라는 배경을 제시하고, (라)에서 이론 중심 교육의 한계를 지적한 뒤, (다)에서 그 이유(경험 중심 교육의 효과)를 설명하고, (가)에서 결론으로 기업의 대응(실무 시뮬레이션 도입)을 제시하는 흐름이 자연스럽습니다.",
      },
    ],
  },
  {
    productSlug: "ncs-final-mock-test-10",
    sampleTitle: "NCS 실전 모의고사 7회",
    category: "NCS · 실전 모의고사",
    difficulty: "실전 → 고난도",
    page1Count: 2,
    representativeIndex: 3,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        prompt: "위 표는 실전 모의고사 1회차 구성이다(총 350문항 · 7회 · 회차당 50문항). 1회차 전체 제한시간은?",
        figure: {
          type: "table",
          headers: ["영역", "문항수", "제한시간"],
          rows: [
            ["의사소통능력", "15문항", "15분"],
            ["수리능력", "15문항", "20분"],
            ["문제해결능력", "10문항", "15분"],
            ["자료해석", "10문항", "15분"],
          ],
        },
        choices: ["55분", "60분", "65분", "70분", "75분"],
        answerIndex: 2,
        explanation: "15+20+15+15=65분입니다.",
      },
      {
        number: 2,
        prompt: "위 그래프는 1~3회차 모의고사 응시 인원이다. 3회차에서 기관A 응시 인원이 기관B보다 몇 명 더 많은가?",
        figure: {
          type: "bar",
          unit: "명",
          maxValue: 450,
          categories: ["1회차", "2회차", "3회차"],
          series: [
            { label: "기관A", color: "#122240", values: [320, 350, 410] },
            { label: "기관B", color: "#7A2331", values: [280, 300, 295] },
          ],
        },
        choices: ["95명", "105명", "115명", "125명", "135명"],
        answerIndex: 2,
        explanation: "410−295=115명입니다.",
      },
      {
        number: 3,
        prompt: "채점 기준에서 정답 1문항당 1.25점이 부여되고 오답 감점이 없다고 할 때, 1회차 50문항 중 40문항을 맞혔다면 총점은?",
        choices: ["40점", "45점", "50점", "55점", "60점"],
        answerIndex: 2,
        explanation: "40×1.25=50점입니다.",
      },
      {
        number: 4,
        prompt: "위 성적 분석표에서 평균보다 낮은 점수를 받은 영역은?",
        figure: {
          type: "table",
          headers: ["영역", "내 점수", "평균", "만점"],
          rows: [
            ["의사소통", "17", "15", "20"],
            ["수리", "16", "14", "20"],
            ["문제해결", "13", "15", "20"],
            ["자료해석", "11", "10", "15"],
          ],
        },
        choices: ["의사소통", "수리", "문제해결", "자료해석", "없음"],
        answerIndex: 2,
        explanation: "문제해결 영역만 내 점수(13점)가 평균(15점)보다 낮습니다. 나머지 영역은 모두 평균 이상입니다.",
        solutionFigure: {
          type: "table",
          headers: ["영역", "내 점수", "평균", "만점"],
          rows: [
            ["의사소통", "17", "15", "20"],
            ["수리", "16", "14", "20"],
            ["문제해결", "13", "15", "20"],
            ["자료해석", "11", "10", "15"],
          ],
          caption: "평균 미달 영역: 문제해결",
        },
      },
    ],
  },
  {
    productSlug: "corporate-spatial-perception",
    sampleTitle: "공간지각 유형 집중훈련",
    category: "대기업 인적성 · 공간지각",
    difficulty: "기본 → 실전",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        prompt: "다음 전개도를 접어 정육면체를 만들었을 때, 3이 적힌 면과 마주보는(평행한) 면에 적힌 숫자는?",
        figure: { type: "cubenet", labels: ["1", "2", "3", "4", "5", "6"] },
        choices: ["1", "2", "4", "5", "6"],
        answerIndex: 3,
        explanation:
          "가로로 나열된 2-3-4-5는 옆면 4개를 이루며, 이 중 마주보는 면은 두 칸 떨어진 2↔4, 3↔5입니다. 따라서 3과 마주보는 면은 5입니다.",
      },
      {
        number: 2,
        prompt:
          "민주는 회사 정문을 등지고 서서 정면을 북쪽으로 바라보고 있다. 오른쪽으로 90도 돈 다음, 다시 왼쪽으로 180도 돌았다면 현재 바라보는 방향은?",
        choices: ["북쪽", "남쪽", "동쪽", "서쪽", "알 수 없다"],
        answerIndex: 3,
        explanation:
          "북쪽에서 오른쪽(시계 방향)으로 90도 돌면 동쪽을 향합니다. 이어서 왼쪽(반시계 방향)으로 180도 돌면 정반대인 서쪽을 향하게 됩니다.",
      },
      {
        number: 3,
        prompt: "다음 전개도를 접어 정육면체를 만들었을 때, ◆와 마주보는 면에 그려진 도형은?",
        figure: { type: "cubenet", labels: ["□", "●", "◆", "★", "▲", "■"] },
        choices: ["□", "●", "★", "▲", "■"],
        answerIndex: 3,
        explanation:
          "가로로 나열된 ●-◆-★-▲ 네 면은 옆면 띠를 이루며, 이 중 두 칸 떨어진 면끼리 마주봅니다: ●↔★, ◆↔▲. 위쪽 □과 아래쪽 ■은 각각 윗면·밑면이 되어 서로 마주봅니다. 따라서 ◆와 마주보는 면은 ▲입니다.",
        solutionFigure: { type: "cubenet", highlightPairs: true, labels: ["□", "●", "◆", "★", "▲", "■"] },
      },
    ],
  },
  {
    productSlug: "corporate-gsat-quant",
    sampleTitle: "GSAT 유형 수리논리 집중훈련",
    category: "대기업 인적성 · 수리논리",
    difficulty: "기본 → 실전",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        prompt: "다음과 같이 일정한 규칙으로 나열된 수열의 빈칸에 들어갈 수로 옳은 것은?\n3, 7, 15, 31, ( )",
        choices: ["47", "55", "59", "63", "67"],
        answerIndex: 3,
        explanation: "각 항은 '앞 항×2+1'의 규칙입니다. 31×2+1=63입니다.",
      },
      {
        number: 2,
        prompt: "농도 8%인 소금물 300g에 소금물을 추가로 넣어 농도 12%인 소금물 400g을 만들려고 한다. 추가로 넣은 소금물의 농도는?",
        choices: ["18%", "20%", "22%", "24%", "26%"],
        answerIndex: 3,
        explanation:
          "기존 소금량=300×0.08=24g, 최종 소금량=400×0.12=48g. 추가된 소금물 100g에 포함된 소금량=48−24=24g. 따라서 농도=24÷100×100=24%입니다.",
      },
      {
        number: 3,
        passage:
          "같은 부서 직원 5명(A~E)의 이번 분기 실적 순위에 대해 다음 정보가 있다.\n· B는 5명 중 가장 낮은 순위다.\n· D는 2위이다.\n· A는 E보다 순위가 높고, E는 C보다 순위가 높다.",
        prompt: "위 조건을 모두 만족할 때, 3위는 누구인가?",
        choices: ["A", "B", "C", "D", "E"],
        answerIndex: 4,
        explanation:
          "D=2위, B=5위로 고정됩니다. 남은 A, C, E는 1·3·4위를 나눠 가지며, 'A가 E보다 높고 E가 C보다 높다'는 조건에 따라 A=1위, E=3위, C=4위가 됩니다. 따라서 3위는 E입니다.",
        solutionFigure: {
          type: "table",
          headers: ["순위", "1", "2", "3", "4", "5"],
          rows: [["직원", "A", "D", "E", "C", "B"]],
        },
      },
    ],
  },
  {
    productSlug: "busan-public-agency-2026-10",
    sampleTitle: "부산 공공기관 NCS 실전 6회",
    category: "공공기관 필기 · NCS 실전",
    difficulty: "실전",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        prompt:
          "위 그래프는 2025년 부산 지역 공공기관 신규 채용 인원 현황이다(가상 자료). A기관과 C기관의 채용 인원 합은 B기관의 몇 배인가? (소수 둘째 자리에서 반올림)",
        figure: {
          type: "bar",
          unit: "명",
          maxValue: 60,
          categories: ["A기관", "B기관", "C기관"],
          series: [{ label: "채용 인원", color: "#122240", values: [45, 38, 52] }],
        },
        choices: ["2.15배", "2.35배", "2.55배", "2.75배", "2.95배"],
        answerIndex: 2,
        explanation: "A+C=45+52=97명. 97÷38≈2.55배입니다.",
      },
      {
        number: 2,
        prompt:
          "부산 공공기관 A는 민원 접수 창구를 오전·오후 2교대로 운영하며, 직원 한 명이 하루 최대 1교대만 근무할 수 있고 하루 최소 6명이 필요하다. 오전 조에 4명이 배정된 경우 오후 조에 필요한 최소 인원은?",
        choices: ["1명", "2명", "3명", "4명", "5명"],
        answerIndex: 1,
        explanation: "하루 최소 6명 중 오전 조에 4명이 배정되었으므로 오후 조는 최소 6−4=2명이 필요합니다.",
      },
      {
        number: 3,
        prompt: "위 표에서 처리율이 가장 낮은 항목과 그 미처리 건수를 바르게 짝지은 것은?",
        figure: {
          type: "table",
          headers: ["구분", "접수 건수", "처리 건수", "처리율"],
          rows: [
            ["민원", "320", "288", "90%"],
            ["제안", "150", "135", "90%"],
            ["기타", "80", "68", "85%"],
          ],
        },
        choices: ["민원, 32건", "제안, 15건", "기타, 10건", "기타, 12건", "기타, 15건"],
        answerIndex: 3,
        explanation:
          "세 항목의 처리율은 민원 90%, 제안 90%, 기타 85%로 기타가 가장 낮습니다. 기타의 미처리 건수=80−68=12건입니다.",
      },
    ],
  },
  {
    productSlug: "shinhyup-frequent-type-300",
    sampleTitle: "신협 빈출 유형 300제",
    category: "금융권 필기 · 직무상식",
    difficulty: "실전",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        prompt: "다음 중 신용협동조합(신협)의 법적 성격으로 옳은 것은?",
        choices: [
          "주식회사 형태의 영리법인이다.",
          "조합원의 상호부조를 목적으로 하는 비영리법인이다.",
          "정부가 전액 출자한 공기업이다.",
          "예금자 보호 대상에서 전액 제외된다.",
          "중앙은행의 직속 기관이다.",
        ],
        answerIndex: 1,
        explanation:
          "신협은 조합원 간 상호부조와 지역사회 발전을 목적으로 하는 비영리법인(협동조합)입니다. 일정 한도 내에서 예금자보호제도의 적용도 받습니다.",
      },
      {
        number: 2,
        prompt: "신협에 예치한 정기예탁금 500만 원을 연 이율 3.5% 단리로 1년간 예치했을 때 받는 세전 이자는?",
        choices: ["15만 원", "16만 원", "16.5만 원", "17.5만 원", "18만 원"],
        answerIndex: 3,
        explanation: "500만 원×3.5%×1년=17.5만 원입니다.",
      },
      {
        number: 3,
        prompt:
          "위 자료(가상)는 K신협 지점의 상품별 가입자 수이다. 자유적립예탁금 가입자 수는 공제상품 가입자 수보다 몇 % 더 많은가? (소수 첫째 자리에서 반올림)",
        figure: {
          type: "bar",
          unit: "명",
          maxValue: 1600,
          categories: ["정기예탁금", "자유적립예탁금", "공제상품"],
          series: [{ label: "가입자 수", color: "#122240", values: [1200, 1450, 900] }],
        },
        choices: ["51%", "56%", "61%", "66%", "71%"],
        answerIndex: 2,
        explanation: "(1,450−900)÷900×100≈61%입니다.",
      },
    ],
  },
  {
    productSlug: "sqld-weakness-drill-200",
    sampleTitle: "SQLD 약점 드릴 200제",
    category: "자격증 · SQLD",
    difficulty: "실전",
    page1Count: 2,
    representativeIndex: 3,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-18",
    questions: [
      {
        number: 1,
        prompt:
          "다음 SQL문에서 각 절의 논리적 실행 순서를 바르게 나열한 것은?\n\nSELECT DEPT, COUNT(*) AS CNT\nFROM EMPLOYEE\nWHERE SALARY >= 4000\nGROUP BY DEPT\nHAVING COUNT(*) >= 2;",
        figure: {
          type: "code",
          code: "SELECT DEPT, COUNT(*) AS CNT\nFROM EMPLOYEE\nWHERE SALARY >= 4000\nGROUP BY DEPT\nHAVING COUNT(*) >= 2;",
        },
        choices: [
          "FROM-WHERE-GROUP BY-HAVING-SELECT",
          "FROM-SELECT-WHERE-GROUP BY-HAVING",
          "FROM-GROUP BY-WHERE-HAVING-SELECT",
          "FROM-WHERE-HAVING-GROUP BY-SELECT",
          "FROM-HAVING-WHERE-GROUP BY-SELECT",
        ],
        answerIndex: 0,
        explanation:
          "SQL의 논리적 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT입니다. WHERE는 그룹화 이전에 행을 걸러내고, HAVING은 그룹화된 결과에 조건을 적용합니다.",
      },
      {
        number: 2,
        prompt:
          "다음 EMPLOYEE 테이블에 아래 SQL문을 실행했을 때 반환되는 행의 수는?\n\nSELECT DEPT, COUNT(*) AS CNT\nFROM EMPLOYEE\nWHERE SALARY >= 4000\nGROUP BY DEPT;",
        figure: {
          type: "table",
          headers: ["이름", "DEPT", "SALARY"],
          rows: [
            ["김민준", "개발팀", "4200"],
            ["이서연", "개발팀", "3800"],
            ["박지훈", "영업팀", "4500"],
            ["최수아", "영업팀", "4100"],
            ["정하윤", "인사팀", "3900"],
          ],
        },
        choices: ["1", "2", "3", "4", "5"],
        answerIndex: 1,
        explanation:
          "SALARY>=4000 조건을 만족하는 행은 김민준(개발팀), 박지훈(영업팀), 최수아(영업팀)입니다. DEPT로 그룹화하면 개발팀 1그룹, 영업팀 1그룹으로 총 2행이 반환됩니다.",
      },
      {
        number: 3,
        prompt:
          "같은 테이블·SQL문 기준으로, GROUP BY 결과에서 완전히 제외되는 DEPT는 모두 몇 개인가? (EMPLOYEE에는 개발팀·영업팀·인사팀 3개 부서가 있다)",
        figure: {
          type: "table",
          headers: ["이름", "DEPT", "SALARY"],
          rows: [
            ["김민준", "개발팀", "4200"],
            ["이서연", "개발팀", "3800"],
            ["박지훈", "영업팀", "4500"],
            ["최수아", "영업팀", "4100"],
            ["정하윤", "인사팀", "3900"],
          ],
        },
        choices: ["0개", "1개", "2개", "3개", "4개"],
        answerIndex: 1,
        explanation:
          "WHERE 조건(SALARY>=4000)을 만족하는 행 중 인사팀 소속 직원은 없습니다. 따라서 GROUP BY 결과에는 인사팀 자체가 나타나지 않으며, 제외되는 DEPT는 인사팀 1개입니다.",
      },
      {
        number: 4,
        prompt:
          "다음 SQL문을 실행한 결과로 옳은 것은?\n\nSELECT DEPT, COUNT(*) AS CNT, AVG(SALARY) AS AVG_SAL\nFROM EMPLOYEE\nWHERE SALARY >= 4000\nGROUP BY DEPT\nHAVING COUNT(*) >= 2;",
        figure: {
          type: "table",
          headers: ["이름", "DEPT", "SALARY"],
          rows: [
            ["김민준", "개발팀", "4200"],
            ["이서연", "개발팀", "3800"],
            ["박지훈", "영업팀", "4500"],
            ["최수아", "영업팀", "4100"],
            ["정하윤", "인사팀", "3900"],
          ],
        },
        choices: [
          "개발팀, 1, 4200.0",
          "영업팀, 2, 4300.0",
          "영업팀, 2, 4100.0",
          "개발팀, 2, 4000.0",
          "인사팀, 1, 3900.0",
        ],
        answerIndex: 1,
        explanation:
          "WHERE로 SALARY≥4000인 행만 남기면 개발팀 1건(4200), 영업팀 2건(4500, 4100)이 남습니다. HAVING COUNT(*)>=2 조건을 만족하는 그룹은 영업팀(2건)뿐입니다. 영업팀의 평균 급여=(4500+4100)÷2=4300.0입니다.",
        solutionFigure: {
          type: "table",
          headers: ["DEPT", "CNT", "AVG_SAL"],
          rows: [["영업팀", "2", "4300.0"]],
          caption: "HAVING 조건(COUNT≥2)을 만족하는 유일한 그룹",
        },
      },
    ],
  },
  {
    productSlug: "ncs-time-reduction-training",
    sampleTitle: "NCS 시간단축 계산훈련",
    category: "NCS · 수리",
    difficulty: "기본 → 실전",
    page1Count: 2,
    representativeIndex: 2,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-30",
    questions: [
      {
        number: 1,
        prompt: "47×52를 어림산으로 빠르게 계산할 때, 가장 가까운 값은?",
        choices: ["2,200", "2,350", "2,440", "2,550", "2,700"],
        answerIndex: 2,
        explanation: "47×52=(50−3)×52=2,600−156=2,444이므로 2,440에 가장 가깝습니다.",
      },
      {
        number: 2,
        prompt: "320의 35%는 얼마인가? (암산으로 빠르게)",
        choices: ["96", "104", "112", "120", "128"],
        answerIndex: 2,
        explanation: "320의 10%는 32이므로, 35%=32×3.5=112입니다.",
      },
      {
        number: 3,
        prompt: "다음 표에서 1~4월 실적의 전체 합계는?",
        choices: ["454", "474", "494", "514", "534"],
        answerIndex: 2,
        explanation:
          "128+97+156+113=494입니다. 어림산으로는 130+100+160+110=500에 가장 가까운 선택지를 고르면 됩니다.",
        figure: {
          type: "table",
          headers: ["1월", "2월", "3월", "4월"],
          rows: [["128", "97", "156", "113"]],
        },
        solutionFigure: {
          type: "table",
          headers: ["1월", "2월", "3월", "4월", "합계"],
          rows: [["128", "97", "156", "113", "494"]],
          caption: "128+97+156+113=494",
        },
      },
      {
        number: 4,
        prompt: "시속 84km로 달리는 열차가 7분 동안 이동한 거리는?",
        choices: ["8.4km", "9.1km", "9.8km", "10.5km", "11.2km"],
        answerIndex: 2,
        explanation: "시속 84km는 분속 1.4km이므로, 7분간 1.4×7=9.8km를 이동합니다.",
      },
    ],
  },
  {
    productSlug: "ncs-problem-solving-advanced-200",
    sampleTitle: "NCS 고난도 문제해결능력 140제",
    category: "NCS · 문제해결",
    difficulty: "고난도",
    page1Count: 2,
    representativeIndex: 0,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-30",
    questions: [
      {
        number: 1,
        prompt:
          "A, B, C, D, E 다섯 명이 월요일부터 금요일까지 하루에 한 명씩 당직을 선다. 다음 조건을 모두 만족할 때, 수요일에 당직을 서는 사람은?\n① B는 월요일에 당직을 선다.\n② A는 B보다 이틀 늦게 당직을 선다.\n③ C는 월요일 또는 금요일에 당직을 선다.\n④ D는 E보다 이틀 빠르다.",
        choices: ["A", "B", "C", "D", "E"],
        answerIndex: 0,
        explanation:
          "①에 의해 B=월요일. ②에 의해 A=B+2일=수요일. ③에서 월요일은 B가 차지했으므로 C=금요일. 남은 화요일·목요일에 D·E가 배정되는데 ④(D가 E보다 이틀 빠름)에 의해 D=화요일, E=목요일. 따라서 수요일은 A입니다.",
      },
      {
        number: 2,
        prompt:
          "다음 명제가 모두 참일 때, 반드시 참인 것은?\n- 모든 기획팀 직원은 보고서 작성 교육을 이수했다.\n- 보고서 작성 교육을 이수한 사람 중 일부는 발표 교육도 이수했다.\n- 민수는 기획팀 직원이다.",
        choices: [
          "민수는 발표 교육을 이수했다.",
          "민수는 보고서 작성 교육을 이수했다.",
          "민수는 발표 교육을 이수하지 않았다.",
          "보고서 작성 교육을 이수한 사람은 모두 기획팀이다.",
          "기획팀이 아니면 보고서 작성 교육을 이수하지 않았다.",
        ],
        answerIndex: 1,
        explanation:
          "모든 기획팀 직원은 보고서 작성 교육을 이수했고 민수는 기획팀 직원이므로, 민수도 보고서 작성 교육을 이수했습니다. 나머지는 '일부' 전제만으로는 확정할 수 없거나(①·③), 명제의 역·이를 참으로 착각한 오류입니다(④·⑤).",
      },
      {
        number: 3,
        prompt:
          "한 사람이 보고서 3건을 작성해야 한다. 1건당 40분이 걸리고, 보고서 사이에는 반드시 10분의 휴식이 필요하다. 오전 9시에 시작한다면 3건을 모두 마치는 시각은?",
        choices: ["11:00", "11:10", "11:20", "11:30", "11:40"],
        answerIndex: 2,
        explanation:
          "작성 시간은 40×3=120분, 휴식은 보고서 사이 2번만 필요하므로 10×2=20분. 총 140분(2시간 20분) 후인 11시 20분에 끝납니다.",
      },
      {
        number: 4,
        prompt:
          "예산 500만 원으로 A부품(단가 35만 원)과 B부품(단가 20만 원)을 구매하려 한다. A부품을 최소 5개 구매해야 하고, 남은 예산 내에서 B부품을 최대한 구매하려 할 때, 구매 가능한 B부품의 최대 개수는?",
        choices: ["14개", "15개", "16개", "17개", "18개"],
        answerIndex: 2,
        explanation:
          "A부품 5개=175만 원 소요, 남은 예산=500−175=325만 원. 325÷20=16.25이므로 최대 16개까지 구매 가능합니다.",
      },
    ],
  },
  {
    productSlug: "ncs-document-reading-200",
    sampleTitle: "NCS 문서이해·공문서 독해",
    category: "NCS · 의사소통",
    difficulty: "기본 → 실전",
    page1Count: 2,
    representativeIndex: 0,
    exampleNote: EXAMPLE_NOTE,
    verificationStatus: "검증완료",
    publicationStatus: "게시완료",
    updatedAt: "2026-10-30",
    questions: [
      {
        number: 1,
        passage:
          "수신: 전 부서장\n제목: 2026년 하반기 정기 안전점검 실시 안내\n1. 관련: 안전관리지침 제12조\n2. 2026년 하반기 정기 안전점검을 아래와 같이 실시하오니 업무에 참고하시기 바랍니다.\n  가. 점검 기간: 2026. 11. 3.(화) ~ 11. 7.(금)\n  나. 점검 대상: 전 부서 사무실 및 공용공간\n  다. 제출 서류: 부서별 안전점검표(붙임 양식) 11. 10.(월)까지 총무팀 제출\n3. 점검 기간 중 부서장 부재 시에는 담당자를 사전에 지정하여 주시기 바랍니다. 끝.",
        prompt: "위 공문의 내용과 일치하지 않는 것은?",
        choices: [
          "안전점검은 11월 3일부터 11월 7일까지 진행된다.",
          "점검 대상은 전 부서 사무실과 공용공간이다.",
          "안전점검표는 11월 10일까지 총무팀에 제출해야 한다.",
          "부서장이 부재할 경우 점검이 자동으로 연기된다.",
          "부서장 부재 시에는 담당자를 미리 지정해야 한다.",
        ],
        answerIndex: 3,
        explanation:
          "공문에는 부서장 부재 시 '담당자를 사전에 지정'하라고 안내할 뿐, 점검이 자동으로 연기된다는 내용은 없습니다. 나머지 선택지는 공문 내용과 일치합니다.",
      },
      {
        number: 2,
        passage:
          "제목: [요청] 10월 정산 자료 회신 요청\n김민준 대리님,\n안녕하세요. 10월분 법인카드 사용 내역 정산을 위해 첨부된 양식에 사용 내역을 기재하여 10월 28일(수) 오후 5시까지 회신 부탁드립니다. 기한 내 회신이 어려운 경우 사전에 말씀해 주시면 일정 조율하겠습니다. 감사합니다.",
        prompt: "이 메일을 받은 사람이 가장 먼저 해야 할 일은?",
        choices: [
          "법인카드를 신규 발급 신청한다.",
          "10월 사용 내역을 양식에 작성해 회신한다.",
          "정산 담당자를 변경 요청한다.",
          "다음 달 예산안을 작성한다.",
          "기한을 무조건 연장 요청한다.",
        ],
        answerIndex: 1,
        explanation:
          "메일의 핵심 요청은 '첨부 양식에 10월 사용 내역을 기재해 기한 내 회신'하는 것입니다. 기한이 어려울 때만 사전에 말하라는 것이지, 무조건 연장을 요청하라는 뜻은 아닙니다(⑤).",
      },
      {
        number: 3,
        passage:
          "[2026년 하반기 워크숍 준비 회의록]\n일시: 2026.10.15.(목) 14:00\n참석: 박서준 팀장, 이하은 주임, 최도윤 주임\n논의사항:\n1. 워크숍 일정은 11월 20일(금)로 확정\n2. 장소 섭외는 이하은 주임이 10월 22일까지 완료\n3. 예산안 작성은 최도윤 주임이 10월 25일까지 팀장에게 보고\n4. 최종 참석 인원 취합은 박서준 팀장이 직접 진행",
        prompt: "장소 섭외 완료 기한까지 담당자가 해야 할 업무는?",
        choices: [
          "워크숍 예산안을 작성한다.",
          "참석 인원을 취합한다.",
          "워크숍 장소를 섭외한다.",
          "워크숍 일정을 재조정한다.",
          "팀장에게 예산 보고를 한다.",
        ],
        answerIndex: 2,
        explanation:
          "회의록 2번 항목에 따라 장소 섭외는 이하은 주임이 10월 22일까지 완료해야 하는 업무입니다. 예산안 작성(①·⑤)과 인원 취합(②)은 각각 다른 담당자의 업무입니다.",
      },
      {
        number: 4,
        passage:
          "[사무실 비품 신청 안내]\n1. 비품 신청은 매주 월요일 오전 10시까지 전산시스템을 통해 접수합니다.\n2. 10만 원 이하 품목은 팀장 승인만으로 구매 가능하며, 10만 원 초과 품목은 부서장 승인이 추가로 필요합니다.\n3. 접수된 신청 건은 해당 주 금요일까지 일괄 구매 처리됩니다.",
        prompt: "8만 원짜리 모니터 구매를 신청하려는 직원이 받아야 하는 승인은?",
        choices: [
          "승인 없이 바로 구매 가능하다.",
          "팀장 승인만 받으면 된다.",
          "부서장 승인만 받으면 된다.",
          "팀장 승인과 부서장 승인을 모두 받아야 한다.",
          "전산팀의 별도 승인이 필요하다.",
        ],
        answerIndex: 1,
        explanation: "10만 원 이하 품목은 팀장 승인만으로 구매할 수 있습니다. 8만 원은 이 기준에 해당하므로 팀장 승인만 받으면 됩니다.",
      },
    ],
  },
];

export const getSampleByProductSlug = (slug: string) =>
  productSamples.find((s) => s.productSlug === slug && s.publicationStatus === "게시완료");
