import useMoviesApi from '../../Hooks/useMoviesApi';
import FavouriteFilm from '../FavouriteFilm';
import { filmList, favouriteFilmsHeading } from './FavouritesList.module.css';

function FavouritesList() {
	const { favouriteFilms, deleteFilm } = useMoviesApi();

	return (
		<div className={`container ${filmList}`}>
			<h2 className={favouriteFilmsHeading}>My Favourite Films:</h2>
			{favouriteFilms &&
				favouriteFilms.map((film, i) => (
					<FavouriteFilm
						key={i}
						film={film}
						deleteFilm={() => deleteFilm(film.id)}
					/>
				))}
		</div>
	);
}

export default FavouritesList;
