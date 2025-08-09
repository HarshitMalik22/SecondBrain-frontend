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

export const Button = (props: ButtonProps) => {
    
    return <button></button>
}

<Button endIcon={"+"} variant ="primary" size="md" onClick={() => {}} text = {"asd"} startIcon = {"-"} />