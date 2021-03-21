import { useState } from 'react';
import SearchInput from '../SearchInput';
import SearchResultList from '../SearchResultList';

import {searchMovies} from "./SearchMovies.module.css";

function SearchMovies() {
	const [ search, setSearch ] = useState("test");

	return (
		<div className={`container ${searchMovies}`}>
			<SearchInput setSearch={setSearch} />
			<SearchResultList search={search} />
		</div>
	);
}

export default SearchMovies;
