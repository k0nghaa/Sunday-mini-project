# No5. Share Schedule App

## 약속 시간 정하기 툴

### 2025.10.12

![alt text](image.png)

---

## 🛠️ 업데이트 내역 — 2025.12.07

### 🔷 타입스크립트(TypeScript) 전환 완료

- 기존 `.jsx` → `.tsx` 마이그레이션
- 컴포넌트 Props 타입 명시 (e.g. `TimeCellProps`, `TimeGridProps`, `UserListProps`)
- `Record<string, Set<string>>` 형태로 사용자별 시간 선택 상태 타입 안정성 강화
- `Set` 사용으로 시간 슬롯 선택/해제 로직의 중복 및 상태 관리 안정성 향상
- `generateTimeSlots.ts` 유틸 함수 타입 정의 및 모듈 분리

> 💡 유지보수성 증가 / 런타임 에러 예방 / IDE 자동완성 향상

커밋 메시지:  
**feat: 프로젝트 전체 타입스크립트로 마이그레이션**

---

## 🚀 향후 업데이트 예정 기능

### 🟢 겹침 및 추천 시간 고도화

- 가장 많이 겹친 시간 자동 표시
- 참여자들의 **공통 가능 시간 한눈에 보기**
- **완전 가능한 시간대만 필터**

### 🌡 히트맵 시각화

- 겹친 인원 비례 색상 농도 표현
- 시각적으로 직관적인 시간 선택 보조

### 🖱 UX 강화 기능

- **시간 드래그 선택**
  - 클릭 없이 드래그만으로 연속 시간 선택
- **참여자 삭제 기능**
  - 잘못 추가된 유저 제거

### 💾 데이터 저장

- **LocalStorage 저장 & 불러오기**
  - 새로고침해도 데이터 유지

---

## 인사이트

### clsx 라이브러리 사용

## 개념공부

### new Set()

- Set은 중복을 허용하지 않는 배열 같은 자료구조
- 특징
  1. push() 대신 add()
  2. includes() 대신 has()
  3. 중복 제거에 강력

### .has() 프로퍼티

- Set이나 Map 객체 안에 특정 값이 있는지 확인할 때 사용하는 내장 메서드

`// 예시
const selcetedSlots = new Set(["10:00", "11:00"]);

console.log(selectedSlots.has("10:00")) // true
console.log(selectedSlots.has("12:00")) // false`

- 사용자가 클릭한 시간 슬롯을 Set에 저장하고 그 슬롯이 선택된 상태인지(has()) 확인해 CSS클래스를 다르게 주기 위해 사용

### padStart() 메서드

- String 객체 메서드
- 문자열의 시작부분에 지정된 길이만큼 다른 문자열을 추가해 새로운 문자열 반환
- `string.padStart(targetLength, padString)`

### rem 단위를 많이 쓰는 이유

- rem = HTML 루트 글꼴 크기 기준
- 사용자 디바이스 설정에 따라 자동 비율 조정이 가능하며, 픽셀(px) 보다 유연하고 유지보수에 강한 단위이기 때문

## 레퍼런스

when2meet https://www.when2meet.com/
