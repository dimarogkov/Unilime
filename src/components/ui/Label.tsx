import type { FC } from 'react';

type Props = {
    text: string;
    className?: string;
};

export const Label: FC<Props> = ({ text, className = '' }) => {
    return <span className={`relative rounded px-2.5 py-1.5 text-lime-400 bg-[#191919] ${className}`}>{text}</span>;
};
