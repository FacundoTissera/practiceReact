import React from 'react'

export function TodoItem({todo, toggleTodo}) {
    const { id, taks, complete } = todo;
    const handleTodoClick = () =>{
        toggleTodo(id);
    };
    
    return <li><input type="checkbox" checked={complete} onChange={handleTodoClick}/>{taks}</li>

    
}
