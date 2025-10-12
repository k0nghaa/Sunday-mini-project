import "./App.css";
import { useState } from "react";
import generateTimeSlots from "./utils/generateTimeSlots";
import TimeGrid from "./components/TimeGrid";

function App() {
  const slots = generateTimeSlots(9, 20);
  const [selectedSlots, setSelectedSlots] = useState(new Set());

  const toggleTime = (time) => {
    setSelectedSlots((prev) => {
      const next = new Set(prev);
      if (next.has(time)) next.delete(time);
      else next.add(time);
      return next;
    });
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>🕒 WhenCanWe</h1>
      </header>

      <main className="main">
        <section className="left">
          <TimeGrid
            slots={slots}
            selectedSlots={selectedSlots}
            toggleTime={toggleTime}
          />
        </section>

        <aside className="right">
          <div className="panel">
            <h3>선택된 시간</h3>
            <ul>
              {[...selectedSlots].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
