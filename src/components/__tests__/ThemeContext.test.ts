import { describe, it, expect } from 'vitest';
import { themeReducer, type Theme } from '../../context/ThemeContext';

describe('themeReducer', () => {
  it('toggles from light to dark', () => {
    const state: { theme: Theme } = { theme: 'light' };
    const next = themeReducer(state, { type: 'TOGGLE_THEME' });
    expect(next.theme).toBe('dark');
  });

  it('toggles from dark to light', () => {
    const state: { theme: Theme } = { theme: 'dark' };
    const next = themeReducer(state, { type: 'TOGGLE_THEME' });
    expect(next.theme).toBe('light');
  });
});
