import { contentVariants } from "@/consts/animation/animation";
import ButtonLink from "@components/common/buttons/ButtonLink/ButtonLink";
import { motion } from "framer-motion";

import styles from "./AIMissionSection.module.scss";

const AIMissionSection = () => {
  return (
    <motion.div
      className={styles.aiMissionSection}
      variants={contentVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.h2 variants={contentVariants}>
        Crowdsourcing our collective intelligence to build the best AI
      </motion.h2>
      <motion.div
        className={styles.aiMissionSectionContent}
        variants={contentVariants}
      >
        <motion.span variants={contentVariants}>
          Open source AI has been lagging behind the likes of Google and OpenAI
          by billions of dollars.
        </motion.span>
        <motion.p variants={contentVariants}>
          Salt aims to solve that by rewarding open source developers who
          contribute to the democratization of AI. We run competitions between
          AI models to find and reward the best AI models. As a result, our
          users will be able to access the latest cutting edge AI models.
        </motion.p>
      </motion.div>
      <ButtonLink href="/">Use The Cutting Edge AI</ButtonLink>
    </motion.div>
  );
};

export default AIMissionSection;
