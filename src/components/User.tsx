import { useEffect, useState } from 'react'
import { useUsers } from '../hooks/Users'
import { ErrorMessage } from './ErrorMessage'
import { useNavigate, useParams } from 'react-router-dom'
import { UserForm } from './UserForm'
import { IUserForm } from '../models/UserModel'
import { PostsList } from './PostsList'
import { Loader } from './Loader'
import { usePosts } from '../hooks/Posts'
import { PostListLine } from './PostsListLine'
import { PostForm } from './PostForm'
import { IPostForm } from '../models/PostModel'


export function User() {
    const { loading, user, getUser, updateUser, deleteUser } = useUsers()
    const { createPost } = usePosts()

    const { id } = useParams()
    const [userFormSwitcher, setUserFormSwitcher] = useState(false)
    const [postsSwitcher, setPostsSwitcher] = useState(false)
    const [createPostSwitcher, setCreatePostSwitcher] = useState(false)

    const navigate = useNavigate()

    const updateUserHandler = (user: IUserForm) => {
        setUserFormSwitcher(false)
        updateUser(Number(id), user)
    }

    const createPostHandler = (post: IPostForm) => {
        setCreatePostSwitcher(false)
        createPost(post)
    }

    const getPostsByUserHandler = () => {
        if (postsSwitcher) {
            setPostsSwitcher(false)
        } else {
            setPostsSwitcher(true)
        }
    }
    const deleteUserHandler = () => {
        deleteUser(Number(id))
        navigate('/users')
    }

    useEffect(() => {
        getUser(Number(id))
    }, [])

    return (
        <>
            {loading && <Loader />}
            {user && <>
                <p>{user.name} {user.surname}, id: {user.id}</p>

                <button className="button"
                    onClick={() => setUserFormSwitcher(!userFormSwitcher)}>Update User</button>

                {userFormSwitcher && <UserForm onPost={updateUserHandler} />}

                <button className='button' onClick={() => setCreatePostSwitcher(!createPostSwitcher)}
                >Create Post</button>

                {createPostSwitcher && <PostForm onPost={createPostHandler} />}

                <button className='button' onClick={getPostsByUserHandler}
                >Posts</button>

                {postsSwitcher && <PostsList id={Number(id)} />}

                <button className='button del-btn'
                    onClick={deleteUserHandler}>Delete User</button>
            </>
            }
        </>
    )
}