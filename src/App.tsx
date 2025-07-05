import { useTheme } from "./context/ThemeContext";
import AppRouter from "./router/Router";

function App() {
  const { state, toggleTheme } = useTheme();

  return (

    <div>
      <div style={{ textAlign: 'right', padding: '1rem' }}>
        <button onClick={toggleTheme}>
          Cambiar a {state.theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      <AppRouter />
    </div>
  );
}

export default App;
