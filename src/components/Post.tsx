import { useEffect } from "react"
import { usePosts } from "../hooks/Posts"
import { useParams } from "react-router-dom"
import { ErrorMessage } from "./ErrorMessage"

export function Post() {
    const { error, post, getPost } = usePosts()
    const { id } = useParams()


    useEffect(() => {
        getPost(Number(id))
    }, [])

    return (
        <>
            <ErrorMessage error={error} />

            {post && <>
                <p>{post.title} {post.content}, id: {post.id}</p>
            </>}
        </>
    )
}