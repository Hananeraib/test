import React, { useEffect, useState } from 'react';
// import getPosts from './axios';
import './App.css';
import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';

function App() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});
	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://vps-d2235e42.vps.ovh.net:8080/api/`;
		// const apiUrl = `backend:8000/api`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);




	// useEffect(() => {
	// 	setAppState({ loading: true });
	// 	getPosts()
	// 	  .then(posts => {
	// 		setAppState({ loading: false, posts });
	// 	  })
	// 	  .catch(error => {
	// 		console.log(error);
	// 		setAppState({ loading: false, posts: null });
	// 	  });
	//   }, []);


	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default App;
