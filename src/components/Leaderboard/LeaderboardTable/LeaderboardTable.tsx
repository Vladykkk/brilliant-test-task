import {
  LeaderboardData,
  LeaderboardHeader,
} from "@/consts/LeaderboardTable/LeaderboardTable";
import { motion } from "motion/react";

import ExpandButton from "../ExpandButton";
import styles from "./leaderboardTable.module.scss";

const LeaderboardTable = () => {
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
      className={styles.leaderboardTableContainer}
      variants={contentVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.leaderboardTableContainer}>
        <table className={styles.leaderboardTable}>
          <thead>
            <tr>
              {LeaderboardHeader.map((header) => (
                <th key={header.id}>{header.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LeaderboardData.map((data) => (
              <tr key={data.id}>
                <td>
                  <img src={data.icon} alt={data.name} />
                </td>
                <td>{data.id + 1}</td>
                <td>{data.name}</td>
                <td>{data.average}</td>
                <td>{data.arc}</td>
                <td>{data.hellaswag}</td>
                <td>{data.mmlu}</td>
                <td>{data.truthfulqa}</td>
                <td>{data.winogrande}</td>
                <td>{data.gsm8k}</td>
                <td>{data.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.expandButtonContainer}>
        <ExpandButton />
      </div>
    </motion.div>
  );
};

export default LeaderboardTable;
