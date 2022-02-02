import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/actions/post'
import { Input, Button, TextArea } from 'semantic-ui-react'
import './CreateFormPage.css'

const CreateFormPage: React.FC<{ history: { push: Function } }> = ({
	history,
}: {
	history: { push: Function }
}) => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const dispatch = useDispatch()

	const onAddPost = (e: any) => {
		e.preventDefault()
		const newPost = {
			title,
			body,
		}
		dispatch(addPost(newPost))
		setTitle('')
		setBody('')
		history.push('/')
	}

	const onTitleChange = (e: any) => {
		setTitle(e.target.value)
	}

	const onBodyChange = (e: any) => {
		setBody(e.target.value)
	}

	return (
		<div className="create-form-layout">
			<h2>Create Post Form</h2>
			<form onSubmit={(e) => onAddPost(e)} className="create-form">
				<Input onChange={(e) => onTitleChange(e)} placeholder="title" className='title-input' />
				<TextArea onChange={(e) => onBodyChange(e)} placeholder="body" className="text-area" />
				<Button type="submit" color="blue">
					Create Post
				</Button>
			</form>
		</div>
	)
}

export default CreateFormPage
