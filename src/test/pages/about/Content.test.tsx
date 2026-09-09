import { render, screen } from '@testing-library/react';
import { Content } from '../../../pages/about';
import { ABOUT_CONTENT } from "../../../models";

describe('Content component', () => {
  it('should render the content correctly', () => {
    render(<Content />);
    
    expect(screen.getByText(ABOUT_CONTENT.eyebrow)).toBeInTheDocument();
    expect(screen.getByText(ABOUT_CONTENT.title)).toBeInTheDocument();
    
    ABOUT_CONTENT.paragraphs.forEach(paragraph => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
    
    const button = screen.getByRole('link', { name: ABOUT_CONTENT.ctaLabel });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', ABOUT_CONTENT.ctaHref);
  });
});
