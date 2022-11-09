import Link from 'next/link';
import { StyledTimeline } from './styles';

export default function Timeline({ searchValue, ...props }) {
	const playlistNames = Object.keys(props.playlists);

	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = props.playlists[playlistName];

				return (
					<section key={playlistName}>
						<h2>{playlistName}</h2>
						<div>
							{videos
								.filter((video) => {
									const titleNormalized =
										video.title.toLowerCase();
									const searchValueNormalized =
										searchValue.toLowerCase();

									return titleNormalized.includes(
										searchValueNormalized
									);
								})
								.map((video) => {
									return (
										<Link
											key={video.url}
											href={`/video/${video.embed}`}
										>
											<a>
												<img src={video.thumb} />
												<span>{video.title}</span>
											</a>
										</Link>
									);
								})}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}
