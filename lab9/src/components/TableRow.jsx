import React, { useState } from 'react';

const TableRow = ({ book, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedBook, setEditedBook] = useState(book);
    const [errors, setErrors] = useState({});

    const handleEdit = () => {
        if (isEditing) {
            const validationErrors = {};

            if (!editedBook.firstName) {
                validationErrors.firstName = 'The field is required';
            }
            if (!editedBook.lastName) {
                validationErrors.lastName = 'The field is required';
            }
            if (!editedBook.phone) {
                validationErrors.phone = 'The field is required';
            }

            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }

            onEdit(editedBook);
        } else {
            setEditedBook(book);
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBook({ ...editedBook, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleDelete = () => {
        onDelete(book.id);
    };

    return (
        <tr>
            <td>{book.id}</td>
            {isEditing ? (
                <>
                    <td>
                        <input
                            type="text"
                            name="firstName"
                            value={editedBook.firstName}
                            onChange={handleChange}
                            style={{ borderColor: errors.firstName ? 'red' : 'black' }}
                        />
                        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                    </td>
                    <td>
                        <input
                            type="text"
                            name="lastName"
                            value={editedBook.lastName}
                            onChange={handleChange}
                            style={{ borderColor: errors.lastName ? 'red' : 'black' }}
                        />
                        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
                    </td>
                    <td>
                        <input
                            type="text"
                            name="phone"
                            value={editedBook.phone}
                            onChange={handleChange}
                            style={{ borderColor: errors.phone ? 'red' : 'black' }}
                        />
                        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                    </td>
                </>
            ) : (
                <>
                    <td>{book.firstName}</td>
                    <td>{book.lastName}</td>
                    <td>{book.phone}</td>
                </>
            )}
            <td>
                <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
                <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;
