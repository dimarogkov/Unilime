import type { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

export const Title: FC<Props> = ({ className = '', ...props }) => {
    return <h1 {...props} className={`relative font-semibold text-2xl ${className}`} />;
};
