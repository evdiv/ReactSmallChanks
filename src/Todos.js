import React, {useContext} from 'react'

import Todo from './Todo'
import Form from './Form'
import { TodoContext } from './TodoContext'

const Todos =() => {
    const context = useContext(TodoContext)

    return (
        <div>
            {!context.todos.length  && <span>Loading ...</span>}
            {context.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}

            <Form />
        </div>
    )
}

export default Todos