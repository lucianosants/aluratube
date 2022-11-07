import { StyledTimeline } from './styles';

export default function Timeline({ playlists }) {
	const playlistNames = Object.keys(playlists);

	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = playlists[playlistName];

				// console.log(videos);

				return (
					<section key={playlistName}>
						<h2>{playlistName}</h2>
						<div>
							{videos.map((video) => {
								return (
									<a href={video.url}>
										<img src={video.thumb} />
										<span>{video.title}</span>
									</a>
								);
							})}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}
