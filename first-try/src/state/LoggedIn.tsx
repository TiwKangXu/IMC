// useState hook 1
import { useState } from 'react'

export const LoggedIn = () => {
    // the "false" passed in to useState is the "initial value". 
    // isLoggedIn is then be inferred as a boolean
    // setIsLoggedIn is a "react dispatch"
    // basically, "useState" let the second thingy in [] ("setIsLoggedIn") become a function that can modify the value of
    //   the first thingy in [] ("isLoggedIn"). 
    // "isLoggedIn" is called "state variable" -- the variable that stores log-in state
    // "setIsLoggedIn" is called "setter function" -- the function that modifies the log-in state
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}