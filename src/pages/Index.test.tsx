import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestApp } from '@/test/TestApp';
import Index from './Index';

describe('Index (Home Page)', () => {
  it('displays the featured blog post', () => {
    render(
      <TestApp>
        <Index />
      </TestApp>
    );

    // Check that the featured post section is displayed
    expect(screen.getByText('✨ Featured from Our Blog')).toBeInTheDocument();
    
    // Check that the Shakespeare 1-week update blog post (featured post) is displayed
    expect(screen.getByText('🎭 Shakespeare 1 Week Update - Amazing Community Projects')).toBeInTheDocument();
    expect(screen.getByText('by Soapbox Team')).toBeInTheDocument();
  });

  it('renders the main hero content', () => {
    render(
      <TestApp>
        <Index />
      </TestApp>
    );

    expect(screen.getByText('Build Your')).toBeInTheDocument();
    expect(screen.getByText('🚀 Build the Decentralized Future')).toBeInTheDocument();
  });
});