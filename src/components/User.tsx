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


export function User() {
    const { loading, user, getUser, updateUser, deleteUser } = useUsers()
    const { posts, getPostsByUser } = usePosts()

    const { id } = useParams()
    const [formSwitcher, setFormSwitcher] = useState(false)
    const [postsSwitcher, setPostsSwitcher] = useState(false)

    const navigate = useNavigate()

    const updateUserHandler = (user: IUserForm) => {
        setFormSwitcher(false)
        updateUser(Number(id), user)
    }
    const getPostsByUserHandler = () => {
        if (postsSwitcher) {
            setPostsSwitcher(false)
        } else {
            setPostsSwitcher(true)
            getPostsByUser(Number(id))
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
                    onClick={() => setFormSwitcher(!formSwitcher)}>Update User</button>

                {formSwitcher && <UserForm onPost={updateUserHandler} />}

                <button className='button' onClick={getPostsByUserHandler}
                >Posts</button>

                {postsSwitcher && <>
                    {posts && posts.map(post => <PostListLine post={post} />)}
                </>}

                <button className='button del-btn'
                    onClick={deleteUserHandler}>Delete User</button>
            </>
            }
        </>
    )
}