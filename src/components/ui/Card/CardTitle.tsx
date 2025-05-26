import type { FC, HTMLAttributes } from 'react';
import type { LucideProps } from 'lucide-react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    icon?: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
    className?: string;
}

export const CardTitle: FC<Props> = ({ icon: Icon, className = '', ...props }) => {
    return (
        <div
            {...props}
            className={`relative flex items-center gap-2 w-full font-medium text-base px-3 py-3 border-b border-gray-200 bg-gray-100 ${className}`}
        >
            {Icon && (
                <span className='flex items-center justify-center size-8 rounded bg-[#191919]'>
                    <Icon className='size-5 text-lime-500' />
                </span>
            )}

            <p>{props.children}</p>
        </div>
    );
};
