import type { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
}

export const RoleLabel: FC<Props> = ({ className = '', ...props }) => {
    return <span {...props} className={`relative rounded px-2.5 py-1.5 text-lime-400 bg-[#191919] ${className}`} />;
};
