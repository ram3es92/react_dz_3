import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

export default function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState('');
    return (
        <>
            <TextField
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                slotProps={{
                    input: {
                        endAdornment: <InputAdornment position="end"></InputAdornment>,
                    },
                }}
                value={title} onChange={(e) => setTitle(e.target.value)}
            />

            <Button variant="contained"
            sx={{ m: 2, width: '25ch' }}
                onClick={() => {
                    setTitle('');
                    onAddTodo(title);
                }}>Добавить задачу</Button>

        </>
    );
}