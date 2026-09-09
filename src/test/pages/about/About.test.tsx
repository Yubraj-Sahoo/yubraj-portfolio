import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { About } from '../../../pages/about';

// Mock the child components directly because About.tsx imports them directly
vi.mock('../../../pages/about/components/Content', () => ({
  Content: () => <div data-testid="content-mock"></div>,
}));

vi.mock('../../../pages/about/components/Statistics', () => ({
  Statistics: () => <div data-testid="statistics-mock"></div>,
}));

describe('About component', () => {
  it('should render the about section with Content and Statistics components', () => {
    const { container } = render(<About />);
    
    // Check if the main section is rendered using a more robust selector
    const aboutSection = container.querySelector('#about');
    expect(aboutSection).toBeInTheDocument();
    expect(aboutSection).toHaveAttribute('id', 'about');

    // Check if the mocked components are rendered
    expect(screen.getByTestId('content-mock')).toBeInTheDocument();
    expect(screen.getByTestId('statistics-mock')).toBeInTheDocument();
  });
});
