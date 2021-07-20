import React, { useState, useEffect } from 'react';
import { Button, TextField, FormGroup } from '@material-ui/core';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import firebase from '../../config/firebase';
import { useHistory, useRouteMatch } from 'react-router';
import gobackPics from '../../images/goback.png';
import submitPics from '../../images/submit.png';

const db = firebase.firestore();

const ArticleCreate = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [createDate, setCrateDate] = useState(new Date());
	const [featureImage, setFeatureImage] = useState('');
	const history = useHistory();
	const match = useRouteMatch();

	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			// ['link', 'image'],
			// ['clean'],
		],
	};

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
	];

	useEffect(() => {
		if (match.params.id) {
			getArticleById(match.params.id);
		}
	}, []);

	const getArticleById = (articleId) => {
		db.collection('Articles')
			.doc(articleId)
			.get()
			.then((doc) => {
				if (doc.exists) {
					console.log(doc.data());
					setTitle(doc.data().title);
					setContent(doc.data().content);
					setFeatureImage(doc.data().featureImage);
					setCrateDate(createDate);
				} else {
					history.push('/dashboard');
				}
			});
	};

	const handleGoBack = () => {
		history.goBack();
	};

	const handleArticleTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleArticleImage = (e) => {
		setFeatureImage(e.target.value);
	};

	const handleArticleContent = (value) => {
		setContent(value);
	};

	const handleArticleSubmit = (e) => {
		e.preventDefault();
		const article = {
			title,
			content,
			createDate,
			featureImage,
		};
		if (match.params.id) {
			db.collection('Articles')
				.doc(match.params.id)
				.set(article)
				.then(() => {
					console.log('Document successfully written!');
					history.push('/dashboard');
				})
				.catch((error) => {
					console.error('Error writing document: ', error);
				});
		} else {
			db.collection('Articles')
				.add(article)
				.then((res) => {
					console.log('Document successfully written!');
					history.push('/dashboard');
				})
				.catch((err) => console.error('Error writing document: ', err));
		}
	};

	console.log(match);
	return (
		<div className='article-create-sky'>
			<div className='article-create-form-container text-center'>
				<h2>Update Blog / New Blog</h2>
				<div className='my-3'>
					<Button onClick={handleGoBack}>
						<img src={gobackPics} alt='Go Back' title='Go back' />
					</Button>
				</div>

				<form onSubmit={handleArticleSubmit}>
					<FormGroup className='article-create-form-group'>
						<TextField
							required
							id='standard-required'
							label='Article Title'
							name='title'
							onChange={handleArticleTitle}
							value={title}
						/>
					</FormGroup>

					<FormGroup className='article-create-form-group'>
						<TextField
							id='standard-required'
							label='URL image for Blog'
							name='featureImage'
							onChange={handleArticleImage}
							value={featureImage}
						/>
					</FormGroup>

					<FormGroup className='article-create-form-group'>
						<ReactQuill
							// ref={(el)=> quill=el}
							theme='snow'
							value={content}
							onChange={(e) => handleArticleContent(e)}
							modules={modules}
							formats={formats}
						/>
					</FormGroup>

					<Button type='submit'>
						<img src={submitPics} alt='submit' title='submit' />
					</Button>
				</form>
			</div>
		</div>
	);
};

export default ArticleCreate;
