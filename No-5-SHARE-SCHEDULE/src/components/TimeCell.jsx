import clsx from "clsx";

export default function TimeCell({ time, isSelected, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(time)}
      className={clsx("cell", isSelected && "cell--selected")}
    >
      <div className="cell-time">{time}</div>
    </button>
  );
}
