// 시간대 목록을 자동으로 생성하는 함수

export default function generateTimeSlots(
  start: number = 9,
  end: number = 21
): string[] {
  const slots: string[] = [];
  for (let hour = start; hour <= end; hour++) {
    const hourLabel = String(hour).padStart(2, "0");
    slots.push(`${hourLabel}:00`);
    slots.push(`${hourLabel}:30`);
  }
  return slots;
}
