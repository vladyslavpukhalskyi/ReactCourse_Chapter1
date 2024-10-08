import React from 'react';
import TableRow from './TableRow';

const Table = ({ books, searchTerm, onEdit, onDelete }) => {
    const filteredBooks = books.filter(book =>
        book.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.phone.includes(searchTerm)
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredBooks.length === 0 ? (
                    <tr>
                        <td colSpan="5">No data to display</td>
                    </tr>
                ) : (
                    filteredBooks.map(book => (
                        <TableRow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
                    ))
                )}
            </tbody>
        </table>
    );
};

export default Table;
