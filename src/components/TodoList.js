import React from 'react';
import { Link } from 'react-router-dom';
import { useTodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = ({title,setTitle,description,setDescription,setIsediting}) => {
  const { todos } = useTodoContext();

  return (
    <div >
      <h1 className='text-red-600 font-bold text-4xl'>Todo List</h1>
      <Link to="/add" className='text-blue-600 font-bold text-3xl'>Clisk Here To Add Todo</Link>
      {todos.map(todo => (
        <TodoItem title={title} setTitle={setTitle} description={description}  setDescription={setDescription} key={todo.id} todo={todo} setIsediting={setIsediting} />
      ))}
    </div>
  );
};

export default TodoList;
