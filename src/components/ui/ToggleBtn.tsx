import { useEffect, useState, type FC, type ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    className?: string;
}

export const ToggleBtn: FC<Props> = ({ isActive: isToggleBtnActive = false, className = '', ...props }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(isToggleBtnActive);
    }, [isToggleBtnActive]);

    return (
        <button
            {...props}
            type='button'
            onClick={() => setIsActive((isActive) => !isActive)}
            className={cn(
                `relative w-12 h-[26px] rounded-full p-0.5 border cursor-pointer transition-colors duration-300 ${className}`,
                {
                    'border-gray-300': !isActive,
                    'border-lime-500': isActive,
                }
            )}
        >
            <span
                className={cn('relative block size-5 rounded-full transition-all duration-300', {
                    'translate-x-[calc(100%+2px)] bg-lime-500': isActive,
                    'translate-x-0 bg-gray-300': !isActive,
                })}
            />
        </button>
    );
};
