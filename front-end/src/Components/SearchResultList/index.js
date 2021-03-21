import useSearchForMovies from '../../Hooks/useSearchForMovies';
import SearchResult from '../SearchResult';

function SearchResultList({ search }) {
	const data = useSearchForMovies(search);

	return (
		data && data.map((movie, i) => <SearchResult key={i} name={movie.l} />)
	);
}

export default SearchResultList;
