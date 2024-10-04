import { useState } from 'react';
import React from 'react';
import ToDoTable from './ToDoTable';
import SearchInput from './SearchInput';
import AddToDoComponent from './AddToDoComponent';
import useGetAllToDo from '../hooks/useGetAllToDo';
import Loading from './Loading';

const ToDoContainer = () => {
    const { isLoading, data: toDos, error, setData: setToDos } = useGetAllToDo();

    const [newToDo, setNewToDo] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    function handleNewTitleChange(event) {
        setNewToDo(event.target.value);
    }

    function handleAddClick() {
        if (newToDo.trim() !== "") {
            const newTask = { id: Date.now(), title: newToDo };
            setToDos([...toDos, newTask]);
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

    function handleUpdate(id, newTitle) {
        const updatedToDos = toDos.map((toDo) =>
            toDo.id === id ? { ...toDo, title: newTitle } : toDo
        );
        setToDos(updatedToDos);
    }

    if (error) {
        return <p>Помилка при завантаженні to-dos: {error.message}</p>;
    }

    return (
        <Loading loading={isLoading}>
            <AddToDoComponent
                title={newToDo}
                onTitleChange={handleNewTitleChange}
                onSubmit={handleAddClick}
            />
            <SearchInput
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
            />
            <ToDoTable
                toDos={filteredToDos}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
            />
        </Loading>
    );
}

export default ToDoContainer;
