import styles from "@components/common/buttons/button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  size?: "lg" | "md";
  noBorder?: boolean;
  href?: string;
}

const ButtonLink = ({
  children,
  size = "lg",
  href,
  noBorder = false,
}: ButtonProps) => {
  return (
    <a
      className={`${styles.button} ${styles[`button-${size}`]} ${
        noBorder ? styles.noBorder : ""
      }`}
      href={href}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
