import { useState } from "react";
import clsx from "clsx";

export default function UserList({
  users,
  setUsers,
  currentUser,
  setCurrentUser,
}) {
  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (!newUser.trim()) return;
    setUsers([...users, newUser.trim()]);
    setNewUser("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addUser();
    }
  };

  return (
    <div className="user-list">
      <h2>참여자</h2>
      <div className="add-user">
        <input
          type="text"
          placeholder="이름"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addUser}>추가</button>
      </div>
      {users.map((user) => (
        <button
          key={user}
          className={clsx(
            "user-item",
            user === currentUser && "user-item--active"
          )}
          onClick={() => setCurrentUser(user)}
        >
          {user}
        </button>
      ))}
    </div>
  );
}
