import { createContext, useState } from "react"

interface IFormContext {
    isVisible: boolean
    openForm: () => void
    closeForm: () => void
    onClickHandler: () => void
}

export const FormContext = createContext<IFormContext>({
    isVisible: false,
    openForm: () => { },
    closeForm: () => { },
    onClickHandler: () => {}
})

export function FormState({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false)
    const openForm = () => setIsVisible(true)
    const closeForm = () => setIsVisible(false)
    const onClickHandler = () => isVisible ? closeForm() : openForm()

    return (
        <FormContext.Provider value={{ isVisible, openForm, closeForm, onClickHandler }}>
            {children}
        </FormContext.Provider>
    )
}