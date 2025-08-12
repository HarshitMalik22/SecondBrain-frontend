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
    "primary": "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 focus:ring-4 focus:ring-purple-300",
    "secondary": "bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 active:bg-purple-100 focus:ring-4 focus:ring-purple-100"
}

const sizeStyles = {
    "sm": "py-2 px-4 text-sm",
    "md": "py-2.5 px-5 text-base",
    "lg": "py-3 px-6 text-lg"
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
            className={`
                inline-flex items-center justify-center
                rounded-lg font-semibold
                transition-all duration-200 ease-in-out
                focus:outline-none focus:ring-2
                disabled:opacity-50 disabled:cursor-not-allowed
                ${variantStyles[variant]} ${sizeStyles[size]}
            `}
        >
            {startIcon && <span className="mr-2">{startIcon}</span>}
            {text}
            {endIcon && <span className="ml-2">{endIcon}</span>}
        </button>
    );
}
