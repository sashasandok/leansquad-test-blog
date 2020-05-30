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
			<div>
				<div className="ui two buttons">
					<Link to={`update/${props.id}`}>
						<Button basic color="green">
							Edit
						</Button>
					</Link>
					<Button basic color="red" onClick={() => onDelete(props.id)}>
						Delete
					</Button>
				</div>
			</div>
			<Divider />
		</div>
	)
}

export default PostCard
