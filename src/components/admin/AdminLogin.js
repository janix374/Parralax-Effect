import React, { useRef, useState, useEffect } from 'react';
import {
	Button,
	Grid,
	TextField,
	FormGroup,
	Container,
	Input,
	InputLabel,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router';
import LoadingComponent from './../common/LoadingComponent';

const useStyles = makeStyles({
	clearSky: {
		background: 'linear-gradient(to bottom, #67d1fb 0%, #9be2fe 100%)',
		height: '100vh',
		width: '100%',
		padding: '100px 0 0 0',
	},
});

const AdminLogin = () => {
	const classes = useStyles();
	const { login } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setloading] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const history = useHistory();

	useEffect(() => {
		if (submitting) {
			history.push('/dashboard');
		}
	}, [submitting]);

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	async function handleSubmit(e) {
		e.preventDefault();
		console.log(email);
		console.log(password);
		try {
			setError('');
			setloading(true);
			await login(email, password);
			setSubmitting(true);
		} catch (error) {
			setError('Fail to log in');
		}

		setloading(false);
	}

	return (
		<div className={classes.clearSky}>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={2} md={3}></Grid>
					<Grid item xs={8} md={6}>
						{error && <Alert severity='error'>{error}</Alert>}
						<form onSubmit={handleSubmit}>
							<h2>Log in</h2>
							<p>
								email: airship@yahoo <br />
								password: 123456
							</p>
							<FormGroup>
								<TextField
									label='Email'
									name='email'
									type='email'
									onChange={handleEmail}
									value={email}
								/>
								<TextField
									label='Password'
									name='password'
									type='password'
									onChange={handlePassword}
									value={password}
								/>
							</FormGroup>
							<Button type='submit' variant='contained' color='primary'>
								Log in
							</Button>
						</form>
					</Grid>
					<Grid item xs={2} md={3}></Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default AdminLogin;
