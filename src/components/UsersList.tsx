import { useContext, useEffect, useState } from "react"
import { useUsers } from "../hooks/Users"
import { UsersListLine } from "./UsersListLine"
import { ErrorMessage } from "./ErrorMessage"
import { UserForm } from "./UserForm"
import { IUserForm } from "../models/UserModel"
import { FormContext } from "../contexts/FormContext"

export function UsersList() {
    const { error, users, getUsers, createUser } = useUsers()
    const { isVisible, closeForm, onClickHandler } = useContext(FormContext)

    const createUserHandler = (user: IUserForm) => {
        closeForm()
        createUser(user)
    }

    useEffect(() => {
        closeForm()
        getUsers()
    }, [])

    return (
        <>
            {error && <ErrorMessage error={error} />}
            {users && <>
                <div className="users-list">
                    <div className="users-list-line ull-cols">
                        <span>Id</span><span>Name</span><span>Surname</span>
                    </div>
                    {users.sort((a, b) => a.id - b.id)
                        .map(user => <UsersListLine user={user} key={user.id} />)}
                </div>

                <button className="button"
                    onClick={onClickHandler}>Create User</button>

                {isVisible && <UserForm onPost={createUserHandler} />}
            </>}
        </>
    )
}
