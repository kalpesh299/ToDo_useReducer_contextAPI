import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { useTodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoForm = ({title,setTitle,description,setDescription,isediting,setIsediting}) => {
  const { dispatch } = useTodoContext();
  
const navigator=useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Date.now(),
        title,
        description,
      },
    });
    setIsediting(false);
//    console.log(Date.now());
    navigator('/');
  };

  return (
    <div className='w-1/4 m-auto border-2 shadow-lg p-2'>
       {isediting?<h1 className='font-bold text-lg'>Edit Your Todo Here</h1>:<h1 className='font-bold text-lg'>Add Todo</h1>}
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className='flex flex-col'>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='border-2 border-gray-400 w-2/4 m-auto'
        />
        </div>
        <div className='flex flex-col'>
        <label>Description</label>
        <textarea
          value={description}
          onChange={e =>setDescription(e.target.value)}
          className='border-2 border-gray-400 outline-none'
        />
        </div>
       
        <button type="submit" className='bg-blue-500 mt-4 w-2/4 m-auto p-2 rounded'>{isediting ? "Edit Your item":"Add Todo"}</button>
      </form>

    

    </div>
  );
};

export default TodoForm;
