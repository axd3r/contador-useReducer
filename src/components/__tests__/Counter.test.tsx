import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';
import { describe, it, expect } from 'vitest';

describe('Counter component', () => {
  it('renders with initial count 0', () => {
    render(<Counter />);
    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
  });

  it('increments count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
  });

  it('decrements count', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('Contador: -1')).toBeInTheDocument();
  });
});
