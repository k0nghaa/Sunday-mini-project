import React from "react";

export const TodoForm = () => {
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="할일을 입력하세요"
      />
      <button type="submit" className="todo-btn">
        + 추가
      </button>
    </form>
  );
};
