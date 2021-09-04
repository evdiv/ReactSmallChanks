import React from 'react'

import {TodoProvider} from './TodoContext'
import Header from './Header'
import Todos from './Todos'
import Footer from './Footer'


const App = () => {
    return (
        <TodoProvider>
            <Header />
            <Todos />
            <Footer />
        </TodoProvider>
    )
}

export default App