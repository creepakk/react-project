import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { ErrorContext } from "../contexts/ErrorContext";
import { ErrorMessage } from "./ErrorMessage";

export function Layout() {
    const navigate = useNavigate()
    const { error, setError } = useContext(ErrorContext)

    useEffect(() => {
        setError('')
    }, [navigate])

    return (
        <>
            <Navigation />
            <section>
                <Outlet />
            </section>
            <ErrorMessage error={error} />
        </>
    )
}