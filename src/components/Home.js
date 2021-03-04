import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()

    const handleOnclick = () => {
        history.push('/todolist')
    }
    return (
        <div className="home-main">
            <h1>Welcome to my Todolist</h1>
            <button onClick={handleOnclick}>Start</button>
            
        </div>
    )
}

export default Home
