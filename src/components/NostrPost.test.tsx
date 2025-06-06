import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestApp } from '@/test/TestApp';
import { NostrPost } from './NostrPost';
import type { NostrEvent } from '@nostrify/nostrify';

const mockEvent: NostrEvent = {
  id: 'test-id',
  pubkey: '8f8a7ec43b77d876a3b4441b6b2186750d07f5b59945a6c4df20c15e5c8e4ae3',
  created_at: Math.floor(Date.now() / 1000),
  kind: 1,
  tags: [],
  content: 'This is a test post from Soapbox!',
  sig: 'test-signature'
};

describe('NostrPost', () => {
  it('renders post content correctly', () => {
    render(
      <TestApp>
        <NostrPost event={mockEvent} />
      </TestApp>
    );

    expect(screen.getByText('This is a test post from Soapbox!')).toBeInTheDocument();
    expect(screen.getByText('Soapbox')).toBeInTheDocument();
  });

  it('shows interaction buttons', () => {
    render(
      <TestApp>
        <NostrPost event={mockEvent} />
      </TestApp>
    );

    // Check that the component renders without crashing
    expect(screen.getByText('This is a test post from Soapbox!')).toBeInTheDocument();
    
    // Check for at least the "More" button which should always be present
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it('renders a quote post with quoted content', () => {
    const mockQuoteEvent: NostrEvent = {
      id: 'quote-id',
      pubkey: '8f8a7ec43b77d876a3b4441b6b2186750d07f5b59945a6c4df20c15e5c8e4ae3',
      created_at: Math.floor(Date.now() / 1000),
      kind: 1,
      tags: [['q', 'quoted-event-id', 'wss://relay.example.com', 'quoted-pubkey']],
      content: 'This is my comment on nostr:note1abc123...',
      sig: 'test-sig'
    };

    render(
      <TestApp>
        <NostrPost event={mockQuoteEvent} />
      </TestApp>
    );

    // Should render the main content
    expect(screen.getByText(/This is my comment/)).toBeInTheDocument();
    
    // Should render the quoted post component (loading state initially)
    expect(document.querySelector('.border-l-4.border-l-blue-200')).toBeInTheDocument();
  });
});