import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { TestApp } from '@/test/TestApp';
import { TeamFollowPack } from './TeamFollowPack';

describe('TeamFollowPack', () => {
  it('renders loading state initially', () => {
    const { container } = render(
      <TestApp>
        <TeamFollowPack naddr="naddr1qvzqqqyckypzpyexz3t34l966ngh5xg7u2q788hthdqmj0av3lv8s2tz9t43zt6dqqxxkdrsx4mnqm3jxfeh2ess5pyrw" />
      </TestApp>
    );

    // Should show loading skeletons
    const skeletons = container.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders with custom className', () => {
    const { container } = render(
      <TestApp>
        <TeamFollowPack 
          naddr="naddr1qvzqqqyckypzpyexz3t34l966ngh5xg7u2q788hthdqmj0av3lv8s2tz9t43zt6dqqxxkdrsx4mnqm3jxfeh2ess5pyrw" 
          className="custom-class" 
        />
      </TestApp>
    );

    const element = container.querySelector('.custom-class');
    expect(element).toBeInTheDocument();
  });
});