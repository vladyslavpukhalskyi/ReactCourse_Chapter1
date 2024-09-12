import React from "react";

const AddToDoComponent = ({title = "", onTitleChange, onSubmit}) => {
    return (
        <form>
            <input vlaue={title} onChange={onTitleChange} />
            <button onClick={onSubmit}>Add</button>
        </form>
    );
};

export default AddToDoComponent