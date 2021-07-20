import React, { useState, useEffect } from 'react';
import ArticleView from './ArticleView';
import { Link } from 'react-router-dom';
import LoadingComponent from '../common/LoadingComponent';
import articlePics from '../../images/article.png';
import { Button } from '@material-ui/core';
import firebase from '../../config/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router';

const db = firebase.firestore();

const AdminDashboard = () => {
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState('');
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	const getMyArticles = () => {
		db.collection('Articles')
			.limit(10)
			.get()
			.then((docs) => {
				if (!docs.empty) {
					let allArticles = [];
					docs.forEach((doc) => {
						const article = {
							id: doc.id,
							...doc.data(),
						};
						allArticles.push(article);
					});
					setArticles(allArticles);
				}
			});
	};

	const handleDelete = (id) => {
		db.collection('Articles')
			.doc(id)
			.delete()
			.then(() => {
				const newArticles = articles.filter((item) => item.id !== id);
				setArticles(newArticles);
				console.log('Document successfully deleted!');
			})
			.catch((error) => {
				console.error('Error removing document: ', error);
			});
	};

	const handleLogOut = async () => {
		setError('');
		try {
			await logout();
			history.push('/');
		} catch (error) {
			setError('Fail to log out');
		}
	};

	useEffect(() => {
		getMyArticles();
	}, []);

	console.log(currentUser);

	return (
		<div className='dasboard-sky'>
			<div className='profile-link'>
				<Button color='primary' onClick={handleLogOut}>
					LogOut
				</Button>
			</div>
			<div className='article-link'>
				<Button>
					<Link to={`/dashboard/article/`}>
						<img src={articlePics} alt='New Article' title='New Article' />
					</Link>
				</Button>
			</div>

			<div className='dashboard-container'>
				{articles.length ? (
					articles.map((item) => {
						return (
							<div key={item.id}>
								<ArticleView article={item} handleDelete={handleDelete} />
							</div>
						);
					})
				) : (
					<LoadingComponent />
				)}
			</div>
		</div>
	);
};

export default AdminDashboard;
