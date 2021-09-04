import React, {useState, useContext} from 'react'
import { TodoContext } from './TodoContext'

const Form = ({ changeTitle, title}) => {

    [title, changeTitle] = useState('')
    const context = useContext(TodoContext)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        context.addTodo(title)
    }

    return (
        <div>
            <form onSubmit={(event) => onSubmitHandler(event)}>
                <input type="text" value={title} onChange={(event) => changeTitle(event.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form