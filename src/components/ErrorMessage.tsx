interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <div className="error-message">
            <p>{error}</p>
        </div>
    )
}