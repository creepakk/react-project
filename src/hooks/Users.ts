import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { IUser, IUserForm } from '../models/UserModel'

const baseUrl = 'http://localhost:8080/api/user'

export function useUsers() {
    const [error, setError] = useState('')
    const [users, setUsers] = useState<IUser[]>()
    const [user, setUser] = useState<IUser>()


    async function getUsers() {
        try {
            setError('')
            await axios
                .get<IUser[]>(baseUrl)
                .then(res => {
                    if (!res.data) {
                        setError('404')
                    } else {
                        setUsers(res.data)
                    }
                })
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function getUser(id: number) {
        try {
            setError('')
            await axios
                .get<IUser>(`${baseUrl}/${id}`)
                .then(res => {
                    if (!res.data) {
                        setError('404')
                    } else {
                        setUser(res.data)
                    }
                })
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function createUser(data: IUserForm) {
        try {
            setError('')
            await axios
                .post(baseUrl, data)
                .then(() => getUsers())
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function updateUser(id: number, data: IUserForm) {
        try {
            setError('')
            await axios
                .put(`${baseUrl}/${id}`, data)
                .then(() => getUser(id))
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    return { error, users, user, getUsers, getUser, createUser, updateUser }
}