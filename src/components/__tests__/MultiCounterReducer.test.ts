import { describe, it, expect } from 'vitest';

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

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add':
      return {
        counters: [...state.counters, { id: 'mock-id', count: 0 }],
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

describe('MultiCounter reducer', () => {
  it('adds a new counter', () => {
    const initial: State = { counters: [] };
    const next = reducer(initial, { type: 'add' });
    expect(next.counters).toHaveLength(1);
    expect(next.counters[0].count).toBe(0);
  });

  it('increments a counter by id', () => {
    const initial: State = { counters: [{ id: '1', count: 0 }] };
    const next = reducer(initial, { type: 'increment', payload: '1' });
    expect(next.counters[0].count).toBe(1);
  });

  it('decrements a counter by id', () => {
    const initial: State = { counters: [{ id: '1', count: 5 }] };
    const next = reducer(initial, { type: 'decrement', payload: '1' });
    expect(next.counters[0].count).toBe(4);
  });

  it('removes a counter by id', () => {
    const initial: State = {
      counters: [
        { id: '1', count: 0 },
        { id: '2', count: 10 },
      ],
    };
    const next = reducer(initial, { type: 'remove', payload: '1' });
    expect(next.counters).toHaveLength(1);
    expect(next.counters[0].id).toBe('2');
  });
});
