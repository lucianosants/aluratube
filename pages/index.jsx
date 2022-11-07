import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';

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
