import { useContext, useState } from "react";
import { IPost, IPostForm } from "../models/PostModel";
import axios, { AxiosError } from "axios";
import { ErrorContext } from "../contexts/ErrorContext";

export function usePosts() {
    const baseUrl = 'http://localhost:8080/api/post'

    const [loading, setLoading] = useState('')
    const { error, setError } = useContext(ErrorContext)
    const [posts, setPosts] = useState<IPost[]>()
    const [post, setPost] = useState<IPost>()

    async function getPosts() {
        try {
            setError('')
            await axios
                .get<IPost[]>(baseUrl + 's')
                .then(res => {
                    if (!res.data) {
                        setError('404')
                    } else {
                        setPosts(res.data)
                    }
                })
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function getPost(id: number) {
        try {
            setError('')
            await axios
                .get<IPost>(`${baseUrl}/${id}`)
                .then(res => {
                    console.log(res.data)
                    if (!res.data) {
                        setError('404')
                    } else {
                        setPost(res.data)
                    }
                })
        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function getPostsByUser(userId: number) {
        try {
            setError('')
            const res = await axios.get(`${baseUrl}s/${userId}`)
            const posts = res.data

            if (posts.length === 0 || posts === undefined) {
                setError('404')
            } else {
                setPosts(posts)
            }
        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function createPost(data: IPostForm) {
        try {

        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function updatePost(id: number, data: IPostForm) {
        try {

        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function deletePost(id: number) {
        try {

        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    return { error, posts, post, getPosts, getPost, getPostsByUser, createPost, updatePost, deletePost }
}   