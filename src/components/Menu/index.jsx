import { Logo } from '../../../public/Logo';
import Search from './components/Search';
import ToggleButton from './components/ToggleButton';
import { StyledMenu } from './styles';

export default function Menu({ filterValue, setFilterValue, toggleTheme }) {
	return (
		<StyledMenu>
			<div>
				<Logo />
			</div>
			<Search filterValue={filterValue} setFilterValue={setFilterValue} />
			<ToggleButton toggleTheme={toggleTheme} />
		</StyledMenu>
	);
}
