# AptiON — NCS·공기업·인적성 문제집 전문 브랜드 홈페이지

Next.js(App Router) + TypeScript + Tailwind CSS로 제작된 AptiON 문제집 쇼핑몰형 홈페이지입니다.
현재는 자동결제 없이 상담 신청 / 전화 문의 중심으로 운영되며, 향후 장바구니·결제·회원가입·마이페이지를
추가할 수 있도록 데이터 기반 구조로 설계되어 있습니다.

## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 자주 수정하게 되는 값

| 항목 | 위치 |
| --- | --- |
| 전화번호 / 이메일 / 운영시간 / Formspree 엔드포인트 | `lib/config.ts` |
| 문제집(상품) 데이터 — 새 문제집 추가 시 이 배열에만 항목을 추가하면 목록/검색/필터/상세페이지가 자동 생성됨 | `data/products.ts` |
| 시험 카테고리 및 세부 영역 | `data/categories.ts` |
| FAQ 문항 | `data/faq.ts` |
| 고민별 추천 문구 | `data/concerns.ts` |

## 상담폼(Formspree) 연동

`lib/config.ts`의 `formspreeEndpoint` 값을 발급받은 Formspree 엔드포인트(`https://formspree.io/f/xxxxxxx`)로
교체하면 `/consult` 페이지의 상담폼이 바로 연동됩니다. 별도 API 서버를 사용하려면 같은 값을 해당
엔드포인트로 바꾸면 됩니다.

## 폴더 구조

```
app/                 라우트 (홈, 문제집 목록/상세, 상담, 브랜드 소개, FAQ, 약관 등)
components/          재사용 UI 컴포넌트
data/                상품/카테고리/FAQ 등 콘텐츠 데이터
lib/                 전역 설정(config.ts)과 타입 정의(types.ts)
```

## 빌드

```bash
npm run build
npm run start
```
