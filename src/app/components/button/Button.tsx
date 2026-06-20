
type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  variant?: ButtonVariant;
  children: React.ReactNode;
}
import styles from "./button.module.scss";

const Button = (props: ButtonProps) => {
    const {type="button"} = props;
return (
    <button 
     type={type}
    
    
    className={styles.button}
    
    >
        {props.children}
    </button>
)
}

export default Button;