import React, {createContext, useState, useEffect} from 'react'


export const TodoContext = createContext()

export const TodoProvider = (props) => {
    const [user, setUser] = useState('Eugene')
    const [todos, setTodo] = useState([])

    const [title, setTitle] = useState('')
    const [id, setId] = useState(0)

    const changeUser = () => {
        setUser(prevUser => {
            return prevUser === 'Mike' ? 'Eugene' : 'Mike';
        })
    }

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url)
            .then((result) => {
                return result.json()
            }).then((result) => {
                setTodo(result.splice(0, 10))
            })
    }, [])


    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodo(newTodos)
    }


    const completeTodo = (id => {
        const newTodos = todos.map((todo) => {
            todo.completed = (todo.id === id) ? true : todo.completed
            return todo
        })
        setTodo(newTodos)
    })

    const editTodo = (id)  => {
        todos.forEach((todo) => {
           if(todo.id === id) {
               setTitle(todo.title)
               setId(todo.id)
           }
       })
    }

    const addTodo = () => {
        if(id > 0){
            updateTodo()
            return
        }
        const newId = todos[todos.length - 1].id + 1;
        const newTodos = [...todos, { id: newId, title: title, completed: false}]
        setTodo(newTodos)
        resetForm()
    }

    const updateTitle =(title) => {
        setTitle(title)
    }

    const updateTodo = () => {
        const newTodos = [...todos]
        newTodos.map((todo) => {
            if(todo.id === id){
                todo.title = title
            }
            return todo
        })
        setTodo(newTodos)
        resetForm()
    }

    const resetForm = () => {
        setTitle('')
        setId(0)
    }

    return (
        <TodoContext.Provider value={{ user, changeUser, todos, completeTodo, deleteTodo, addTodo, title, editTodo, updateTitle}}>
            {props.children}
        </TodoContext.Provider>
    )
}