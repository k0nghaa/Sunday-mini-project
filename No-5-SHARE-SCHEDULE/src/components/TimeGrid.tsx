import TimeCell from "./TimeCell";

type TimeGridProps = {
  slots: string[];
  selectedSlots: Set<string>;
  toggleTime: (time: string) => void;
};

export default function TimeGrid({
  slots,
  selectedSlots,
  toggleTime,
}: TimeGridProps) {
  return (
    <div>
      <h2 className="title">시간표</h2>
      <div className="grid">
        {slots.map((time) => (
          <TimeCell
            key={time}
            time={time}
            isSelected={selectedSlots.has(time)}
            onToggle={toggleTime}
          />
        ))}
      </div>
    </div>
  );
}
