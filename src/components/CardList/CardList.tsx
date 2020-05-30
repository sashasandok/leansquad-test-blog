import React from 'react'
import { PostData } from '../../interfaces'
import Card from '../Card/Card'
import './CardList.css'

type PostProps = {
	posts: PostData[]
}

const CardList: React.FC<PostProps> = (props) => {
	const { posts } = props

	return (
		<div className="card-list">
			{posts &&
				posts.map((post: PostData) => {
					return (
						<Card
							key={post.id}
							id={post.id}
							title={post.title}
							body={post.body}
							author={post.author}
						/>
					)
				})}
		</div>
	)
}

export default CardList
