import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav>
            <Link to={'/'}>Index</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
        </nav>
    )
}