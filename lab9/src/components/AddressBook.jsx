import React, { useState } from 'react';
import Title from './Title';
import Form from './Form';
import Search from './Search';
import Table from './Table';
import './styles.css';

const AddressBook = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addBook = (book) => {
        setBooks([...books, book]);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleEdit = (updatedBook) => {
        setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    };

    const handleDelete = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <div className="container">
            <Title />
            <Form addBook={addBook} />
            <Search onSearch={handleSearch} />
            <Table books={books} searchTerm={searchTerm} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default AddressBook;
