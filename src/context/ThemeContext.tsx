import { createContext, useContext, useEffect, useReducer } from "react";

export type Theme = 'light' | 'dark';

interface ThemeState {
    theme: Theme;
}

type ThemeAction = { type: 'TOGGLE_THEME' };

const ThemeContext = createContext<{
    state: ThemeState;
    toggleTheme: () => void;
}>({ state: { theme: 'light' }, toggleTheme: () => { } });

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            return state;
    }
};

const init = (): ThemeState => {
    const stored = localStorage.getItem('theme');
    return { theme: stored === 'dark' ? 'dark' : 'light' };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(themeReducer, undefined, init);

    useEffect(() => {
        localStorage.setItem('theme', state.theme);
        document.body.className = state.theme;
    }, [state.theme]);

    const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });

    return (
        <ThemeContext.Provider value={{ state, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);