import { Outlet, useParams } from "react-router-dom"

export function PostsPage() {
    const { id } = useParams()

    const title = id === undefined ? "Posts" : "Post"

    return (
        <div className="page">
            <h1>{title} </h1>
            <Outlet />
        </div>
    )
}