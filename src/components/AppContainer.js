import React from 'react';
import Sky from './mainfile/Sky';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminDashboard from './admin/AdminDashboard';
import ArticleCreate from './admin/ArticleCreate';

const AppContainer = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Sky />
					</Route>
					<Route path='/dashboard' exact>
						<AdminDashboard />
					</Route>
					<Route path='/dashboard/article' exact>
						<ArticleCreate />
					</Route>
					<Route path='/dashboard/article/:id' exact>
						<ArticleCreate />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default AppContainer;
