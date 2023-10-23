import { useState } from "react"
import Button from "./Button";
import axios from "axios"

interface ITasks {
    id: string
    body: string
}

const Tasks = () => {
    const [tasks, setTasks] = useState<Array<ITasks>>([])

    const handleClick = async () => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/1/comments")

        setTasks(data.todos)
    }

    console.log(tasks)
    return (
        <>
            <h1>Tasks from API</h1>
            <Button disabled={false} onClick={() => handleClick()}>Get Tasks from API</Button>
            {tasks.map(item => (<p key={item.id} id={item.id}>{item.body}</p>))}
        </>
    )
}

export default Tasks