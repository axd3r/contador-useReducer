import { useEffect, useReducer } from "react";

interface Counter {
    id: string;
    count: number;
}

interface State {
    counters: Counter[];
}

type Action =
    | { type: 'add' }
    | { type: 'remove'; payload: string }
    | { type: 'increment'; payload: string }
    | { type: 'decrement'; payload: string };


function counterReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add':
            return {
                counters: [...state.counters, { id: crypto.randomUUID(), count: 0 }],
            };
        case 'remove':
            return {
                counters: state.counters.filter(c => c.id !== action.payload),
            };
        case 'increment':
            return {
                counters: state.counters.map(c =>
                    c.id === action.payload ? { ...c, count: c.count + 1 } : c
                ),
            };
        case 'decrement':
            return {
                counters: state.counters.map(c =>
                    c.id === action.payload ? { ...c, count: c.count - 1 } : c
                ),
            };
        default:
            return state;
    }
}

function init(): State {
    const saved = localStorage.getItem('multi-counter');
    return saved ? JSON.parse(saved) : { counters: [] };
}

export default function MultiCounterStorage() {
    const [state, dispatch] = useReducer(counterReducer, undefined, init);

    useEffect(() => {
        localStorage.setItem('multi-counter', JSON.stringify(state));
    }, [state]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Múltiples Contadores con Persitencia de Datos</h2>
            <button onClick={() => dispatch({ type: 'add' })}>+Nuevo Contador</button>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                {state.counters.map(counter => (
                    <div key={counter.id} style={{ border: '1px solid #ccc', margin: '0.5rem', padding: '1rem', borderRadius: '0.5rem' }}>
                        <h3>{counter.count}</h3>
                        <h4>ID: {counter.id}</h4>
                        <button onClick={() => dispatch({ type: 'increment', payload: counter.id })}>+1</button>
                        <button onClick={() => dispatch({ type: 'decrement', payload: counter.id })}>-1</button>
                        <button onClick={() => dispatch({ type: 'remove', payload: counter.id })}>🗑️</button>
                    </div>
                ))}
            </div>
        </div>
    );
}