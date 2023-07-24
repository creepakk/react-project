import { useContext } from "react"
import { ErrorContext } from "../contexts/ErrorContext"

interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    const { setError } = useContext(ErrorContext)
    return (
        <>
            {error && <div className="error-message">
                <div>
                    <p>{error}</p>
                    <button className="error-close-btn"
                        onClick={() => setError('')}>X</button>
                </div>
            </div>}
        </>
    )
}