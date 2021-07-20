import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import editPics from '../../images/edit.png';
import delPics from '../../images/delete.png';

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
						<Button>
							<Link to={`/dashboard/article/${article.id}`}>
								<img src={editPics} alt='edit' title='Edit' />
							</Link>
						</Button>
					</div>
					<div>
						<Button onClick={() => handleDelete(article.id)}>
							<img src={delPics} alt='delete' title='Delete' />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ArticleView;
