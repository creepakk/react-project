import { Link } from "react-router-dom";
import { IPost } from "../models/PostModel";

interface PostsListLineProps {
    post: IPost
}

export function PostListLine({ post }: PostsListLineProps) {
    return (
        <div className='list-line'>
            <span>{post.id}</span>
            <span>{post.title}</span>
            <span>{post.user_id}</span>
            <Link to={`/posts/${post.id}`} >To post</Link>
        </div>
    )
}