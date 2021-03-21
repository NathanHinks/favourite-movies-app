import { useState } from 'react';

function useStarRating() {
	const [ rating, setRating ] = useState(0);

	function onClick(movieName, movieRating) {
		const movieToAdd = {
			Title  : movieName,
			Rating : movieRating,
		};

		fetch('https://localhost:5001/movies', {
			method  : 'POST',
			body    : JSON.stringify(movieToAdd),
			headers : { 'Content-type': 'application/json; charset=UTF-8' },
		});

		setRating(0);
	}

    return {
        rating: rating,
        setRating: setRating,
        onClick: onClick
    }
}

export default useStarRating;
