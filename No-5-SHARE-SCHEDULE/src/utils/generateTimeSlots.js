// 시간대 목록을 자동으로 생성하는 함수

export default function generateTimeSlots(start = 9, end = 21) {
  const slots = [];
  for (let hour = start; hour <= end; hour++) {
    const hourLabel = String(hour).padStart(2, "0");
    slots.push(`${hourLabel}:00`);
    slots.push(`${hourLabel}:30`);
  }
  return slots;
}
