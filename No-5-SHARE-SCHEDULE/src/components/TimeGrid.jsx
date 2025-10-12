import TimeCell from "./TimeCell";

export default function TimeGrid({ slots, selectedSlots, toggleTime }) {
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
