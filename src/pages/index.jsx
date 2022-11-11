import { useEffect, useState } from 'react';

import config from '../../config.json';

import Menu from '../components/Menu';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Favorites from '../components/Favorites';
import videoService from '../services/videoService';

function HomePage() {
	const [filterValue, setFilterValue] = useState('');
	const [playlists, setPlaylists] = useState({});

	const service = videoService();

	useEffect(() => {
		service.getAllVideos().then((res) => {
			const newPlaylists = { ...playlists };
			res.data.forEach((video) => {
				if (!newPlaylists[video.playlist]) {
					newPlaylists[video.playlist] = [];
				}
				newPlaylists[video.playlist].push(video);
			});
			setPlaylists(newPlaylists);
		});
	}, []);

	return (
		<div>
			<Menu filterValue={filterValue} setFilterValue={setFilterValue} />
			<Header
				github={config.github}
				name={config.name}
				job={config.job}
				bg={config.bg}
			/>
			<Timeline searchValue={filterValue} playlists={playlists} />
			<Favorites favorites={config.favorites} />
		</div>
	);
}

export default HomePage;
