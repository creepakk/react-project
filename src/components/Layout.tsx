import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { ErrorMessage } from "./ErrorMessage";
import { useContext, useEffect } from "react";

export function Layout() {


    return (
        <>
            <Navigation />
            <section>
                <Outlet />
            </section>
        </>
    )
}