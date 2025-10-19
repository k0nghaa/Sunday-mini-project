import React, { useState } from "react";

export const TodoForm = ({
  addTodo,
  initialValue = "",
  isEditing = false,
  onSubmit,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    if (isEditing) {
      onSubmit(value);
    } else {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder={isEditing ? "수정 중 ..." : "할일을 입력하세요"}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        {isEditing ? "수정 완료" : "+ 추가"}
      </button>
    </form>
  );
};
