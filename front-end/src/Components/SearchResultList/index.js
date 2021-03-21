import SearchResult from '../SearchResult';
import mockData from "../../mockData";

function SearchResultList({ search }) {
	const data = mockData;
	//const data = useSearchForMovies(search);

	return (
		data && data.map((movie, i) => <SearchResult key={i} name={movie.l} />)
	);
}

export default SearchResultList;
