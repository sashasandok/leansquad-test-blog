import { createActions } from 'redux-actions'
import apiData from '../../api/post'
import postMapper from '../../mappers/post'
import MapperDetailedPostData from '../../mappers/post'

export const PAGE_COUNT = 5

const actions = createActions<any>({
	getPosts: {
		request: (x) => x,
		complete: (x) => x,
		error: (x) => x,
	},
	getPost: {
		request: (x) => x,
		complete: (x) => x,
		error: (x) => x,
	},
	addPost: {
		request: (x) => x,
		complete: (x) => x,
		error: (x) => x,
	},
	updatePost: {
		request: (x) => x,
		complete: (x) => x,
		error: (x) => x,
	},
	deletePost: {
		request: (x) => x,
		complete: (x) => x,
		error: (x) => x,
	},
	addComment: {
		request: (x) => x,
		complete: (x) => x,
		error: (x) => x,
	},
	setPost: (x) => x,
}) as any

export default actions

export const getPosts = () => async (dispatch: any) => {
	dispatch(actions.getPosts.request())

	try {
		const data = await apiData.getPosts()
		const posts = data.map(postMapper)

		dispatch(
			actions.getPosts.complete({
				posts,
			}),
		)
	} catch (e) {
		console.log(e)
		dispatch(actions.get.error(e.message))
	}
}

export const getPost = (id: number) => async (dispatch: any) => {
	dispatch(actions.getPost.request())

	try {
		const postData = await apiData.getPost(id)
		const post = MapperDetailedPostData(postData)

		dispatch(
			actions.getPost.complete({
				post,
			}),
		)
	} catch (e) {
		console.log(e)
		dispatch(actions.getPost.error(e.message))
	}
}

export const addPost = (data: {}) => async (dispatch: any) => {
	dispatch(actions.addPost.request())

	try {
		const post = await apiData.addPost(data)

		dispatch(actions.addPost.complete({ post }))
	} catch (e) {
		console.log(e)
		dispatch(actions.addPost.error(e.message))
	}
}

export const updatePost = (id: number, data: {}) => async (dispatch: any) => {
	dispatch(actions.updatePost.request())
	try {
		const post = await apiData.updatePost(id, data)

		dispatch(actions.updatePost.complete({ post }))
	} catch (e) {
		console.log(e)
		dispatch(actions.updatePost.error(e.message))
	}
}

export const deletePost = (id: number) => async (dispatch: any) => {
	dispatch(actions.deletePost.request())

	try {
		await apiData.deletePost(id)
		dispatch(
			actions.deletePost.complete({
				id,
			}),
		)
	} catch (e) {
		console.log(e)
		dispatch(actions.deletePost.error(e.message))
	}
}

export const addCommentPost = (data: {}) => async (dispatch: any) => {
	dispatch(actions.addComment.request())
	try {
		const post = await apiData.addComment(data)

		dispatch(actions.addComment.complete({ post }))
	} catch (e) {
		console.log(e)
		dispatch(actions.addComment.error(e.message))
	}
}

export const setPost = () => async (dispatch: any) => {
	dispatch(actions.setPost({ post: null }))
}
