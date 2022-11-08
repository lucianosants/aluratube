import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import config from '../../config.json';

import { CSSReset } from '../components/CSSReset';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Favorites from '../components/Favorites';

import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';

function HomePage() {
	const [filterValue, setFilterValue] = useState('');
	const [darkIsOn, setDarkIsOn] = useState(false);

	const handleToggleTheme = () => {
		!darkIsOn ? setDarkIsOn(true) : setDarkIsOn(false);
	};

	return (
		<>
			<ThemeProvider theme={darkIsOn ? dark : light}>
				<CSSReset />
				<div>
					<Menu
						filterValue={filterValue}
						setFilterValue={setFilterValue}
						toggleTheme={() => handleToggleTheme()}
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
			</ThemeProvider>
		</>
	);
}

export default HomePage;
