import React from 'react';
import DeleteButton from './Delete';


const ToDoTable = ({ toDos, onDelete }) => {
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
            <td>{toDo.title}</td>
            <td>
              <DeleteButton onDelete={() => onDelete(toDo.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
