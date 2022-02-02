import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Divider, Button } from 'semantic-ui-react'
import './Card.css'
import { deletePost } from '../../redux/actions/post'

type PostProps = {
	id: number
	title?: string
	body?: string
	author?: string
}

const PostCard: React.FC<PostProps> = (props) => {
	const dispatch = useDispatch()
	const onDelete = (id: number) => dispatch(deletePost(id))

	return (
		<div key={props.id} className="card-layout">
			<Link to={`/posts/${props.id}`}>
				<div>
					<h2>{props.title}</h2>
					<span>{props.author}</span>
					<p>{props.body}</p>
				</div>
			</Link>
			<div style={{ width: '100%', display: 'flex' }}>
				<Link to={`update/${props.id}`} style={{ width: '49%', marginRight: '2%' }}>
					<Button color="blue" style={{ width: '100%' }}>
						Edit
					</Button>
				</Link>
				<Button color="red" onClick={() => onDelete(props.id)} style={{ width: '49%'}} >
					Delete
				</Button>
			</div>
			<Divider />
		</div>
	)
}

export default PostCard
