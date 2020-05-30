import { PostData } from '../interfaces'

export default (post: PostData) => {
	return {
		id: post.id,
		title: post.title,
		body: post.body,
		author: post.author,
		comments: post.comments,
	}
}
