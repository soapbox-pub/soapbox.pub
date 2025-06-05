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

    // Check for interaction buttons by finding all buttons with "0" count
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(3); // Should have like, comment, repost, zap, and login buttons
  });
});