import { ButtonHTMLAttributes } from "react";
import { ButttonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export function Button({ text, ...props }: ButtonProps) {
  return <ButttonContainer {...props}>{text}</ButttonContainer>;
}
