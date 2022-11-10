import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { CSSReset } from '../components/CSSReset';

import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';

import ProviderWrapper, { ColorModeContext } from '../context/ColorModeContext';
import RegisterVideo from '../components/RegisterVideo';

function MyApp({ Component, pageProps }) {
	const context = useContext(ColorModeContext);
	const themeActive = { light, dark };

	return (
		<ThemeProvider theme={themeActive[context.mode]}>
			<CSSReset />
			<Component {...pageProps} />
			<RegisterVideo />
		</ThemeProvider>
	);
}

export default function _App(props) {
	return (
		<ProviderWrapper>
			<MyApp {...props} />
		</ProviderWrapper>
	);
}
