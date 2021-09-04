import React, {useContext} from 'react'
import { TodoContext } from './TodoContext'

const Form = ({ changeTitle, title}) => {

    const context = useContext(TodoContext)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        context.addTodo()
    }

    const onChangeHandler = (title) => {
        context.updateTitle(title)

    }

    return (
        <div>
            <form onSubmit={(event) => onSubmitHandler(event)}>
                <input type="text" value={context.title} onChange={(event) => onChangeHandler(event.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form