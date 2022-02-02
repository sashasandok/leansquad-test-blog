import React, { useState } from 'react'
import { DetailedPostProps } from '../../types'
import { addCommentPost } from '../../redux/actions/post'
import { useDispatch } from 'react-redux'
import './DetailedCard.css'
import { Button, TextArea, Divider } from 'semantic-ui-react'

const DetailedCard: React.FC<DetailedPostProps> = (props: any) => {
	const [commentBody, setCommentBody] = useState('')
	const dispatch = useDispatch()

	const onCommentChange = (e: any) => {
		setCommentBody(e.target.value)
	}

	const addComment = () => {
		const body = {
			postId: props.post.id,
			body: commentBody,
		}

		dispatch(addCommentPost(body))
		setCommentBody('')
	}

	return (
		<>
			{props.post && (
				<div className="detailed-post">
					<div className="post-detailed-info">
						<p className="post-name">{props.post.title}</p>
						<p className="post-location">{props.post.body}</p>
						<p className="post-author">{props.post.author}</p>
					</div>
					<Divider />
					<div className="comments-block">
						<div className="comments-list">
							<h3>Comments list</h3>
							<ol>
								{props.post.comments &&
									props.post.comments.map((comment: any) => {
										return <li key={comment.id}>{comment.body}</li>
									})}
							</ol>
						</div>
						<TextArea
							placeholder="add comment"
							onChange={(e) => onCommentChange(e)}
							style={{ padding: '10px' }}
							className="comment-text-area"
						/>
						<Button
							color="blue"
							onClick={addComment}
							style={{ width: '130px', marginTop: '20px' }}
						>
							add comment
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default DetailedCard
