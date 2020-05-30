export interface PostData {
	id: number
	title?: string
	body?: string
	author?: string
	comments: []
	history: any
}

export interface DetailedPostData {
	id: number
	title?: string
	body?: string
	author?: string
	comments: []
}
