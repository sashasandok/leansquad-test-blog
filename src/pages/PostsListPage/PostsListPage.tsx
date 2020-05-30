import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/post'
import { useFetch } from '../../hooks/useFetch'
import CardList from '../../components/CardList/CardList'
import { PostProps } from '../../types'
import { Container, Button } from 'semantic-ui-react'

const PostsListPage: React.FC<PostProps> = (props: any) => {
	useFetch(getPosts)

	const posts = useSelector((state: any) => state.post.posts)

	return (
		<>
			<Link to="create" style={{ marginBottom: '20px' }}>
				<Button basic color="blue">
					Create post
				</Button>
			</Link>
			<Container
				textAlign="justified"
				style={{
					background: 'white',
					padding: '30px',
					minHeight: '70vh',
				}}
			>
				<CardList posts={posts} />
			</Container>
		</>
	)
}

export default PostsListPage
