import type { FC } from 'react';

type Props = {
    text: string;
    className?: string;
};

export const Title: FC<Props> = ({ text, className = '' }) => {
    return <h1 className={`relative font-semibold text-2xl ${className}`}>{text}</h1>;
};
