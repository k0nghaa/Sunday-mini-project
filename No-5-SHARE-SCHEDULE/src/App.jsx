import "./App.css";
import { useState } from "react";
import generateTimeSlots from "./utils/generateTimeSlots";
import TimeGrid from "./components/TimeGrid";
import UserList from "./components/UserList";

function App() {
  const timeSlots = generateTimeSlots(9, 20);
  const [users, setUsers] = useState([]);
  const [userTimes, setUserTimes] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  const toggleTime = (time) => {
    if (!currentUser) return alert("참여자를 먼저 선택하세요!");

    setUserTimes((prev) => {
      const current = prev[currentUser] || new Set();

      const updated = new Set(current);
      if (updated.has(time)) updated.delete(time);
      else updated.add(time);

      return { ...prev, [currentUser]: updated };
    });
  };

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
            selectedSlots={userTimes[currentUser] || new Set()}
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
