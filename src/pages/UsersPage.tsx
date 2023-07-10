import { Outlet, useParams } from "react-router"

export function UsersPage() {
    const { id } = useParams()

    const title = id === undefined ? "Users" : "User"

    return (
        <div className="page">
            <h1>{title} </h1>
            <Outlet />
        </div>
    )
}