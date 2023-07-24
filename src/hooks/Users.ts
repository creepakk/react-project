import axios, { AxiosError } from 'axios'
import { useContext, useState } from 'react'
import { IUser, IUserForm } from '../models/UserModel'
import { ErrorContext } from '../contexts/ErrorContext'

export function useUsers() {
    const baseUrl = 'http://localhost:8080/api/user'

    const [loading, setLoading] = useState(false)
    const { error, setError } = useContext(ErrorContext)
    const [users, setUsers] = useState<IUser[]>()
    const [user, setUser] = useState<IUser>()

    async function getUsers() {
        try {
            setError('')
            setLoading(true)

            const res = await axios.get<IUser[]>(baseUrl + 's')
            const users = res.data

            if (users.length === 0) {
                setError('Users Not Found')
            } else {
                setUsers(users)
            }

            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    async function getUser(id: number) {
        try {
            setError('')
            setLoading(true)

            const res = await axios.get<IUser>(`${baseUrl}/${id}`)
            const user = res.data

            if (!user) {
                setError('User Not Found')
            } else {
                setUser(user)
            }

            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    async function createUser(data: IUserForm) {
        try {
            setError('')
            setLoading(true)

            await axios.post(baseUrl, data)
            getUsers()

            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    async function updateUser(id: number, data: IUserForm) {
        try {
            setError('')
            setLoading(true)

            await axios.put(`${baseUrl}/${id}`, data)
            getUser(id)

            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    async function deleteUser(id: number) {
        try {
            setError('')
            await axios.delete(`${baseUrl}/${id}`)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    return {
        loading,
        error,
        users,
        user,
        getUsers,
        getUser,
        createUser,
        updateUser,
        deleteUser
    }
}