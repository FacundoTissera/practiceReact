import React from 'react'

export function TodoItem({todo}) {
    const {id,task, complete } = todo;
    return (
        <li>
            {task}
        </li>
    )
}
