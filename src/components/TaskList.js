
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TaskList({
    todos,
    onDeleteTodo,
}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo, onDelete }) {
    let todoContent = (
        <>
            {todo.title}
        </>
    );
    
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1500 }}>
            
                <List>
                    <ListItem>

                        <ListItemText primary={todoContent} />
                    </ListItem>

                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={() => onDelete(todo.id)} />
                    </IconButton>

                </List>
            
        </Box>
    );

}

