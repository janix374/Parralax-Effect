import React, { useContext, useState, useEffect } from 'react';
import firebase from '../config/firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function login(email, password) {
		return firebase.auth().signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return firebase.auth().signOut();
	}

	useEffect(() => {
		const unsubscriber = firebase.auth().onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscriber;
	}, []);

	const value = {
		currentUser,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
