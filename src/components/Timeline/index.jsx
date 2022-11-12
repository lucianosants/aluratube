import Backend from './components/Backend';
import { StyledTimeline } from './styles';

export default function Timeline({ searchValue, frontend, games, backend }) {
	return (
		<StyledTimeline>
			<Backend title='Games' content={games} searchValue={searchValue} />

			<Backend
				title='Front-End'
				content={frontend}
				searchValue={searchValue}
			/>

			<Backend
				title='Back-End'
				content={backend}
				searchValue={searchValue}
			/>
		</StyledTimeline>
	);
}
