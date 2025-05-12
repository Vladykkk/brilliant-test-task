import Header from "@/components/common/Header";
import { contentVariants } from "@/consts/animation/animation";
import ButtonLink from "@components/common/buttons/ButtonLink/ButtonLink";
import { motion } from "framer-motion";

import StatsBlocks from "../StatsBlocks/StatsBlocks";
import styles from "./heroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Header />
      <div className={styles.heroContentWrapper}>
        <motion.div
          className={styles.heroSectionContent}
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={contentVariants}>
            A new economic primitive for funding decentralized AI
          </motion.h1>
          <motion.h2 variants={contentVariants}>
            We track, rank and pay for the best open source decentralized LLMs
            to compete against OpenAI
          </motion.h2>
          <motion.div
            className={styles.buttonContainer}
            variants={contentVariants}
          >
            <ButtonLink href="/">Buy Salt AI</ButtonLink>
            <ButtonLink noBorder={true} href="/">
              Try Now
            </ButtonLink>
          </motion.div>
        </motion.div>
        <StatsBlocks />
      </div>
    </div>
  );
};

export default HeroSection;
