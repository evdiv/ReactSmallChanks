import React, {useContext} from 'react'
import { TodoContext } from './TodoContext'

const Todo = ({ todo }) => {
    const context = useContext(TodoContext)

    return (
        <div style={todo.completed ? { backgroundColor: '#dafcc9' } : { backgroundColor: '#fcd1d1'}}>
            <h4># {todo.id} {todo.title}
                <span style={{ cursor: 'pointer' }} onClick={() => context.deleteTodo(todo.id)}>[x]</span>
                {!todo.completed && <span style={{ cursor: 'pointer' }} onClick={() => context.completeTodo(todo.id)}>[complete]</span>}
                <span style={{ cursor: 'pointer' }} onClick={() => context.editTodo(todo.id)}>[edit]</span>
            </h4>
        </div>
    )
}

export default Todo