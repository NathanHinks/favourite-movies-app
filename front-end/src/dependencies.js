const BACKEND_URL = 'https://localhost:5001/movies';

const API_URL = 'https://imdb8.p.rapidapi.com/auto-complete?q=';
const API_REQUEST_OPTIONS = {
	method   : 'GET',
	datatype : 'jsonp',
	headers  : {
		'x-rapidapi-key'  : process.env.REACT_APP_X_RAPID_API_KEY,
		'x-rapidapi-host' : process.env.REACT_APP_X_RAPID_API_HOST,
	},
};

export { BACKEND_URL, API_URL, API_REQUEST_OPTIONS };
