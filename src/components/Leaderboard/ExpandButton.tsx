import styles from "./ExpandButton.module.scss";
import TopIcon from "./IconsComponents/DownIcon";

const ExpandButton = () => {
  return (
    <button className={styles.expandButton}>
      <TopIcon width={12} height={14} color="white" />
    </button>
  );
};

export default ExpandButton;
