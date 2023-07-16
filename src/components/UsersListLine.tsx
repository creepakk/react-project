import { Link } from "react-router-dom"
import { IUser } from "../models/UserModel"

interface UsersListLineProps {
    user: IUser
}

export function UsersListLine({ user }: UsersListLineProps) {
    return (
        <div className='users-list-line'>
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.surname}</span>
            <Link to={`/users/${user.id}`} >To user</Link>
        </div>
    )
}