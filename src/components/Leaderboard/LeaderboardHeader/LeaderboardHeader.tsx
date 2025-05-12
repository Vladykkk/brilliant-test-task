import ConfirmButton from "@components/common/buttons/ConfirmButton/ConfirmButton";
import { motion } from "motion/react";

import styles from "./leaderboardHeader.module.scss";

const LeaderboardHeader = () => {
  const contentVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className={styles.leaderboardHeader}
      variants={contentVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.leaderboardHeaderTitle}>
        <h2>LLM Leaderboard</h2>
        <ConfirmButton>Submit your model</ConfirmButton>
      </div>
      <p>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </p>
    </motion.div>
  );
};

export default LeaderboardHeader;
