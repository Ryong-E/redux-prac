import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, selectTodos } from '../features/todos/todoSlice';

function Home() {
  const [text, setText] = useState('');
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addTodo(text));
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.content}</h1>
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
                console.log(todo.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Home;
