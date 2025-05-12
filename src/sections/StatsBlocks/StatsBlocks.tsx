import { statsBlocks } from "@/consts/StatsBlocks/StatsBlocks";
import StatsBlock from "@components/StatsBlocks/StatsBlock";
import { motion } from "framer-motion";

import styles from "./statsBlocks.module.scss";

const StatsBlocks = () => {
  return (
    <motion.div
      className={styles.statsBlocks}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {statsBlocks.map((block) => (
        <StatsBlock key={block.id} title={block.title} value={block.value} />
      ))}
    </motion.div>
  );
};

export default StatsBlocks;
