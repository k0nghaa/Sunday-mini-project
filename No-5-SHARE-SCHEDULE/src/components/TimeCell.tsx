import clsx from "clsx";

type TimeCellProps = {
  time: string;
  isSelected: boolean;
  onToggle: (time: string) => void;
};

export default function TimeCell({
  time,
  isSelected,
  onToggle,
}: TimeCellProps) {
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
