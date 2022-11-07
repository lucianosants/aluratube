import { StyledHeader } from './styles';

export default function Header({ github, name, job }) {
	return (
		<StyledHeader>
			<div className='user__banner'></div>
			<section className='user__info'>
				<img src={`https://github.com/${github}.png`} />

				<div>
					<h2>{name}</h2>
					<p>{job}</p>
				</div>
			</section>
		</StyledHeader>
	);
}
