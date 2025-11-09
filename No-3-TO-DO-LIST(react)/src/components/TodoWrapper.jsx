import React from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { useTodos } from "../hooks/useTodos";

export const TodoWrapper = () => {
  const { todos, addTodo, toggleComplete, deleteTodo, editTodo, updateTodo } =
    useTodos();

  return (
    <div className="TodoWrapper">
      <h1>~ TODO LIST ~</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={toggleComplete}
          onDelete={deleteTodo}
          onEdit={editTodo}
          onUpdate={updateTodo}
        />
      ))}
    </div>
  );
};
