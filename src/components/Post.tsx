import { useEffect, useState } from "react"
import { usePosts } from "../hooks/Posts"
import { useNavigate, useParams } from "react-router-dom"
import { PostForm } from "./PostForm"
import { IPostForm } from "../models/PostModel"

export function Post() {
    const { post, getPost, updatePost, deletePost } = usePosts()
    const { id } = useParams()
    const [updatePostSwitcher, setUpdatePostSwitcher] = useState(false)

    const navigate = useNavigate()

    const updatePostHandler = (post: IPostForm) => {
        setUpdatePostSwitcher(false)
        updatePost(Number(id), post)
    }

    const deletePostHandler = () => {
        deletePost(Number(id))
        navigate('/posts')
    }

    useEffect(() => {
        getPost(Number(id))
    }, [])

    return (
        <>
            {post && <div className="post">
                <h1>{post.title}</h1>
                <p className="post-content">{post.content}</p>
                <p>id: {post.id}, user_id: {post.user_id}</p>
            </div>}

            <button className="button"
                onClick={() => setUpdatePostSwitcher(!updatePostSwitcher)}
            >Update post</button>

            {updatePostSwitcher && <PostForm onPost={updatePostHandler} />}

            <button className="button del-btn" onClick={deletePostHandler}>Delete post</button>
        </>
    )
}