import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase';
import ArticleView from './ArticleView';
import { Link } from 'react-router-dom';

const db = firebase.firestore();

const Dashboard = () => {
	const [articles, setArticles] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

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
					setIsLoaded(true);
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

	useEffect(() => {
		getMyArticles();
	}, []);

	console.log(articles);

	return (
		<div className='dasboard-sky'>
			<Link to={`/dashboard/article/`}>link</Link>
			<div className='dashboard-container'>
				{articles.map((item) => {
					return (
						<div key={item.id}>
							<ArticleView article={item} handleDelete={handleDelete} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dashboard;
