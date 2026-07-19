import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestApp } from '@/test/TestApp';
import Index from './Index';

describe('Index (Home Page)', () => {
  it('renders the main hero content', () => {
    render(
      <TestApp>
        <Index />
      </TestApp>
    );

    expect(screen.getByText(/Taking back/)).toBeInTheDocument();
    expect(screen.getByText(/the internet\./)).toBeInTheDocument();
  });
});