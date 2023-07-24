import { Link } from "react-router-dom";
import { ErrorMessage } from "./ErrorMessage";
import { ErrorContext } from "../contexts/ErrorContext";
import { useContext } from "react";

export function Navigation() {
    const { error } = useContext(ErrorContext)
    return (
        <>
            <nav>
                <Link to={'/'}>Index</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
            </nav>
            {/* {error && <ErrorMessage error={error} />} */}
        </>
    )
}