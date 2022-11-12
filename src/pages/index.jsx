import { useEffect, useState } from 'react';

import config from '../../config.json';
import useFetchDocument from '../hooks/useFetchDocument';

import Menu from '../components/Menu';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Favorites from '../components/Favorites';
import videoService from '../services/videoService';

function HomePage() {
	const [filterValue, setFilterValue] = useState('');
	const [playlists, setPlaylists] = useState({});

	const service = videoService();
	const { config: user } = useFetchDocument('user');
	const { config: favorites } = useFetchDocument('favorites');

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
				github={user.map((doc) => doc.github)}
				name={user.map((doc) => doc.name)}
				userName={user.map((doc) => doc.github)}
				job={user.map((doc) => doc.job)}
				bg={config.bg}
			/>
			<Timeline searchValue={filterValue} playlists={playlists} />
			<Favorites favorites={favorites.map((fav) => fav)} />
		</div>
	);
}

export default HomePage;
