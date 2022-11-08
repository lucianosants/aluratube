import { useState } from 'react';

import config from '../../config.json';

import { CSSReset } from '../components/CSSReset';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Favorites from '../components/Favorites';

function HomePage() {
	const [filterValue, setFilterValue] = useState('');

	return (
		<>
			<CSSReset />
			<div>
				<Menu
					filterValue={filterValue}
					setFilterValue={setFilterValue}
				/>
				<Header
					github={config.github}
					name={config.name}
					job={config.job}
					bg={config.bg}
				/>
				<Timeline
					searchValue={filterValue}
					playlists={config.playlists}
				/>
				<Favorites favorites={config.favorites} />
			</div>
		</>
	);
}

export default HomePage;
