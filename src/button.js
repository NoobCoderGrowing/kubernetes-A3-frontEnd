import React from 'react'
import './button.css'
import { useEffect, useState } from 'react'
import { message } from 'antd'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from 'react-router-dom'

function Button({ user }) {
    let history = useHistory()
    const [count, setCount] = useState(0)

    function click() {
        let newCount = count + 1

        addCount(newCount)
    }

    function logout() {
        history.push('/')
    }

    function addCount(newCount) {
        let url =
            'http://35.223.39.248/count?' +
            new URLSearchParams({
                count: newCount,
            })
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                const keys = Object.keys(response)
                let result = Number.parseInt(keys[0])
                console.log(response)
                if (result == 20) {
                    if (response[20] == 'win') {
                        message.info('You win')
                    }
                }
                setCount(result)
            })
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    left: '100%',
                    transform: `translate(-200%, 0)`,
                    top: '20px',
                    width: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                }}
            >
                <p>Welcom {user}</p>
                <button onClick={logout}>Log out</button>
            </div>
            <h3>Get to 20 first among all players will win the prize</h3>
            <div style={{ marginBottom: '100px', fontSize: '3em' }}>
                {count}
            </div>
            <button className="btn" onClick={click}>
                Click Me
            </button>
        </div>
    )
}

export default Button
