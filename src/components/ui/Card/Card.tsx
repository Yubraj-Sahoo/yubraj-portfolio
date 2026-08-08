import type {ReactNode} from 'react';
import './Card.css';

interface CardProps {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    hoverable?: boolean;
    as?: 'article' | 'div' | 'section';
    className?: string;
}

/** A reusable content container with configurable size and hover behavior. */
export const Card = ({
    children,
    size = 'md',
    hoverable = true,
    as: Component = 'article',
    className = '',
}: CardProps) => (
    <Component className={`app-card app-card--${size} ${hoverable ? 'app-card--hoverable' : ''} ${className}`.trim()}>
        {children}
    </Component>
);
