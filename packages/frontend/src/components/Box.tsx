import * as React from "react";

interface BoxProps {
    children: React.ReactNode;
    bottomMargin?: string;
    className?: string;
}

export default function Box({ children, bottomMargin = 'mb-10', className = '' }: BoxProps) {
    return (
        <div className={`bg-base-100/100 rounded-lg p-4 text-base-content border-2 border-[#2c1810]/20 ${bottomMargin} ${className}`}>
            {children}
        </div>
    )
}