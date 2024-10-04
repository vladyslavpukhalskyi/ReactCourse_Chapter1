import React, { useState } from 'react';
import DeleteButton from './Delete';
import EditButton from './EditButton';

const ToDoTable = ({ toDos, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleEditClick = (toDo) => {
    setEditId(toDo.id);
    setEditValue(toDo.title);
  };

  const handleSaveClick = (id) => {
    if (editValue.trim() !== "") {
      onUpdate(id, editValue);
    }
    setEditId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id.toString()}>
            <td>{toDo.id.toString()}</td>
            <td>
              {editId === toDo.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                toDo.title
              )}
            </td>
            <td>
              {editId === toDo.id ? (
                <button onClick={() => handleSaveClick(toDo.id)}>
                  Save
                </button>
              ) : (
                <EditButton toDo={toDo} onUpdate={onUpdate} />
              )}
              <DeleteButton onDelete={() => onDelete(toDo.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
