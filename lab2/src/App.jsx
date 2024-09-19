import { useState } from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable';
import SearchInput from './components/SearchInput';
import AddToDoComponent from './components/AddToDoComponent';
import PageTitle from './components/PageTitle';

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [nextId, setNextId] = useState(1);

  function handleNewTitleChange(event) {
    setNewToDo(event.target.value);
  }

  function handleAddClick() {
    if (newToDo.trim() !== "") {
      const newTask = { id: nextId, title: newToDo };
      setToDos([...toDos, newTask]);
      setNextId(nextId + 1);
      setNewToDo("");
    }
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleDelete(id) {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  }

  return (
    <>
      <PageTitle title='To Do App'/>
      <AddToDoComponent
        title={newToDo}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleAddClick}
      />
      <SearchInput
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchClick={() => {}}
      />
      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
    </>
  );
}

export default App;
