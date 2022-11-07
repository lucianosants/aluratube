import { StyledFavorites } from './styles';

export default function Favorites({ favorites }) {
	console.log(favorites);

	return (
		<StyledFavorites>
			<h4>Aluratubes Favoritos</h4>
			<div className='favorite__content'>
				{favorites.map((favorite) => (
					<a
						href={`https://github.com/${favorite.github}`}
						target='_blank'
						className='favorite__content--infos'
						key={favorite.id}
					>
						<img
							src={`https://github.com/${favorite.github}.png`}
							alt=''
						/>
						<p>@{favorite.github}</p>
					</a>
				))}
			</div>
		</StyledFavorites>
	);
}
