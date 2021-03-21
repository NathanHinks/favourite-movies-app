import FavouritesList from '../FavouritesList';
import SearchMovies from '../SearchMovies';
import SignOutButton from "../Buttons/SignOutButton";

import {movieApp} from "./MovieApp.module.css"

function MovieApp() {
	return (
		<div className={movieApp}>
			<SignOutButton />
			<FavouritesList />

			<SearchMovies />
		</div>
	);
}

export default MovieApp;
