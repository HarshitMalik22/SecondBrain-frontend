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
    "sm": "px-3 py-1 text-sm",
    "md": "px-4 py-2 text-base",
    "lg": "px-6 py-3 text-lg"
}

export const Button = (props: ButtonProps) => {
    const { variant, size, text, startIcon, endIcon, onClick } = props;
    return (
        <button 
            className={`rounded-md font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]}`}
            onClick={onClick}
        >
            {startIcon && <span className="mr-2">{startIcon}</span>}
            {text}
            {endIcon && <span className="ml-2">{endIcon}</span>}
        </button>
    )
}
