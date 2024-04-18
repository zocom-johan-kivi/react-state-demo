import { useState } from "react";

export const LocalStateDemo = () => {
  const [todos, setTodos] = useState(["bananer", "päron"]);
  const [todo, setTodo] = useState("");

  return (
    <section>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, todo]);
          setTodo("");
        }}
      >
        Add Todo
      </button>
    </section>
  );
};
