import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import Response from './components/Response/Response';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
	
	const [genre, setGenre] = useState('')
    const [completion, setCompletion] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = (event) => {
        event.preventDefault();
		setError(false);
		const genre = event.target.genre.value;
		
		if (!genre) {
			setError(true)
			return;
		}
		
		setGenre(genre);

		axios
			.post("http://localhost:8080/", {genre: genre})
			.then(response => setCompletion(response.data))
			.catch(error => console.log(`error: ${error}`))
    }

	return (
		<main className="App">
			<h1>Band Name Generator</h1>
			<Form
				handleSubmit={handleSubmit}
				error={error}
			/>
			<Response
				completion={completion}
			/>
			<Footer />
		</main>
	);
}

export default App;
