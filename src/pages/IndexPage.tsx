import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { ErrorContext } from "../contexts/ErrorContext";

export function IndexPage() {
    const { error } = useContext(ErrorContext)
    return (
        <div className='page'>
            <h1>Index Page</h1>
            {error && <ErrorMessage error={error} />}
        </div>
    )
}