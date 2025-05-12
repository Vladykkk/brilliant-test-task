import styles from "@components/common/buttons/Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "lg" | "md";
}

const ConfirmButton = ({ children, onClick, size = "lg" }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[`button-${size}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ConfirmButton;
