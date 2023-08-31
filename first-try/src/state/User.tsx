// useState hook 2
// in LoggedIn.tsx, we pass in only "false" into useState. Consequently, isLoggedIn has only type boolean
// now we try to let the state variable "user" has two types using < | >
import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    // <AuthUser | null>: the type of user is inferred as either null or AuthUser
    // user?.name: if user exist, take its name; else take null
    const [user, setUser] = useState<AuthUser | null>(null)
    const userExists = () => {
        setUser({
            name: 'Kenzo',
            email: 'kenzo@hotmail.com'
        })
    }
    const userNotExists = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={userExists}>Activate User</button>
            <button onClick={userNotExists}>Deactivate User</button>
            <div>User Name is {user?.name}</div>
            <div>User Email is {user?.email}</div>
        </div>

    )
}