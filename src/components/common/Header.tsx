import ButtonLink from "./buttons/ButtonLink/ButtonLink";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <ButtonLink size="md" noBorder={true} href="/">
        How It Works
      </ButtonLink>
      <ButtonLink size="md" href="/">
        Buy Salt AI
      </ButtonLink>
    </header>
  );
};

export default Header;
