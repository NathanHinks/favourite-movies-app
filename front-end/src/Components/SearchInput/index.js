import { useState } from 'react';

import {searchInput} from "./SearchInput.module.css";

function SearchInput({ setSearch }) {
	const [ inputValue, setInputValue ] = useState("");

	let searchTimeOut = null;

	function onChange(e) {
        setInputValue(e.target.value);

		clearTimeout(searchTimeOut);
		// update search state after .5s

        searchTimeOut = setTimeout(function() {
			setSearch(e.target.value);
		}, 500);
	}

	return <input className={searchInput} placeholder="search for a movie" type='text' value={inputValue} onChange={(e) => onChange(e)} />;
}

export default SearchInput;
