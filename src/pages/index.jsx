import { CSSReset } from '../components/CSSReset';
import config from '../../config.json';

import Menu from '../components/Menu';
import Header from '../components/Header';
import Timeline from '../components/Timeline';

function HomePage() {
	const style = {
		/* background: 'red' */
	};

	// console.log(config.playlists);

	return (
		<>
			<CSSReset />
			<div>
				<Menu />
				<Header
					github={config.github}
					name={config.name}
					job={config.job}
				/>
				<Timeline playlists={config.playlists} />
			</div>
		</>
	);
}

export default HomePage;

// function Menu() {
// 	return <div>Menu</div>;
// }
