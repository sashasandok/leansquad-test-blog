import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFetch = (someFetchActionCreator: Function) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(someFetchActionCreator())
	}, [dispatch, someFetchActionCreator])
}
