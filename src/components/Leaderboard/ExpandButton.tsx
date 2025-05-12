import TopIcon from "./IconsComponents/DownIcon";
import styles from "./expandButton.module.scss";

const ExpandButton = () => {
  return (
    <button className={styles.expandButton}>
      <TopIcon width={12} height={14} color="white" />
    </button>
  );
};

export default ExpandButton;
