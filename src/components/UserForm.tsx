import { useContext, useEffect, useState } from "react"
import { IUser, IUserForm } from "../models/UserModel"
import { ErrorMessage } from "./ErrorMessage"
import { ErrorContext } from "../contexts/ErrorContext"

interface CreateUserFormProps {
    onPost: (user: IUserForm) => void
}

export function UserForm({ onPost }: CreateUserFormProps) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const { error, setError } = useContext(ErrorContext)

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (name.trim() == '' || surname.trim() == '') {
            setError('Input cannot be empty')
            return
        }

        onPost({ name: name, surname: surname })
    }

    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
    }
    const surnameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(event.currentTarget.value)
    }

    return (
        <div className="user-form-block">
            <h2>User Form</h2>

            <form onSubmit={submitHandler} className="user-form">
                <div className="form-input-line">
                    <label htmlFor="name">Name </label>
                    <input type="text" name="name"
                        placeholder="Name" value={name}
                        onChange={nameChangeHandler} />
                </div>
                <div className="form-input-line">
                    <label htmlFor="surname">Surname </label>
                    <input type="text" name="surname"
                        placeholder="Surname" value={surname}
                        onChange={surnameChangeHandler} />
                </div>

                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}