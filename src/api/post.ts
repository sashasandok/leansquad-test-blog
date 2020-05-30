import { get, post, del, put } from './apiClient'

export default {
	getPosts: () => get('posts', {}),
	getPost: (id: number) => get(`posts/${id}`, { _embed: 'comments' }),
	addPost: (data: {}) => post('posts', data),
	deletePost: (id: number) => del(`posts`, id, ''),
	updatePost: (id: any, body: any) => put(`posts/${id}`, body, ''),
	addComment: (body: any) => post('comments', body),
}
