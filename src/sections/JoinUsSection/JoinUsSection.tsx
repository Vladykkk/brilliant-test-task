import { socials } from "@/consts/Socials/socials";
import { contentVariants } from "@/consts/animation/animation";
import { motion } from "motion/react";

import styles from "./JoinUsSection.module.scss";

const JoinUsSection = () => {
  return (
    <motion.div
      className={styles.joinUsSection}
      variants={contentVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={contentVariants}>Join our community</motion.h2>
      <motion.p variants={contentVariants}>
        Join us on our mission to to the moon & revolutionize open source AI
        development so that we can build a permissionless, democratized, and
        decentralized AI.
      </motion.p>
      <motion.p variants={contentVariants}>
        Let the fate of AI be in our hands and not that of big tech companies.
      </motion.p>
      <motion.div className={styles.socials} variants={contentVariants}>
        {socials.map((social, index) => (
          <img key={index} src={social} alt="Social" />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default JoinUsSection;
