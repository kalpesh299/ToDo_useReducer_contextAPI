import React, { createContext, useReducer, useContext } from 'react';

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'UPDATE_TODO':
      // Implement update logic
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    case 'DELETE_TODO':
      // Implement delete logic
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

export { TodoProvider, useTodoContext };
