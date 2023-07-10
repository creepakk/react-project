interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <>
            {error &&
                <div className="error-message">
                    <p>{error}</p>
                </div>
            }
        </>

    )
}