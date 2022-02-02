import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPost, setPost } from '../../redux/actions/post'
import { useFetch } from '../../hooks/useFetch'
import DetailedCard from '../../components/DetailedCard/DetailedCard'
import { DetailedPostProps } from '../../types'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const DetailedPostPage: React.FC<DetailedPostProps> = (props: any) => {
	const dispatch = useDispatch()
	const id = props.match.params.postId as number
	useFetch(() => getPost(id))
	const post = useSelector((state: any) => state.post.post)

	return (
		<>
			<Container
				textAlign="justified"
				style={{
					background: 'lightgray',
					padding: '80px 130px',
					minHeight: '92vh',
				}}
			>
				<Link to="/" onClick={() => dispatch(setPost())} style={{ fontSize: '16px' }}>
					to home
				</Link>
				<DetailedCard post={post} />
			</Container>
		</>
	)
}

export default DetailedPostPage
