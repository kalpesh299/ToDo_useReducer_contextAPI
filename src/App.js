import './App.css';
import { TodoProvider } from './components/TodoContext';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isediting,setIsediting]=useState(false);
  return (
    <div className="App">
   <TodoProvider>
    <BrowserRouter>
      <Routes>
        
         <Route path='/' element={<TodoList title={title} setTitle={setTitle} description={description}  setDescription={setDescription} setIsediting={setIsediting}/>}/>
         <Route path='/add'    element={<TodoForm title={title} setTitle={setTitle} description={description}  setDescription={setDescription} isediting={isediting} setIsediting={setIsediting}/>}/>
        
      </Routes>
      </BrowserRouter>
   </TodoProvider>
    </div>
  );
}

export default App;
