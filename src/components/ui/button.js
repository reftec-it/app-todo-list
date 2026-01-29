import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({
    type = 'button',
    text,
    title,
    fontIcon,
    iconSize,
    clickEvent,
    context,
}) {
    const contextClasses = {
        primary: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700',
        danger: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
        default: 'bg-gray-50 hover:bg-gray-100 active:bg-gray-200',
    };

    let btnContextDesign = 'cursor-pointer px-4 py-2 rounded-lg flex gap-2 items-center justify-center font-medium transition-colors';

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
            type={type}
            title={title}
            className={context && btnContextDesign}
            onClick={clickEvent || undefined}
        >
            {fontIcon && (
                <FontAwesomeIcon
                    icon={fontIcon}
                    size={iconSize ?? undefined}
                />
            )}
            {text}
        </button>
    );
}
