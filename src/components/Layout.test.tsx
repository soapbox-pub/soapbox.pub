import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestApp } from '@/test/TestApp';
import { Layout } from './Layout';

describe('Layout', () => {
  it('renders children with navigation and footer', () => {
    render(
      <TestApp>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </TestApp>
    );

    // Check that the content is rendered
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    
    // Check that navigation is present (look for the Soapbox logo)
    expect(screen.getAllByText('Soapbox')).toHaveLength(2); // One in nav, one in footer
    
    // Check that footer is present (look for footer text)
    expect(screen.getByText(/Software for the next generation of social media/)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <TestApp>
        <Layout className="custom-class">
          <div>Test Content</div>
        </Layout>
      </TestApp>
    );

    const layoutDiv = container.firstChild as HTMLElement;
    expect(layoutDiv).toHaveClass('custom-class');
  });
});