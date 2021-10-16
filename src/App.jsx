import React, {Fragment, useRef, useState, useEffect } from "react";
//el fragment destructura para el return, si no lo coloco, en el import tengo que ponerlo en el return pra enviar la vista
import {v4 as uuidv4} from 'uuid';
import { TodoList } from "./components/TodoList";

const KEY = "todosApp.todos";

export function App(){
    const [todos, setTodos] = useState([
            {id: 1, taks:"Tarea 1", complete: false}
        ]);
        const todoTaskRef= useRef();

        useEffect(()=>{
            const storedTodos =JSON.parse(localStorage.getItem(KEY));
            if (storedTodos) {
                setTodos(storedTodos)
            }
        },[]);

        useEffect(() => {
            localStorage.setItem(KEY, JSON.stringify(todos));
        }, [todos])

        const toggleTodo= (id) =>{
            const newTodos= [...todos];

            const todo = newTodos.find((todo)=> todo.id === id);

            todo.complete = !todo.complete;

            setTodos(newTodos);
        };
        
        const handlenTodoAdd = () =>{
            const taks = todoTaskRef.current.value;
                if (taks === '') return;
            
        setTodos((prevTodos) => {
                return [...prevTodos, {id: uuidv4(), taks, complete: false}]
            })
            
        todoTaskRef.current.value = null;         
        }; 
        const handleClearAll= ()=>{
            const newTodos=  todos.filter((todo)=>!todo.complete);
            setTodos(newTodos)
        }
    return(
        <Fragment>
        <h1>TAREAS A REALIZAR</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <input class="nuevaTarea" ref={todoTaskRef} type="text" placeholder='Nueva tarea' /><br />
        <button class= "botones" onClick={handlenTodoAdd}>Agregar</button>
        <button class= "botones" onClick={handleClearAll}>Eliminar</button>
        <div class="tareasPendiente">Te quedan {todos.filter((todo)=> !todo.complete).length} tareas</div>

        </Fragment>
    )
};