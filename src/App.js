import React from "react";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddTodo from './components/AddTodo.js';
import TaskList from './components/TaskList.js';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Коммент 1' },
    { id: 1, title: 'Eat tacos' },
    { id: 2, title: 'Brew tea' },
];


export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();

    function handleChange1(event) {
        setValue1(event.target.value * 1.8 + 32);
    }

    function handleChange2(event) {
        setValue2((event.target.value - 32) * 5 / 9);
    }

    function resetAll() {
        window.location.reload();
    }

    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
            },
        ]);
    }

    function handleDeleteTodo(todoId) {
        setTodos(todos.filter((t) => t.id !== todoId));
    }
    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
            />
            <TextField
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                slotProps={{
                    input: {
                        endAdornment: <InputAdornment position="end">C</InputAdornment>,
                    },
                }}
                value={value2} onChange={handleChange1} onBlur={resetAll}
            />
            <TextField
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                slotProps={{
                    input: {
                        endAdornment: <InputAdornment position="end">F</InputAdornment>,
                    },
                }}
                value={value1} onChange={handleChange2} onBlur={resetAll}
            />
        </>
    );
}