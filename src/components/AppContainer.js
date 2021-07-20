import React from 'react';
import Sky from './mainfile/Sky';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminDashboard from './admin/AdminDashboard';
import ArticleCreate from './admin/ArticleCreate';
import AdminLogin from '../components/admin/AdminLogin';
import AuthProvider from '../contexts/AuthContext';
import PrivateRoute from './admin/PrivateRoute';

const AppContainer = () => {
	return (
		<div>
			<Router>
				<AuthProvider>
					<Switch>
						<Route path='/' exact>
							<Sky />
						</Route>
						<PrivateRoute path='/dashboard' exact component={AdminDashboard} />
						<PrivateRoute
							path='/dashboard/article'
							exact
							component={ArticleCreate}
						/>
						<PrivateRoute
							path='/dashboard/article/:id'
							exact
							component={ArticleCreate}
						/>
						<Route path='/login' exact>
							<AdminLogin />
						</Route>
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
};

export default AppContainer;
