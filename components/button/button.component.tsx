import { css } from "@/styled-system/css";
import { button } from "@/ui";
import { ButtonHTMLAttributes, ReactElement } from "react";

export type ButtonProps = {
  label: string;
  handleClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, type }: ButtonProps): ReactElement => {
  return (
    <button type={type} className={button()}>
      {label}
    </button>
  );
};

export default Button;
