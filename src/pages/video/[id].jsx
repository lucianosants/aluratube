import { Link } from 'next/link';
import { useRouter } from 'next/router';

import { StyledVideoContainer } from './styles';

export default function Video() {
	const router = useRouter();

	const id = router.query.id;

	return (
		<StyledVideoContainer>
			<Link href='/'>
				<a>&larr; Voltar</a>
			</Link>
			<iframe
				src={`https://www.youtube.com/embed/${id}`}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
				allowFullscreen
			></iframe>
		</StyledVideoContainer>
	);
}
