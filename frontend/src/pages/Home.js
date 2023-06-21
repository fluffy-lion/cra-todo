import { useEffect, useState } from "react";

const Home = () => {

    const [todos, setTodos] = useState([])
    useEffect(() => {

        // const fetchTodos = async () => {
        //     console.log('called')

        //     const response  = await fetch("/todos/items")
        
        // }
        // fetchTodos()
       
    }, [])

    if(!todos) return <h1>loading...</h1>
    return (
        <div>
            <div>
                {todos ?  
                <>
                {todos.map((todo) => <h2 key={todo._id}>{todo.todo}</h2>)}
                </>
                : <p>loading...</p>
                }
            </div>
        </div>
    )
}

export default Home