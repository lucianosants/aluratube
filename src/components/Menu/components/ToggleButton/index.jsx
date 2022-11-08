import { StyledToggleTheme } from './styles';

export default function ToggleButton({ toggleTheme }) {
	return <StyledToggleTheme onClick={toggleTheme}></StyledToggleTheme>;
}
