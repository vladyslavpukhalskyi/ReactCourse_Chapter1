import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoTable from './components/ToDoTable'
import AddToDoComponent from './components/AddToDoComponent'

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState(null);

    function handleNewTitleChange(event) {
      setNewToDo({id: new Date(), title: event.target.value})
    }
    function handleSubmit(){
      event.preventDefault();
      setToDos([...toDos, newToDo])
    }
  return (
    <>
    <AddToDoComponent
    title={newToDo?.title }
    onTitleChange={handleNewTitleChange}
    onSubmit={handleSubmit}
    />
    <ToDoTable toDos={toDos}/>

    </>
  );
}

export default App
