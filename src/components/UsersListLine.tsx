import { Link } from "react-router-dom"
import { IUser } from "../models/UserModel"

interface UsersListLineProps {
    user: IUser
}

export function UsersListLine({ user }: UsersListLineProps) {
    const id = user.id
    return (
        <div className='users-list-line'>
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.surname}</span>
            <button><Link to={`/users/${id}`} >To user</Link></button>
        </div>
    )
}