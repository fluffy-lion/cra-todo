import { useState } from "react"


const AddTodo = () => {

    const [userInput, setUserInput] = useState("")

    const handler = async (e) => {
        e.preventDefault()
        const todo = { todo: userInput }

        const response = await fetch('/todos/item', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if(!response.ok) console.log('error')
        if(response.ok) {
            setUserInput('')
            console.log('new todo added', json)
          
        }
    }

    return (
        <div>
            <h1>
                add item
            </h1>
            <form onSubmit={handler}>
                <input 
                type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddTodo