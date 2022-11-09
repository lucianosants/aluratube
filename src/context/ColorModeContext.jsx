import { createContext, useState } from 'react';

export const ColorModeContext = createContext({
	mode: '',
	setMode: () => alert('Voce precisa me configurar primeiro'),
	toggleTheme: () => alert('Voce precisa me configurar primeiro'),
});

export function ColorModeProvider({ children, initialMode }) {
	const [mode, setMode] = useState(initialMode);

	const handleToggleTheme = () => {
		if (mode === 'dark') setMode('light');
		if (mode === 'light') setMode('dark');
	};

	return (
		<ColorModeContext.Provider
			value={{
				mode: mode,
				setMode: setMode,
				toggleTheme: handleToggleTheme,
			}}
		>
			{children}
		</ColorModeContext.Provider>
	);
}

export default function ProviderWrapper({ children }) {
	return (
		<ColorModeProvider initialMode={'light'}>{children}</ColorModeProvider>
	);
}
