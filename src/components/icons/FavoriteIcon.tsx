import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string; 
}

const FavoriteIcon: React.FC<IconProps> = ({ 
    size = "1rem", 
    color = "#3789BC", 
    ...props 
}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 24"
        fill="currentColor"
        width={size}
        height={typeof size === 'number' ? size * 1.85 : size}
        style={{ color }}
        {...props}
    >
        <path 
            fill="currentColor" 
            d="M0 2.089v21.912l6.546-6.26l6.545 6.26V2.089A2.11 2.11 0 0 0 10.982 0l-.077.001h.004h-8.726L2.11 0A2.11 2.11 0 0 0 .001 2.088z"/>
    </svg>
);

export default FavoriteIcon;