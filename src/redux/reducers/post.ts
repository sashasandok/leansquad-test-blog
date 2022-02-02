import { handleActions } from 'redux-actions'
import actions from '../actions/post'
import { deleteItem, addItem, updateCollection } from '../../utils/collection'

export const initialState = {
	posts: [],
	isFetching: false,
	error: '',
	post: {},
}

export default handleActions<any>(
	{
		[actions.getPosts.request]: (state: any) => {
			return {
				...state,
				isFetching: true,
				error: '',
			}
		},

		[actions.getPosts.complete]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				posts: payload.posts,
			}
		},

		[actions.getPosts.error]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				error: payload.error,
			}
		},

		[actions.getPost.request]: (state: any) => {
			return {
				...state,
				isFetching: true,
				error: '',
			}
		},

		[actions.getPost.complete]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				post: payload.post,
			}
		},

		[actions.getPost.error]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				error: payload.error,
			}
		},

		[actions.addPost.request]: (state: any) => {
			return {
				...state,
				isFetching: true,
				error: '',
			}
		},

		[actions.addPost.complete]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				posts: addItem(state.posts, payload.post),
			}
		},

		[actions.addPost.error]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				error: payload.error,
			}
		},

		[actions.updatePost.request]: (state: any) => {
			return {
				...state,
				isFetching: true,
				error: '',
			}
		},

		[actions.updatePost.complete]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				posts: updateCollection(state.posts, payload.post),
			}
		},

		[actions.updatePost.error]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				error: payload.error,
			}
		},

		[actions.deletePost.request]: (state: any) => {
			return {
				...state,
				isFetching: true,
				error: '',
			}
		},

		[actions.deletePost.complete]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				posts: deleteItem(state.posts, payload.id),
			}
		},

		[actions.deletePost.error]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				error: payload.error,
			}
		},

		[actions.addComment.request]: (state: any) => {
			return {
				...state,
				isFetching: true,
				error: '',
			}
		},

		[actions.addComment.complete]: (state: any, { payload }: any) => {
			const updated = { ...state.post }
			updated.comments = [...state.post.comments, payload.post]

			return {
				...state,
				isFetching: false,
				post: updated,
			}
		},

		[actions.addComment.error]: (state: any, { payload }: any) => {
			return {
				...state,
				isFetching: false,
				error: payload.error,
			}
		},

		[actions.setPost]: (state, { payload }) => ({
			...state,
			post: payload.post,
		}),
	},
	initialState,
)
