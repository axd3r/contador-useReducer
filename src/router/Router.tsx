import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Counter from '../components/Counter';
import MultiCounter from '../components/MultiCounter';
import MultiCounterStorage from '../components/MultiCounterStorage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <nav style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>🏠 Inicio</Link>
        <Link to="/contador" style={{ marginRight: '1rem' }}>🧮 Contador</Link>
        <Link to="/multi" style={{ marginRight: '1rem' }}>🔢 MultiContador</Link>
        <Link to="/multi-storage">💾 Multi + Storage</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contador" element={<Counter />} />
        <Route path="/multi" element={<MultiCounter />} />
        <Route path="/multi-storage" element={<MultiCounterStorage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🧠 Proyecto: Contador con useReducer</h1>
      <p>Selecciona una demo usando los links de navegación.</p>
    </div>
  );
}
