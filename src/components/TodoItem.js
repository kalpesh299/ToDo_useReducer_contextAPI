import React from 'react';
import { useTodoContext } from './TodoContext';
import { useNavigate } from 'react-router-dom';

const TodoItem = ({ todo,title,setTitle,description,setDescription,setIsediting }) => {

  const { todos,dispatch} = useTodoContext();
 const navigate=useNavigate();
  const handleDelete = () => {
    // console.log(todo.id)
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  const editHandle=(id)=>{
  
      
  console.log(todos);

  const todoTobedit=todos.find((el)=>el.id==id);
    // console.log(todo.id);
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
    setTitle(todoTobedit.title)
    setDescription(todoTobedit.description)
    
    // console.log(todoTobedit);
   setIsediting(true)
    navigate("/add");
  }

  

  return (
    <div className=''>
      <h3 className='bg-gray-200 w-1/4 m-auto'>Title: {todo.title}</h3>
      <p className='bg-gray-200 w-1/4 m-auto'>Description: {todo.description}</p>
      <button onClick={handleDelete} className='bg-red-600 p-2 m-2 rounded'>Delete</button>
      {/* <button onClick={editHandle} todoId={todo.id}>Edit</button> */}
      <button onClick={()=>editHandle(todo.id)} className='bg-green-600 p-2 m-2 rounded'>Edit</button>
    </div>
  );
};

export default TodoItem;
