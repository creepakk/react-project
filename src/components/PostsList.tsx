import { useEffect } from "react";
import { usePosts } from "../hooks/Posts";
import { PostListLine } from "./PostsListLine";

interface PostsListProps {
    id?: number
}

export function PostsList({ id }: PostsListProps) {
    const { posts, getPosts, getPostsByUser } = usePosts()

    useEffect(() => {
        if (id) {
            getPostsByUser(id)
        } else {
            getPosts()
        }
    }, [])

    return (
        <>
            {posts && <>
                <div className="list">
                    <div className="list-line ll-cols">
                        <span>Id</span><span>Title</span><span>User Id</span>
                    </div>
                    {posts.map(post => <PostListLine post={post} key={post.id} />)}
                </div>
            </>
            }
        </>
    )
}