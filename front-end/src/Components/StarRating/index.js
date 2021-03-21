import { filled, star, starRating } from './StarRating.module.css';

function StarRating({ currentRating, setRating, disabled}) {
	let stars = [ 1, 2, 3, 4, 5 ];

	function handleClick(value) {
		setRating(value);
	}
	

	return (
		<div className={starRating}>
			{stars.map((item, i) => (
				<span
					key={i}
					className={i < currentRating ? `${star} ${filled}` : star}
					
					onClick={() => handleClick(i + 1) }
					disabled
				>
					☆
				</span>
			))}
		</div>
	);
}

export default StarRating;
