import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const ArticleView = ({ article, handleDelete }) => {
	const date1 = article.createDate.toDate().toDateString();
	const date2 = article.createDate.toDate().toLocaleTimeString('en-US');

	return (
		<>
			<div className='article-view-card'>
				<div className='article-view-card-title'>
					<h2>{article.title}</h2>
				</div>
				<div className='article-view-card-created'>
					{date1} {date2}
				</div>
				<div className='article-view-card-content'>
					{parse(article.content)}
				</div>
				<div className='article-view-card-button'>
					<div>
						<button>
							<Link to={`/dashboard/article/${article.id}`}>Edit</Link>
						</button>
					</div>
					<div>
						<button onClick={() => handleDelete(article.id)}>DELETE</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ArticleView;
