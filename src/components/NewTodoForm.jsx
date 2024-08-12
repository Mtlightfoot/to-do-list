import React, { useState } from 'react'



function NewTodoForm({ onSubmit }) {

    // Variables that hold new item being typed
    const [newItem, setNewItem] = useState("")

    // Function that handles what happens when the add button is clicked
    function handleSubmit(e) {

        // Stops the page being refreshed
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        // Empties out the input box
        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item'>New Item</label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id='item' />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}

export default NewTodoForm