import { useState } from "react";
import clsx from "clsx";

type UserListProps = {
  users: string[];
  setUsers: React.Dispatch<React.SetStateAction<string[]>>;
  currentUser: string | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function UserList({
  users,
  setUsers,
  currentUser,
  setCurrentUser,
}: UserListProps) {
  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (!newUser.trim()) return;
    setUsers([...users, newUser.trim()]);
    setNewUser("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
