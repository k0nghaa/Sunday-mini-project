import "./App.css";
import { useState } from "react";
import generateTimeSlots from "./utils/generateTimeSlots";
import TimeGrid from "./components/TimeGrid";
import UserList from "./components/UserList";

type UserTimes = Record<string, Set<string>>;

function App() {
  const timeSlots = generateTimeSlots(9, 20);

  const [users, setUsers] = useState<string[]>([]);
  const [userTimes, setUserTimes] = useState<UserTimes>({});
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const toggleTime = (time: string) => {
    if (!currentUser) return alert("참여자를 먼저 선택하세요!");

    setUserTimes((prev) => {
      const current = prev[currentUser] || new Set<string>();
      const updated = new Set(current);

      if (updated.has(time)) updated.delete(time);
      else updated.add(time);

      return { ...prev, [currentUser]: updated };
    });
  };

  const selectedSlots = currentUser
    ? userTimes[currentUser] ?? new Set<string>()
    : new Set<string>();

  return (
    <div className="app-container">
      <header className="header">
        <h1>🕒 WhenCanWe</h1>
        <UserList
          users={users}
          setUsers={setUsers}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </header>

      <main className="main">
        <section className="left">
          <TimeGrid
            slots={timeSlots}
            selectedSlots={selectedSlots}
            toggleTime={toggleTime}
          />
        </section>

        <aside className="right">
          <h3>참여자별 선택</h3>
          {Object.entries(userTimes).map(([name, times]) => (
            <div key={name} className="user-summary">
              <strong>{name}</strong>: {Array.from(times).join(", ")}
            </div>
          ))}
        </aside>
      </main>
    </div>
  );
}

export default App;
