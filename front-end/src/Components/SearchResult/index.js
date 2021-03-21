import { useState } from 'react';
import useStarRating from '../../Hooks/useStarRating';
import Button from '../Buttons/Button';
import StarRating from '../StarRating';
import { searchResult } from './SearchResult.module.css';

function SearchResult({ name }) {
	const {rating, setRating, onClick} = useStarRating();

	return (
		<div className={`flexContainer ${searchResult}`}>
			<span>{name}</span>
			<StarRating currentRating={rating} setRating={setRating} />
			<Button text='add to list' onClick={() => onClick(name, rating)} />
		</div>
	);
}

export default SearchResult;
