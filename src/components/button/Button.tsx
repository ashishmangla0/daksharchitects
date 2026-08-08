"use client";
type ButtonVariant = "primary" | "secondary" | "danger" | 'tertiary' ;
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  variant?: ButtonVariant;
  children: React.ReactNode;
}
import styles from "./button.module.scss";

const Button = (props: ButtonProps) => {
  const { type = "button", onClick = () => {}, variant = "primary", children } = props;
  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${styles[`button_${variant}`]}`}>
      {children}
      <span className={`icon icon-arrow-right ${styles.button_icon}`}></span>
    </button>
  );
};

export default Button;
