export default function Frontend({ frontend, searchValue }) {
	return (
		<section>
			<h2>Back-End</h2>
			<div>
				{frontend
					.filter((video) => {
						const titleNormalized = video.title.toLowerCase();
						const searchValueNormalized = searchValue.toLowerCase();

						return titleNormalized.includes(searchValueNormalized);
					})
					.map((video) => {
						return (
							<a href={video.url}>
								<img src={video.thumb} alt={video.title} />
								<span>{video.title}</span>
							</a>
						);
					})}
			</div>
		</section>
	);
}
