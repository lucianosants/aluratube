import { useState } from 'react';

import useFetchDocument from '../hooks/useFetchDocument';

const bg = './banner.jpg';

import Menu from '../components/Menu';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Favorites from '../components/Favorites';

function HomePage() {
	const [filterValue, setFilterValue] = useState('');

	const { config: users } = useFetchDocument('user');
	const { config: games } = useFetchDocument('games');
	const { config: favorites } = useFetchDocument('favorites');
	const { config: frontend } = useFetchDocument('frontend');
	const { config: backend } = useFetchDocument('backend');

	return (
		<div>
			<Menu filterValue={filterValue} setFilterValue={setFilterValue} />
			<Header
				github={users.map((user) => user.github)}
				name={users.map((user) => user.name)}
				userName={users.map((user) => user.github)}
				job={users.map((user) => user.job)}
				bg={bg}
			/>
			<Timeline
				searchValue={filterValue}
				games={games}
				frontend={frontend}
				backend={backend}
			/>
			<Favorites favorites={favorites.map((fav) => fav)} />
		</div>
	);
}

export default HomePage;
