import { createContext, useState } from "react"

interface IErrorContext {
    error: string,
    setError: (error: string) => void,
}

export const ErrorContext = createContext<IErrorContext>({
    error: '',
    setError: () => { },
})

export function ErrorState({ children }: { children: React.ReactNode }) {
    const [error, setErr] = useState('')
    const setError = (error: string) => setErr(error)

    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    )
}