import { useEffect, useState } from "react"
import { IUser, IUserForm } from "../models/UserModel"
import { ErrorMessage } from "./ErrorMessage"

interface CreateUserFormProps {
    onPost: (user: IUserForm) => void
    userData?: IUserForm | undefined
}

export function UserForm({ onPost, userData }: CreateUserFormProps) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [error, setError] = useState('')


    useEffect(() => {
        if (userData) {
            setName(userData?.name)
            setSurname(userData.surname)
        }
    }, [])


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (name.trim() == '' || surname.trim() == '') {
            setError('input cannot be empty')
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

                <ErrorMessage error={error} />

                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}