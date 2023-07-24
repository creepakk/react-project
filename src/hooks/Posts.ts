import { useContext, useState } from "react";
import { IPost, IPostForm } from "../models/PostModel";
import axios, { AxiosError } from "axios";
import { ErrorContext } from "../contexts/ErrorContext";

export function usePosts() {
    const baseUrl = 'http://localhost:8080/api/post'

    const [loading, setLoading] = useState(false)
    const { error, setError } = useContext(ErrorContext)
    const [posts, setPosts] = useState<IPost[]>()
    const [post, setPost] = useState<IPost>()

    async function getPosts() {
        try {
            setError('')
            setLoading(true)

            const res = await axios.get<IPost[]>(baseUrl + 's')
            const posts = res.data

            if (posts.length === 0) {
                setError('Posts not found')
            } else {
                setPosts(posts)
            }

            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function getPost(id: number) {
        try {
            setError('')
            setLoading(true)

            const res = await axios.get<IPost>(`${baseUrl}/${id}`)
            const post = res.data

            if (!post) {
                setError('Post not found')
            } else {
                setPost(post)
            }

            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function getPostsByUser(userId: number) {
        try {
            setError('')
            setLoading(true)

            const res = await axios.get(`${baseUrl}s/${userId}`)
            const posts = res.data

            if (posts.length === 0) {
                setError('Posts not found')
            } else {
                setPosts(posts)
            }
            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function createPost(data: IPostForm) {
        try {
            setError('')
            setLoading(true)

            await axios.post(`${baseUrl}/${data.user_id}`, data)

            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function updatePost(id: number, data: IPostForm) {
        try {
            setError('')
            setLoading(true)

            await axios.put(`${baseUrl}/${id}`, data)
            getPost(id)

            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function deletePost(id: number) {
        try {
            setError('')
            await axios.delete(`${baseUrl}/${id}`)
        } catch (e) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    return {
        loading,
        error,
        posts,
        post,
        getPosts,
        getPost,
        getPostsByUser,
        createPost,
        updatePost,
        deletePost
    }
}   