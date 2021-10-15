import React, { useRef, useState } from "react";
import { TodoList } from "./components/TodoList";

export function App(){
    const [todos, setTodos] = useState([
            {id: 1, taks: 'tarea 1', complete: false}
        ]);
        const todoTaskRef= useRef()
        
        const handlenTodoAdd = () =>{
            const task = todoTaskRef.current.value;
                if (task === '') return;
                    setTodos()
        }
        
    return(
        <React.Fragment>
        
        <TodoList todos={todos} />
        <input ref={todoTaskRef} type="text" placeholder='Nueva tarea' />
        <button onClick={handlenTodoAdd}>agregar</button>
        <button>eliminar</button>

        </React.Fragment>
    )
};