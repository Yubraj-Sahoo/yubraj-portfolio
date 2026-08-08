import {render, screen} from '@testing-library/react';
import {Card} from '../../../../components/common/Card';

describe('Card', () => {
    test('renders its children', () => {
        render(<Card>Portfolio content</Card>);

        expect(screen.getByText('Portfolio content')).toBeInTheDocument();
    });

    test('uses the medium size by default', () => {
        render(<Card>Content</Card>);

        expect(screen.getByText('Content').closest('.app-card')).toHaveClass('app-card--md');
    });

    test.each(['sm', 'md', 'lg'] as const)('applies the %s size variant', (size) => {
        render(<Card size={size}>Content</Card>);

        expect(screen.getByText('Content').closest('.app-card')).toHaveClass(`app-card--${size}`);
    });

    test('enables hover behavior by default', () => {
        render(<Card>Content</Card>);

        expect(screen.getByText('Content').closest('.app-card')).toHaveClass('app-card--hoverable');
    });

    test('can disable hover behavior', () => {
        render(<Card hoverable={false}>Content</Card>);

        expect(screen.getByText('Content').closest('.app-card')).not.toHaveClass('app-card--hoverable');
    });

    test('can render a semantic section element', () => {
        render(<Card as="section">Content</Card>);

        expect(screen.getByText('Content').closest('section')).toHaveClass('app-card');
    });
});
