import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MultiCounterStorage from '../MultiCounterStorage';

describe('MultiCounterStorage component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adds a new counter and persists to localStorage', async () => {
    render(<MultiCounterStorage />);
    fireEvent.click(screen.getByText('+Nuevo Contador'));

    const counter = await screen.findByText('0');
    expect(counter).toBeInTheDocument();

    const stored = JSON.parse(localStorage.getItem('multi-counter') || '{}');
    expect(Array.isArray(stored.counters)).toBe(true);
    expect(stored.counters.length).toBe(1);
  });

  it('loads counters from localStorage on mount', async () => {
    localStorage.setItem(
      'multi-counter',
      JSON.stringify({ counters: [{ id: '1', count: 5 }] })
    );

    render(<MultiCounterStorage />);

    const counter = await screen.findByText('5');
    expect(counter).toBeInTheDocument();
  });

  it('increments a saved counter and updates localStorage', async () => {
    localStorage.setItem(
      'multi-counter',
      JSON.stringify({ counters: [{ id: '1', count: 1 }] })
    );

    render(<MultiCounterStorage />);

    await screen.findByText('1');

    const incBtn = screen.getAllByText('+1')[0];
    fireEvent.click(incBtn);

    const updated = await screen.findByText('2');
    expect(updated).toBeInTheDocument();

    const stored = JSON.parse(localStorage.getItem('multi-counter') || '{}');
    expect(stored.counters[0].count).toBe(2);
  });
});
