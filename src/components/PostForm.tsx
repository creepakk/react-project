import React, { useContext, useState } from "react"
import { ErrorContext } from "../contexts/ErrorContext"
import { IPostForm } from "../models/PostModel"
import { useParams } from "react-router-dom"

interface PostFormProps {
    onPost: (user: IPostForm) => void
}

export function PostForm({ onPost }: PostFormProps) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { id } = useParams()

    const { setError } = useContext(ErrorContext)

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (title.trim() == '' || content.trim() == '') {
            setError('Input cannot be empty')
        }

        onPost({ title: title, content: content, user_id: Number(id) })
    }

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const contentChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.currentTarget.value)
    }

    return (
        <div className="form-block">
            <h2>Post Form</h2>

            <form onSubmit={submitHandler} className="form">
                <div className="form-input-line">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"
                        placeholder="Title" value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="form-input-line">
                    <label htmlFor="content">Content</label>
                    <textarea name="content"
                        placeholder="Content"
                        value={content}
                        onChange={contentChangeHandler}></textarea>
                </div>

                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}