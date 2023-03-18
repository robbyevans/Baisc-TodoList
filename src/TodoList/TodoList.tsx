import React, { useState } from 'react';
import css from './TodoList.module.scss';

function TodoList(): JSX.Element {
  const [todo, setTodo] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setTodo([...todo, newTodo]);
    setNewTodo('');
  }

  function handleDelete(index: number): void {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const input = e.target.value;
    if (typeof input === 'string') {
      setNewTodo(input);
    }
  }

  return (
    <div className={css.wrapper}>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit} className={css.formControl}>
        <input
          className={css.input}
          type="text"
          value={newTodo}
          placeholder="Enter task"
          // pattern="[A-Za-z]+"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <ul className={css.list}>
        {todo.map((item: string, index: number) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
