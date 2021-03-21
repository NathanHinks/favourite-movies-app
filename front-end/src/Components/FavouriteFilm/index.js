import React from 'react';
import Button from '../Buttons/Button';
import StarRating from '../StarRating';
import { favouriteFilm } from './FavouriteFilm.module.css';

function FavouriteFilm({ film, deleteFilm }) {
	return (
		<div className={`flexContainer ${favouriteFilm}`}>
			<p>{film.title}</p>
			<StarRating currentRating={film.rating} disabled={true}/>
			<Button text='Remove' onClick={deleteFilm} />
		</div>
	);
}

export default FavouriteFilm;
