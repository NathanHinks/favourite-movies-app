import { useEffect, useState } from 'react';
import { API_REQUEST_OPTIONS, API_URL } from '../dependencies';

function useSearchForMovies(search) {
	const searchString = search.replace(' ', '%20');
	const [ data, setData ] = useState([]);

	async function getData() {
		const response = await fetch(
			`${API_URL}${searchString}`,
			API_REQUEST_OPTIONS
		);
		const resData = await response.json();

		setData(resData.d);
	}
	useEffect(() => getData(), [ search ]);

	return data;
}

export default useSearchForMovies;
