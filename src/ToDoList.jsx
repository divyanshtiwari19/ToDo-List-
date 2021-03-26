import React from 'react';

const ToDoList = (props) => {
    const deleteItems = () => {
        console.log("deleted");
    }

    return (
        <>
        <div className = 'todo_style'>
            <li> { props.text} </li>
        </div>
        </>
    );
}


export default ToDoList;