import { ReactElement } from "react"; 

type Variants = "primary" | "secondary";
interface ButtonProps{
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-100 text-purple-600"
}

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "px-4 py-2",
    "lg": "px-6 py-4"
}

export const Button = ({
    variant,
    size,
    text,
    startIcon,
    endIcon,
    onClick
}: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className={`rounded-md font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]}`}
        >
            {startIcon && <span className="mr-2">{startIcon}</span>}
            {text}
            {endIcon && <span className="ml-2">{endIcon}</span>}
        </button>
    );
}
