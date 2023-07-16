import { useState } from "react";

export function useErrors() {
    const [error, setError] = useState('')

    return { error, setError }
}   