import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string; 
}

const LocationIcon: React.FC<IconProps> = ({ 
    size = "1rem",
    color = "#3789BC", 
    ...props 
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill="currentColor"
        width={size}
        height={size}
        style={{ color }}
        {...props}
    >
        <path 
            fill="currentColor" 
            d="M128 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.17 83.41 134.55a8 8 0 0 0 9.18 0C136 236.17 216 179.3 216 104a88.1 88.1 0 0 0-88-88m0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32"/>
    </svg>
);

export default LocationIcon;