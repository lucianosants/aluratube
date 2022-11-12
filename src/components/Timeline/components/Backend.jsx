export default function Section({ title, content, searchValue }) {
	return (
		<section>
			<h2>{title}</h2>
			<div>
				{content
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
