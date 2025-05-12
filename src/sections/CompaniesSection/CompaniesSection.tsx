import { companies } from "@/consts/Companies/Companies";
import { motion } from "motion/react";

import styles from "./companiesSection.module.scss";

const CompaniesSection = () => {
  const contentVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.companiesSection}
      variants={contentVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects integrated into the Arrakis AI Ecosystem
      </motion.h2>
      <motion.div className={styles.companiesCarousel}>
        {companies.map((company, index) => (
          <img key={index} src={company} alt="Company" />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CompaniesSection;
