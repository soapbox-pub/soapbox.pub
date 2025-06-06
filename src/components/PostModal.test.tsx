import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestApp } from '@/test/TestApp';
import { PostModal } from './PostModal';
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

describe('PostModal', () => {
  it('renders post content correctly', () => {
    render(
      <TestApp>
        <PostModal event={mockEvent} isOpen={true} onClose={() => {}} />
      </TestApp>
    );

    expect(screen.getByText('This is a test post from Soapbox!')).toBeInTheDocument();
    expect(screen.getByText('Post')).toBeInTheDocument();
  });

  it('renders quote post with quoted content in modal', () => {
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
        <PostModal event={mockQuoteEvent} isOpen={true} onClose={() => {}} />
      </TestApp>
    );

    // Should render the main content
    expect(screen.getByText(/This is my comment/)).toBeInTheDocument();
    
    // Should render the quoted post component (loading state initially)
    expect(document.querySelector('.border-l-4.border-l-blue-200')).toBeInTheDocument();
  });

  it('does not render when modal is closed', () => {
    render(
      <TestApp>
        <PostModal event={mockEvent} isOpen={false} onClose={() => {}} />
      </TestApp>
    );

    expect(screen.queryByText('This is a test post from Soapbox!')).not.toBeInTheDocument();
  });
});