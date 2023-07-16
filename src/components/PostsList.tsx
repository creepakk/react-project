import { useEffect } from "react";
import { usePosts } from "../hooks/Posts";
import { PostListLine } from "./PostsListLine";
import { ErrorMessage } from "./ErrorMessage";

export function PostsList() {
    const { error, posts, getPosts } = usePosts()

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            {posts && <>
                <div className="users-list">
                    <div className="users-list-line ull-cols">
                        <span>Id</span><span>Title</span><span>User Id</span>
                    </div>
                    {posts.map(post => <PostListLine post={post} key={post.id} />)}
                </div>
            </>
            }
        </>
    )
}