import React, {useContext} from 'react'
import {TodoContext} from './TodoContext'

const Header = () => {
    const value = useContext(TodoContext)
    return (
        <div style={{ backgroundColor: 'black', color: 'white', marginBottom: 20 }}>
            <h4>Header {value.user} <span onClick={value.changeUser}>[change]</span></h4>
        </div>
    )
}

export default Header