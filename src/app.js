import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from 'react-router-dom'
import Login from './login'
import Button from './button'
import Signup from './signup'

import { useEffect, useState } from 'react'

export default function App() {
    const [user, setUser] = useState('')
    return (
        <Router>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: innerHeight,
                    width: '100%',
                }}
            >
                <Switch>
                    <Route path="/button">
                        <Button user={user} />
                    </Route>
                    <Route path="/signup">
                        <Signup></Signup>
                    </Route>
                    <Route path="/">
                        <Login setUser={setUser} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
