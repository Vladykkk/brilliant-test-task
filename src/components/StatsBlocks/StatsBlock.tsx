import styles from "./StatsBlock.module.scss";

interface StatsBlockProps {
  title: string;
  value: string;
}

const StatsBlock = ({ title, value }: StatsBlockProps) => {
  return (
    <div className={styles.statsBlock}>
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );
};

export default StatsBlock;
