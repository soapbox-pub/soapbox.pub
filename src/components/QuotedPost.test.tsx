import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestApp } from '@/test/TestApp';
import { QuotedPost } from './QuotedPost';

describe('QuotedPost', () => {
  it('renders loading state initially', () => {
    const qTag = ['q', 'test-event-id', 'wss://relay.example.com', 'test-pubkey'];
    
    render(
      <TestApp>
        <QuotedPost qTag={qTag} />
      </TestApp>
    );

    // Should show skeleton loading state
    expect(document.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('renders error state when event ID is missing', () => {
    const qTag = ['q', '', '', ''];
    
    render(
      <TestApp>
        <QuotedPost qTag={qTag} />
      </TestApp>
    );

    expect(screen.getByText('Quoted post not found')).toBeInTheDocument();
  });
});