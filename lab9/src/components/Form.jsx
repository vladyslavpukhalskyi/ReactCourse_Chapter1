import React, { useState } from 'react';

const Form = ({ addBook }) => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '' });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'The first name is required';
        if (!formData.lastName) newErrors.lastName = 'The last name is required';
        if (!formData.phone) newErrors.phone = 'The phone is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const newBook = { ...formData, id: Date.now() };
        addBook(newBook);
        setFormData({ firstName: '', lastName: '', phone: '' });
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
            <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
            <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;
