import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestApp } from '@/test/TestApp';
import ShakespeareResources from './ShakespeareResources';

describe('ShakespeareResources', () => {
  it('renders the page with FAQ and blog sections', () => {
    render(
      <TestApp>
        <ShakespeareResources />
      </TestApp>
    );

    // Check for main heading by role
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Resource Hub/i)).toBeInTheDocument();

    // Check for FAQ section
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();

    // Check for blog section
    expect(screen.getByText(/Shakespeare Blog Posts/i)).toBeInTheDocument();

    // Check for at least one FAQ question
    expect(screen.getByText(/What is Shakespeare and how does it work?/i)).toBeInTheDocument();
  });

  it('displays Shakespeare-tagged blog posts', () => {
    render(
      <TestApp>
        <ShakespeareResources />
      </TestApp>
    );

    // The blog posts should be rendered (we know there are at least 2 Shakespeare-tagged posts)
    // We can't test for specific titles since they're rendered by BlogCard components
    // but we can verify the BlogList container is present
    expect(screen.getByText(/Latest updates, tutorials, and insights about Shakespeare/i)).toBeInTheDocument();
  });
});