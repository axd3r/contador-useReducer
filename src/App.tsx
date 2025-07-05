import Counter from "./components/Counter"
import MultiCounter from "./components/MultiCounter"
import MultiCounterStorage from "./components/MultiCounterStorage"
import { useTheme } from "./context/ThemeContext";

function App() {
  const { state, toggleTheme } = useTheme();

  return (

    <div>
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <button onClick={toggleTheme}>
          Cambiar a {state.theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      <h2 style={{ textAlign: 'center' }}>Contador con useReducer + TypeScript</h2>
      <Counter />
      <MultiCounter />
      <MultiCounterStorage />
    </div>
  )
}

export default App
