import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPost, updatePost } from '../../redux/actions/post'
import { useFetch } from '../../hooks/useFetch'
import { Input, Button, TextArea } from 'semantic-ui-react'
import './UpdateFormPage.css'

const UpdateFormPage: React.FC<{
	history: { push: Function }
	match: { params: { postId: number } }
}> = ({
	history,
	match,
}: {
	history: { push: Function }
	match: { params: { postId: number } }
}) => {
	const id = match.params.postId as number
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const dispatch = useDispatch()

	useFetch(() => getPost(id))
	const post = useSelector((state: any) => state.post.post)

	const onTitleChange = (e: any) => {
		setTitle(e.target.value)
	}

	const onBodyChange = (e: any) => {
		setBody(e.target.value)
	}

	const onSave = (e: any) => {
		e.preventDefault()
		const newPost = {
			id,
			title,
			body,
		}
		dispatch(updatePost(id, newPost))
		setTitle('')
		setBody('')
		history.push('/')
	}

	if (!post) return null

	return (
		<div className="update-form-layout">
			<h2>Update Post Form</h2>
			<form onSubmit={(e) => onSave(e)} className="form-layout">
				<Input
					onChange={(e) => onTitleChange(e)}
					placeholder="title"
					defaultValue={post.title}
				/>
				<TextArea
					onChange={(val) => onBodyChange(val)}
					placeholder="body"
					defaultValue={post.body}
				/>
				<Button type="submit" color="blue">
					Update Post
				</Button>
			</form>
		</div>
	)
}

export default UpdateFormPage
