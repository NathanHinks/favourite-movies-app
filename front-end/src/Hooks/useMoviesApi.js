import { useEffect, useState } from 'react';
import {BACKEND_URL} from "../dependencies"


function useMoviesApi() {
	const [ favouriteFilms, setFavouriteFilms ] = useState(null);

	async function getFilms() {
		const response = await fetch(BACKEND_URL);

		const data = await response.json();

		setFavouriteFilms(data);
	}
	useEffect(() => getFilms(), []);
	
	async function deleteFilm(id) {

		await fetch(`${BACKEND_URL}/${id}`, {method : 'DELETE'});
	}



	return {
		favouriteFilms,
		deleteFilm,
	};
}

export default useMoviesApi;
