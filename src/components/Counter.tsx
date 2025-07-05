import { useReducer } from "react";

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'incrementBy'; payload: number };

interface State {
    count: number;
}

const initialState: State = {
    count: 0,
}

function counterReducer(state: State, action: Action): State {
    switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    case 'incrementBy':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default function Counter() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>Contador: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'incrementBy', payload: 5 })}>+5</button>
        </div>
    );
}