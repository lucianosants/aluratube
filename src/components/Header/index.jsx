import { StyledHeader, StyledUserBanner, StyledUserInfo } from './styles';

export default function Header({ github, name, job, bg }) {
	return (
		<StyledHeader>
			<StyledUserBanner bg={bg}></StyledUserBanner>
			<StyledUserInfo>
				<img src={`https://github.com/${github}.png`} />

				<div>
					<h2>{name}</h2>
					<p>{job}</p>
				</div>
			</StyledUserInfo>
		</StyledHeader>
	);
}
