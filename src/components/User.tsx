import { useContext, useEffect } from 'react'
import { useUsers } from '../hooks/Users'
import { ErrorMessage } from './ErrorMessage'
import { useParams } from 'react-router-dom'
import { FormContext } from '../contexts/FormContext'
import { UserForm } from './UserForm'
import { IUserForm } from '../models/UserModel'


export function User() {
    const { error, user, getUser, updateUser } = useUsers()
    const { id } = useParams()
    const { isVisible, closeForm, onClickHandler } = useContext(FormContext)

    const updateUserHandler = (user: IUserForm) => {
        closeForm()
        updateUser(Number(id), user)
    }

    useEffect(() => {
        closeForm()
        getUser(Number(id))
    }, [])

    return (
        <>
            {error && <ErrorMessage error={error} />}
            {user && <>
                <p>{user.name} {user.surname}, id: {user.id}</p>

                <button className="button"
                    onClick={onClickHandler}>Update User</button>

                {isVisible && <UserForm
                    onPost={updateUserHandler}
                    userData={{ name: user.name, surname: user.surname }} />
                }
            </>
            }
        </>
    )
}