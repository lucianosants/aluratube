import { useContext } from 'react';
import { StyledToggleTheme } from './styles';
import { ColorModeContext } from '../../../../context/ColorModeContext';

export default function DarkModeSwitch() {
	const context = useContext(ColorModeContext);

	return (
		<StyledToggleTheme>
			<input
				id='darkmode'
				type='checkbox'
				onChange={context.toggleTheme}
			/>
			<label htmlFor='darkmode' className='darkmode-switch'>
				<span>🌙</span>
				<span>☀️</span>
			</label>
		</StyledToggleTheme>
	);
}
