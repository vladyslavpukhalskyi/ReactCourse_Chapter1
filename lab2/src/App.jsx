import { useState } from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable';
import SearchInput from './components/SearchInput';

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function handleNewTitleChange(event) {
    setNewToDo(event.target.value);
  }

  function handleAddClick() {
    if (newToDo.trim() !== "") {
      setToDos([...toDos, { id: Math.random(), title: newToDo }]);
      setNewToDo("");
    }
  }

  function handleSearchClick() {
    setSearchQuery(newToDo);
  }


  function handleDelete(id) {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchInput
        title={newToDo}
        onTitleChange={handleNewTitleChange}
        onAddClick={handleAddClick}
        onSearchClick={handleSearchClick}
      />
      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
    </>
  );
}

export default App;
