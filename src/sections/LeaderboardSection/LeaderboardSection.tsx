import LeaderboardHeader from "@/components/Leaderboard/LeaderboardHeader/LeaderboardHeader";
import LeaderboardTable from "@/components/Leaderboard/LeaderboardTable/LeaderboardTable";
import { motion } from "framer-motion";

import styles from "./leaderboardSection.module.scss";

const LeaderboardSection = () => {
  const contentVariants = {
    initial: {
      opacity: 0,
      y: 200,
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
      className={styles.leaderboardSection}
      variants={contentVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <LeaderboardHeader />
      <LeaderboardTable />
    </motion.div>
  );
};

export default LeaderboardSection;
