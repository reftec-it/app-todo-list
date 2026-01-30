import { React, useRef } from 'react';
import { animate } from 'animejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({
    type = 'button',
    text,
    title,
    fontIcon,
    iconSize,
    onClick,
    context,
    cursorClass = 'cursor-pointer',
    className,
    iconColor,
}) {
    const contextClasses = {
        primary: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700',
        danger: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
        default: 'bg-gray-50 hover:bg-gray-100 active:bg-gray-200',
    };

    const btnRef = useRef(null);

    const handleClick = (e) => {
        animate(btnRef.current, {
            scale: [1, 0.85, 1],
            duration: 250,
            easing: 'easeInOutQuad'
        })
        onClick?.(e);
    }

    let btnContextDesign = `${text ? 'px-4 py-2' : 'px-2 py-2'} ${cursorClass ?? ''} ${className ?? ''} rounded-lg flex gap-2 items-center justify-center font-medium transition-colors`;

    switch (context) {
        case 'primary':
            btnContextDesign = `${btnContextDesign} ${contextClasses.primary}`
            break;
        case 'danger':
            btnContextDesign = `${btnContextDesign} ${contextClasses.danger}`
            break;
        default:
            btnContextDesign = `${btnContextDesign} ${contextClasses.default}`
            break;
    }

    return (
        <button
            ref={btnRef}
            type={type}
            title={title}
            className={context && btnContextDesign}
            onClick={handleClick}
        >
            {fontIcon && (
                <FontAwesomeIcon
                    icon={fontIcon}
                    size={iconSize ?? undefined}
                    color={iconColor ?? undefined}
                />
            )}
            {text}
        </button>
    );
}
