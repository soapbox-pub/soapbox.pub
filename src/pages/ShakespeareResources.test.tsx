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

    // Check for blog section - look for the heading
    expect(screen.getByRole('heading', { name: /Shakespeare Guides and Tutorials/i })).toBeInTheDocument();

    // Check for at least one FAQ question
    expect(screen.getByText(/What is Shakespeare and how does it work?/i)).toBeInTheDocument();
  });

  it('displays Shakespeare-resource tagged blog posts', () => {
    render(
      <TestApp>
        <ShakespeareResources />
      </TestApp>
    );

    // Check for the section heading
    expect(screen.getByRole('heading', { name: /Shakespeare Guides and Tutorials/i })).toBeInTheDocument();

    // Since there are posts with "shakespeare-resource" tag, we should see them displayed
    // We can verify by checking for the blog post titles
    expect(screen.getByText(/Debugging in Shakespeare/i)).toBeInTheDocument();
    expect(screen.getByText(/How to Prompt Better Projects/i)).toBeInTheDocument();
  });
});