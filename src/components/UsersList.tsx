import { useContext, useEffect, useState } from "react"
import { useUsers } from "../hooks/Users"
import { UsersListLine } from "./UsersListLine"
import { ErrorMessage } from "./ErrorMessage"
import { UserForm } from "./UserForm"
import { IUserForm } from "../models/UserModel"
import { Loader } from "./Loader"
import { ErrorContext } from "../contexts/ErrorContext"

export function UsersList() {
    const { loading, users, getUsers, createUser } = useUsers()
    const { error } = useContext(ErrorContext)
    const [formSwitcher, setFormSwitcher] = useState(false)

    const createUserHandler = (user: IUserForm) => {
        setFormSwitcher(false)
        createUser(user)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {/* {error && <ErrorMessage error={error} />} */}
            {loading && <Loader />}
            {users && <>
                <div className="users-list">
                    <div className="users-list-line ull-cols">
                        <span>Id</span><span>Name</span><span>Surname</span>
                    </div>

                    {users.map(user => <UsersListLine user={user} key={user.id} />)}
                </div>
            </>}

            <button className="button"
                onClick={() => setFormSwitcher(!formSwitcher)}
            >Create User</button>

            {formSwitcher && <UserForm onPost={createUserHandler} />}

        </>
    )
}
