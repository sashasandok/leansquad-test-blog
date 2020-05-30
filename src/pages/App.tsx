import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostsListPage from './PostsListPage/PostsListPage'
import DetailedPostPage from './DetailedPostPage/DetailedPostPage'
import CreateFormPage from './CreateFormPage/CreateFormPage'
import UpdateFormPage from './UpdateFormPage/UpdateFormPage'
import NotFound from '../components/NotFound/NotFound'

import './App.css'

const App: React.FC = () => {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/" component={PostsListPage} />
					<Route exact path="/posts/:postId" component={DetailedPostPage} />
					<Route exact path="/create" component={CreateFormPage} />
					<Route exact path="/update/:postId" component={UpdateFormPage} />
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
